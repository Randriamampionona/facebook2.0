import { EDIT_PROFILE_INFOS, REACT_POST } from "../actions/actions";

const localReducer = (state, action) => {
	switch (action.type) {
		case EDIT_PROFILE_INFOS:
			return {
				...state,
				infos: {
					...state.infos,
					...action.payload,
				},
			};

		case REACT_POST:
			return {
				...state,
				posts: state.posts?.map((post) => {
					if (post.post_ID === action.payload.post_ID) {
						return {
							...post,
							count: {
								...post.count,
								likesCount: {
									...action.payload.likesCount,
								},
							},

							post: {
								...post.post,
								reactHint: action.payload.reactHint,
							},
						};
					}

					return post;
				}),
			};

		default:
			return state;
	}
};

export default localReducer;
