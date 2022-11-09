import { createContext, useContext, useReducer } from "react";
import { TOOGLE_PROFILE_MENU, TOOGLE_PROFILE_MODAL } from "./../actions/actions";
import globalReducer from "./../reducers/globalReducer";

const initState = {
	isProfileMenuOpen: false,
	modal: {
		open: false,
		form: null
	}
};

const Context = createContext(initState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initState);

	const toogleProfileMenu = (key) => {
		dispatch({
			type: TOOGLE_PROFILE_MENU,
			payload: key,
		});
	};

	const toogleProfileModal = (payload) => {
		dispatch({
			type: TOOGLE_PROFILE_MODAL,
			payload
		});
	};

	const values = {
		isProfileMenuOpen: state.isProfileMenuOpen,
		modal: state.modal,
		toogleProfileMenu,
		toogleProfileModal,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const GlobalContext = () => {
	return useContext(Context);
};
