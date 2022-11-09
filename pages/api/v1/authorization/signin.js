import bcrypt from "bcryptjs";
import { setCookie } from "cookies-next";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	createAccessToken,
	createRefreshToken,
} from "../../../../tokens/tokens";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "POST");

	const { promiseConn } = req.con;
	const { email, password } = req.body;
	const greetings = ["👋", "🙂", "😘", "😎", "👌", "🖐", "🙌"];

	const querys = {
		find: {
			q: "SELECT u.user_ID, u.first_name, u.last_name, u.username, u.email, u.birthday, u.password, up.profile_picture, up.cover_picture FROM users u JOIN user_pictures up USING(user_ID) WHERE email = ?",
			data: [email],
		},
		updateCredential: {
			q: "UPDATE user_credentials SET access_token = ? WHERE user_ID = ?",
		},
	};

	try {
		// find user
		const [rowS] = await promiseConn.execute(querys.find.q, querys.find.data);

		// check if user already exist
		const existUser = rowS.length;
		if (!existUser) return apiErrorHandler?.(res, 400, "User doesn't exist");

		// user instance
		const currentUser = {
			user_ID: rowS?.[0].user_ID,
			firstName: rowS?.[0].first_name,
			lastName: rowS?.[0].last_name,
			username: rowS?.[0].username,
			email: rowS?.[0].email,
			birthday: rowS?.[0].birthday,
			password: rowS?.[0].password,
			pictures: {
				profile: rowS?.[0].profile_picture,
				cover: rowS?.[0].cover_picture,
			},
		};

		// check password
		const unhashedPass = bcrypt.compareSync(password, currentUser.password);
		if (!unhashedPass)
			return apiErrorHandler?.(res, 400, "Invalide password");

		// create tokens
		const { password: pass, ...rest } = currentUser;
		const accessToken = createAccessToken?.({ ...rest });
		const refreshToken = createRefreshToken?.({ ...rest });

		// update user credentials
		const [_] = await promiseConn.execute(querys.updateCredential.q, [
			accessToken,
			currentUser.user_ID,
		]);

		// add cookie
		setCookie("refresh_token", refreshToken, {
			req,
			res,
			httpOnly: true,
			maxAge: 60 * 60 * 60,
		});

		// return payload if needed
		res.status(200).json({
			success: true,
			message: `So long, ${currentUser.username} ${
				greetings[Math.floor(Math.random() * 7)]
			}`,
			payload: {
				...rest,
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(handler);
