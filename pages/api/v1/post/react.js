import checkConnection from "./../../../../middlewares/checkConnection";
import checkAuth from "./../../../../middlewares/checkAuth";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "PATCH");

	const { promiseConn } = req.con;
	const { user_ID } = req.payload;
	const { r: react } = req.query;
	const { post_id: post_ID } = req.headers;

	const querys = {
		getReactions: {
			q: "SELECT reactions FROM user_posts WHERE post_ID = ?",
			data: [post_ID],
		},
		updateReaction: {
			q: "UPDATE user_posts SET reactions = ? WHERE post_ID = ?",
			data: [post_ID],
		},
	};

	try {
		// get post reations
		const [rowS] = await promiseConn.query(
			querys.getReactions.q,
			querys.getReactions.data
		);

		// const new reactions
		const newReactionHandler = (newReactions) => JSON.stringify(newReactions);
		let newReactions;
		let reactHint;

		// reactions
		const oldReactions = JSON.parse(rowS?.[0].reactions);

		// check if already reacted
		const hasReacted = !Object.values(oldReactions)
			.map((r) => r.includes(user_ID))
			.every((b) => b == false);

		// last clicked reaction
		const lastClickedReaction =
			Object.entries(oldReactions).find((r) =>
				r[1].includes(user_ID)
			)?.[0] || undefined;

		// get displayed reaction
		const displayedReact = (obj) => {
			return Object.entries(obj)
				.sort((a, b) => b[1].length - a[1].length)
				.filter((r) => r[1].length > 0)
				.map((n) => n[0])
				.slice(0, 3);
		};

		if (hasReacted && lastClickedReaction === react) {
			const reactObj = {
				...oldReactions,
				[react]: oldReactions[react]?.filter((r) => r != user_ID),
			};

			newReactions = newReactionHandler(reactObj);

			reactHint = {
				hasReacted: false,
				displayedReact: displayedReact(reactObj),
			};
		}

		if (hasReacted && lastClickedReaction !== react) {
			const reactObj = {
				...oldReactions,
				[lastClickedReaction]: oldReactions[lastClickedReaction]?.filter(
					(n) => n != user_ID
				),
				[react]: [...oldReactions[react], user_ID],
			};
			newReactions = newReactionHandler(reactObj);

			reactHint = {
				hasReacted: true,
				react,
				displayedReact: displayedReact(reactObj),
			};
		}

		if (!hasReacted) {
			const reactObj = {
				...oldReactions,
				[react]: [...oldReactions[react], user_ID],
			};

			newReactions = newReactionHandler(reactObj);

			reactHint = {
				hasReacted: true,
				react,
				displayedReact: displayedReact(reactObj),
			};
		}

		// update reactions
		await promiseConn.query(querys.updateReaction.q, [
			newReactions,
			...querys.updateReaction.data,
		]);

		// send response
		res.status(200).json({
			success: true,
			message: "Success",
			snapshot: {
				post_ID,
				reactHint,
				likesCount: {
					length: Object.values(JSON.parse(newReactions))
						?.map((arr, _) => arr.length)
						?.reduce((acc, cur) => acc + cur, 0),

					react: {
						...JSON.parse(newReactions),
					},
				},
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
