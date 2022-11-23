// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../utils/errorHandler";
import checkConnection from "../../../middlewares/checkConnection";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "GET");

	const { promiseConn } = req.con;

	try {
		// get something in DB
		const users = await promiseConn.query("SELECT * FROM users");

		res.status(200).json({ success: true, users: users[0] });
	} catch (error) {
		apiErrorHandler?.(res, 500, error);
	}
};

export default checkConnection?.(handler);
