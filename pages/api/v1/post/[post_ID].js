import checkConnection from "../../../../middlewares/checkConnection";
import checkAuth from "./../../../../middlewares/checkAuth";
import Post from "./../../../../configs/schema/post.schema";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "GET");

	const { promiseConn } = req.con;
	const { user_ID } = req.payload;
	const { post_ID } = req.query;

	const querys = {
		getPosts: {
			q: `SELECT up.post_ID, up.type, up.date, up.confidentiality, up.description, up.content, up.reactions, up.shares, u.user_ID, u.username, upc.profile_picture AS profile FROM user_posts up JOIN users u USING(user_ID) JOIN user_pictures upc USING(user_ID) WHERE post_ID = ? LIMIT 1`,
			data: [post_ID],
		},
	};

	try {
		// get post
		const [rowS] = await promiseConn.query(
			querys.getPosts.q,
			querys.getPosts.data
		);

		// posts
		const post = rowS?.[0];

		// send response
		res.status(200).json({
			success: true,
			payload: new Post(user_ID, post).getPost(),
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
