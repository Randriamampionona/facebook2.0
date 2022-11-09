import { SIGN_UP, SIGN_IN, LOG_OUT, SET_USER } from "../actions/actions";

const authReducer = (state, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				user: action.payload,
			};

		case SIGN_IN:
			return {
				...state,
				user: action.payload,
			};

		case LOG_OUT:
			return {
				...state,
				user: action.payload,
			};

		case SET_USER:
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;
