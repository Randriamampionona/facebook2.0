import checkAuth from "../../../../middlewares/checkAuth";
import { methodErrorHandler } from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "GET");

	const payload = req.payload;

	res.status(200).json({
		success: true,
		payload,
	});
};

export default checkAuth?.(handler);
