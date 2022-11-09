import checkConnection from "./../../../../middlewares/checkConnection";
import checkAuth from "./../../../../middlewares/checkAuth";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";
import idGenerator from "./../../../../utils/idGenerator";
import Post from "./../../../../configs/schema/post.schema";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "POST");

	const { promiseConn } = req.con;
	const row_ID = idGenerator?.(6);

	const {
		user_ID,
		username,
		pictures: { profile },
	} = req.payload;
	const {
		post: { type, content },
		confidentiality,
		description,
	} = req.body;

	const querys = {
		addPost: {
			q: "INSERT INTO user_posts SET post_ID = ?, user_ID = ?, type = ?, date = DEFAULT, confidentiality = ?, description = ?, content = ?, reactions = DEFAULT, shares = DEFAULT",
			data: [row_ID, user_ID, type, confidentiality, description, content],
		},
	};

	try {
		// add post
		await promiseConn.query(querys.addPost.q, querys.addPost.data);

		// post
		const post = {
			post_ID: row_ID,
			type,
			date: new Date(),
			confidentiality,
			description,
			content,
			reactions: JSON.stringify({
				like: [],
				care: [],
				heart: [],
				wow: [],
				angry: [],
				sad: [],
				haha: [],
			}),
			shares: JSON.stringify([]),
			user_ID,
			username,
			profile,
		};

		// send response
		res.status(201).json({
			success: true,
			message: "New post added",
			snapshot: new Post(user_ID, post).getPost(),
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
