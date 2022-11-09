import checkAuth from "../../../../middlewares/checkAuth";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "DELETE");

	const { promiseConn } = req.con;
	const { post_id } = req.headers;

	const querys = {
		deletePost: {
			q: "DELETE FROM user_posts WHERE post_ID = ?",
			data: [post_id],
		},
	};

	try {
		// delete post
		await promiseConn.query(querys.deletePost.q, querys.deletePost.data);

		//send response
		res.status(200).json({
			success: true,
			message: "Post deleted",
			snapshot: {
				post_ID: post_id,
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
