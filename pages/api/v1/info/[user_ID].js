import { apiErrorHandler } from "../../../../utils/errorHandler";
import checkConnection from "./../../../../middlewares/checkConnection";
import Post from "./../../../../configs/schema/post.schema";

const handler = async (req, res) => {
	const { promiseConn } = req.con;
	const { user_ID } = req.query;
	const { user_id } = req.headers;

	const querys = {
		getCurrentuser: {
			q: "SELECT U.user_ID, U.first_name AS firstName, U.last_name AS lastName, U.username, U.email, U.birthday, UP.profile_picture AS profile, UP.cover_picture AS cover, UI.bio, UI.city, UI.country, UI.love_cituation AS loveCituation, UI.hobbies FROM users U JOIN user_pictures UP USING(user_ID) JOIN user_infos UI USING(user_ID) WHERE user_ID = ? LIMIT 1",
			data: [user_ID],
		},

		getPosts: {
			q: "SELECT up.post_ID, up.type, up.date, up.confidentiality, up.description, up.content, up.reactions, up.shares, u.user_ID, u.username, upc.profile_picture AS profile FROM user_posts up JOIN users u USING(user_ID) JOIN user_pictures upc USING(user_ID) WHERE user_ID = ? LIMIT 10",
			data: [user_ID],
		},
	};

	try {
		// get current user
		const [rowS1] = await promiseConn.query(
			querys.getCurrentuser.q,
			querys.getCurrentuser.data
		);

		// currentUser
		const currentUser = rowS1[0];

		// get user posts
		const [rowS2] = await promiseConn.query(
			querys.getPosts.q,
			querys.getPosts.data
		);

		// posts
		const posts = rowS2;

		// send response
		res.status(200).json({
			success: true,
			payload: {
				// current user
				currentUser: {
					isMine: currentUser.user_ID === user_id,
					user_ID: currentUser.user_ID,
					firstName: currentUser.firstName,
					lastName: currentUser.lastName,
					username: currentUser.username,
					email: currentUser.email,
					birthday: currentUser.birthday,
					pictures: {
						profile: currentUser.profile,
						cover: currentUser.cover,
					},
				},

				// infos
				infos: {
					bio: currentUser.bio,
					city: currentUser.city,
					country: currentUser.country,
					hobbies: JSON.parse(currentUser.hobbies),
					loveCituation: currentUser.loveCituation,
				},

				// posts
				posts: posts?.map((post) => {
					return new Post(user_id, post).getPost();
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
