import Post from "../../../../configs/schema/post.schema";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "GET");

	const { promiseConn } = req.con;
	const { user_id: user_ID } = req.headers;
	const { p: page } = req.query;

	const postType = () => {
		return page === "gaming"
			? "WHERE up.type != 'photo' AND up.type != 'text'"
			: page === "watch"
			? "WHERE up.type != 'photo' AND up.type != 'text'"
			: "WHERE up.type = 'photo' OR up.type = 'text' OR up.type = 'video'";
	};

	const querys = {
		getPosts: {
			q: `SELECT up.post_ID, up.type, up.date, up.confidentiality, up.description, up.content, up.reactions, up.shares, u.user_ID, u.username, upc.profile_picture AS profile FROM user_posts up JOIN users u USING(user_ID) JOIN user_pictures upc USING(user_ID) ${postType()} ORDER BY up.date DESC LIMIT 10`,
		},
	};

	try {
		const [rowS] = await promiseConn.query(querys.getPosts.q);

		// posts
		const posts = rowS;

		// set cache
		res.setHeader("Cache-Control", "s-maxage=86400");

		res.status(200).json({
			success: true,
			payload: {
				// posts
				posts: posts?.map((post) => {
					return new Post(user_ID, post).getPost();
				}),
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(handler);
