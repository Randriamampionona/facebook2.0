import mysqlDB from "../configs/mysqlBD";
import { apiErrorHandler } from "../utils/errorHandler";

const checkPost = (handler) => {
	return async (req, res) => {
		const { post_id: header_post_ID } = req.headers;
		const { post_ID: query_post_ID } = req.query;
		const { post_ID: body_post_ID } = req.body;

		const query =
			"SELECT COUNT(*) AS exist_post FROM user_posts WHERE post_ID = ?";

		try {
			mysqlDB.getConnection(async (err, con) => {
				if (err) return apiErrorHandler?.(res, 500, err);

				const result = await con
					.promise()
					.query(query, query_post_ID || header_post_ID || body_post_ID);
				const existPost = Number(result?.[0]?.[0]?.exist_post);

				if (!existPost) {
					return apiErrorHandler?.(res, 403, "Post no longer exist");
				}

				// next
				return handler(req, res);
			});
		} catch (error) {
			return apiErrorHandler?.(res, 500, error);
		}
	};
};

export default checkPost;
