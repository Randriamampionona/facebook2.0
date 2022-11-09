import { createContext, useContext, useReducer } from "react";
import { useReact } from "../../../hooks";
import { REACT_POST } from "../../actions/actions";
import localReducer from "../../reducers/localReducer";

const initState = {};

const Context = createContext(initState);

export const HomeProviderLocal = ({ DATA: data, children }) => {
	const { react } = useReact();
	const [state, dispatch] = useReducer(localReducer, data);

	const reactFunc = async (payload) => {
		dispatch({
			type: REACT_POST,
			payload: await react?.(payload),
		});
	};

	const values = {
		DATA: state,
		reactFunc,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const HomeContextLocal = () => {
	return useContext(Context);
};
