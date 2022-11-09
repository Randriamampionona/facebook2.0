import mysqlDB from "./../configs/mysqlBD";
import { verify } from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { apiErrorHandler } from "./../utils/errorHandler";
import { createAccessToken, createRefreshToken } from "../tokens/tokens";

const checkAuth = (handler) => {
	return async (req, res) => {
		const refreshToken =
			req.cookies.refresh_token || req.headers.refresh_token;

		// return error if no cookies
		if (!refreshToken)
			return apiErrorHandler?.(
				res,
				401,
				"Unauthorized (no cookie was sent)"
			);

		try {
			// verify if cookie valide
			const dataFromCookie = verify(
				refreshToken,
				process.env.NEXT_REFRESH_TOKEN_SECRET
			);

			// querys
			const querys = {
				getCredential: {
					q: "SELECT uc.access_token, up.profile_picture AS profilePicture, up.cover_picture AS coverPicture FROM user_credentials uc JOIN user_pictures up USING(user_ID) WHERE user_ID = ?",
					data: [dataFromCookie.user_ID],
				},
				updateCredential: {
					q: "UPDATE user_credentials SET access_token = ? WHERE user_ID = ?",
				},
			};

			(async () => {
				const promiseConn = mysqlDB.promise();

				try {
					// get and verify if access token valide
					const [rowS] = await promiseConn.query(
						querys.getCredential.q,
						querys.getCredential.data
					);

					try {
						// verify access_token in db
						const currentUser = verify(
							rowS?.[0].access_token,
							process.env.NEXT_ACCESS_TOKEN_SECRET
						);

						// next
						req.payload = {
							isAuth: true,
							...currentUser,
						};

						return handler(req, res);
					} catch (error) {
						if (error.name !== "TokenExpiredError")
							return apiErrorHandler?.(res, 401, error);

						// create new access_T & refresh_T
						const { iat, exp, ...rest } = dataFromCookie;
						const newAccessToken = createAccessToken?.({ ...rest });
						const newRefreshToken = createRefreshToken?.({ ...rest });

						// update credential
						await promiseConn.query(querys.updateCredential.q, [
							newAccessToken,
							dataFromCookie.user_ID,
						]);

						// update cookie
						setCookie("refresh_token", newRefreshToken, {
							req,
							res,
							httpOnly: true,
							maxAge: 60 * 60 * 60,
						});

						// next
						req.payload = {
							isAuth: true,
							...rest,
						};

						return handler(req, res);
					}
				} catch (error) {
					return apiErrorHandler?.(res, 401, error);
				}
			})();
		} catch (error) {
			return apiErrorHandler?.(res, 401, error);
		}
	};
};

export default checkAuth;
