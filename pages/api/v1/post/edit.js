import checkAuth from "../../../../middlewares/checkAuth";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "PATCH");

	const { promiseConn } = req.con;
	const { post_ID, description } = req.body;

	const querys = {
		editPost: {
			q: "UPDATE user_posts SET description = ? WHERE post_ID = ?",
			data: [description, post_ID],
		},
	};

	try {
		// update post
		await promiseConn.query(querys.editPost.q, querys.editPost.data);

		// send response
		res.status(200).json({
			success: true,
			message: "Post updated",
			snapshot: {
				...req.body,
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
