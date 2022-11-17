import checkAuth from "../../../../middlewares/checkAuth";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "PATCH");

	const { promiseConn } = req.con;
	const {
		post_ID,
		post: { type, content },
		confidentiality,
		description,
	} = req.body;

	// format content
	const formatedContent = () => {
		if (type === "text") {
			return JSON.stringify(content);
		}

		return content;
	};

	const querys = {
		editPost: {
			q: "UPDATE user_posts SET confidentiality= ?, description = ?, content = ? WHERE post_ID = ?",
			data: [confidentiality, description, formatedContent(), post_ID],
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
