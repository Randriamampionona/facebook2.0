import { deleteCookie } from "cookies-next";
import checkAuth from "../../../../middlewares/checkAuth";
import checkConnection from "./../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "PATCH");

	const { promiseConn } = req.con;
	const { user_ID } = req.payload;

	const querys = {
		updateCredential: {
			q: "UPDATE user_credentials SET access_token = ? WHERE user_ID = ?",
			data: [null, user_ID],
		},
	};

	try {
		await promiseConn.query(
			querys.updateCredential.q,
			querys.updateCredential.data
		);

		// delete cookie
		deleteCookie("refresh_token", { req, res });

		// send response
		res.status(200).json({
			success: true,
			message: "See you soon!",
			payload: null,
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
