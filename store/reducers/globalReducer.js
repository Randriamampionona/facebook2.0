import {
	TOOGLE_MOBILE_MENU,
	TOOGLE_PROFILE_MENU,
	TOOGLE_PROFILE_MODAL,
	TOOGLE_UPLOAD_MODAL,
} from "../actions/actions";

const globalReducer = (state, action) => {
	switch (action.type) {
		case TOOGLE_PROFILE_MENU:
			return {
				...state,
				isProfileMenuOpen: action.payload,
			};

		case TOOGLE_MOBILE_MENU:
			return {
				...state,
				isMobileMenuOpen: action.payload,
			};

		case TOOGLE_PROFILE_MODAL:
			return {
				...state,
				modal: {
					open: !state.modal.open,
					form: action.payload,
				},
			};

		case TOOGLE_UPLOAD_MODAL:
			return {
				...state,
				uploadModale: {
					...action.payload,
					open: !state.uploadModale.open,
					type: action.payload.type,
				},
			};

		default:
			return state;
	}
};

export default globalReducer;
