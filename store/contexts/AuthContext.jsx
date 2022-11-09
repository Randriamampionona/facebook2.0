import { createContext, useContext, useReducer, useEffect } from "react";
import { useLogout, useSignin, useSignup } from "../../hooks";
import { SIGN_UP, SIGN_IN, LOG_OUT, SET_USER } from "../actions/actions";
import authReducer from "./../reducers/authReducer";

const initState = {
	user: null,
};

const initializer = (data) => {
	return {
		...initState,
		user: data,
	};
};

const Context = createContext(initState);

export const AuthProvider = ({ user, children }) => {
	const { signup } = useSignup();
	const { signin } = useSignin();
	const { logout } = useLogout();
	const [state, dispatch] = useReducer(authReducer, initState, () =>
		initializer(user)
	);

	useEffect(() => {
		dispatch({
			type: SET_USER,
			payload: user,
		});
	}, [user]);

	const signupFunc = async (data, setData) => {
		dispatch({
			type: SIGN_UP,
			payload: await signup?.(data, setData),
		});
	};

	const signinFunc = async (data, setData) => {
		dispatch({
			type: SIGN_IN,
			payload: await signin?.(data, setData),
		});
	};

	const logoutFunc = async (data, setData) => {
		dispatch({
			type: LOG_OUT,
			payload: await logout?.(data, setData),
		});
	};

	const values = {
		user: user || state.user,
		message: state.message,
		signupFunc,
		signinFunc,
		logoutFunc,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const AuthContext = () => {
	return useContext(Context);
};
