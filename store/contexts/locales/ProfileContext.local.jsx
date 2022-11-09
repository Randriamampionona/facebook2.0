import { createContext, useContext, useReducer } from "react";
import { EDIT_PROFILE_INFOS, REACT_POST } from "../../actions/actions";
import localReducer from "../../reducers/localReducer";
import { useEdit, useReact } from "./../../../hooks";

const initState = {};

const Context = createContext(initState);

export const ProfileProviderLocal = ({ DATA: data, children }) => {
	const { edit } = useEdit();
	const { react } = useReact();
	const [state, dispatch] = useReducer(localReducer, data);

	const editFunc = async (payload, setValues) => {
		dispatch({
			type: EDIT_PROFILE_INFOS,
			payload: await edit?.(payload, setValues),
		});
	};

	const reactFunc = async (payload) => {
		dispatch({
			type: REACT_POST,
			payload: await react?.(payload),
		});
	};

	const values = {
		DATA: state,
		editFunc,
		reactFunc,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const ProfileContextLocal = () => {
	return useContext(Context);
};
