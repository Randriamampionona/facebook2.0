class Post {
	#post_ID;
	#owner;
	#post;
	#count;

	constructor(loggedInUser_ID, responseDB) {
		// reactions
		const oldReactions = JSON.parse(responseDB?.reactions);

		// check if already reacted
		const hasReacted = !Object.values(oldReactions)
			.map((r) => r.includes(loggedInUser_ID))
			.every((b) => b == false);

		// last clicked reaction
		const lastClickedReaction =
			Object.entries(oldReactions).find((r) =>
				r[1].includes(loggedInUser_ID)
			)?.[0] || undefined;

		// get displayed reaction
		const displayedReact = Object.entries(oldReactions)
			.sort((a, b) => b[1].length - a[1].length)
			.filter((r) => r[1].length > 0)
			.map((n) => n[0])
			.slice(0, 3);

		// check if post is mine
		const isMine = () => {
			return responseDB?.user_ID === loggedInUser_ID;
		};

		// format content
		const formatedContent = (type, content) => {
			if (type === "text") {
				return JSON.parse(content);
			}

			return content;
		};

		this.#post_ID = responseDB?.post_ID;
		this.#owner = {
			user_ID: responseDB?.user_ID,
			profile: responseDB?.profile,
			username: responseDB?.username,
			isMine: isMine(),
		};
		this.#post = {
			type: responseDB?.type,
			date: new Date(responseDB?.date),
			confidentiality: responseDB?.confidentiality,
			description: responseDB?.description,
			content: formatedContent(responseDB?.type, responseDB?.content),
			reactHint: {
				hasReacted,
				react: lastClickedReaction,
				displayedReact,
			},
		};
		this.#count = {
			likesCount: {
				length: Object.values(JSON.parse(responseDB?.reactions))
					?.map((arr, _) => arr.length)
					?.reduce((acc, cur) => acc + cur, 0),
				react: {
					like: JSON.parse(responseDB?.reactions)?.like,
					care: JSON.parse(responseDB?.reactions)?.care,
					heart: JSON.parse(responseDB?.reactions)?.heart,
					wow: JSON.parse(responseDB?.reactions)?.wow,
					angry: JSON.parse(responseDB?.reactions)?.angry,
					sad: JSON.parse(responseDB?.reactions)?.sad,
					haha: JSON.parse(responseDB?.reactions)?.haha,
				},
			},
			sharesCount: {
				length: JSON.parse(responseDB?.shares)?.length,
				share: JSON.parse(responseDB?.shares),
			},
		};
	}

	getPost = () => {
		return {
			post_ID: this.#post_ID,
			owner: this.#owner,
			post: this.#post,
			count: this.#count,
		};
	};
}

export default Post;
