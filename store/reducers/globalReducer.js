import { TOOGLE_PROFILE_MENU, TOOGLE_PROFILE_MODAL } from "../actions/actions";

const globalReducer = (state, action) => {
	switch (action.type) {
		case TOOGLE_PROFILE_MENU:
			return {
				...state,
				isProfileMenuOpen: action.payload,
			};

		case TOOGLE_PROFILE_MODAL:
			return {
				...state,
				modal: {
					open: !state.modal.open,
					form: action.payload,
				},
			};

		default:
			return state;
	}
};

export default globalReducer;
