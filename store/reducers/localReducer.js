import {
	DELETE_POST,
	EDIT_POST,
	EDIT_PROFILE_INFOS,
	REACT_POST,
	UPLOAD_POST,
} from "../actions/actions";

const localReducer = (state, action) => {
	switch (action.type) {
		case EDIT_PROFILE_INFOS:
			return {
				...state,
				DATA: {
					...state.DATA,
					infos: {
						...state.DATA.infos,
						...action?.payload,
					},
				},
			};

		case REACT_POST:
			return {
				...state,
				DATA: {
					...state.DATA,
					posts: state.DATA.posts?.map((post) => {
						if (post.post_ID === action?.payload?.post_ID) {
							return {
								...post,
								count: {
									...post.count,
									likesCount: {
										...action?.payload?.likesCount,
									},
								},

								post: {
									...post.post,
									reactHint: action?.payload?.reactHint,
								},
							};
						}

						return post;
					}),
				},
			};

		case UPLOAD_POST: {
			return {
				...state,
				DATA: {
					...state.DATA,
					posts: [action?.payload, ...state.DATA.posts],
				},
			};
		}

		case EDIT_POST: {
			return {
				...state,
				DATA: {
					...state.DATA,
					posts: state.DATA.posts?.map((post) => {
						if (post.post_ID === action?.payload?.post_ID) {
							return {
								...post,
								post: {
									...post.post,
									description: action?.payload?.description,
									type: action?.payload?.post.type,
									confidentiality: action?.payload?.confidentiality,
									content: action?.payload?.post.content,
								},
							};
						}

						return post;
					}),
				},
			};
		}

		case DELETE_POST: {
			return {
				...state,
				DATA: {
					...state.DATA,
					posts: state.DATA.posts?.filter(
						(p) => p.post_ID !== action?.payload?.post_ID
					),
				},
			};
		}

		default:
			return state;
	}
};

export default localReducer;
