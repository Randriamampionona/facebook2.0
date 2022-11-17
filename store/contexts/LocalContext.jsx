import { createContext, useContext, useReducer } from "react";
import {
	useDelete,
	useEdit,
	useEditPost,
	useReact,
	useUploadPost,
} from "../../hooks";
import localReducer from "../reducers/localReducer";
import {
	DELETE_POST,
	EDIT_POST,
	EDIT_PROFILE_INFOS,
	REACT_POST,
	UPLOAD_POST,
} from "../actions/actions";

const initState = {
	DATA: null,
	editFunc: async (a, b) => null,
	reactFunc: async (a) => null,
	uploadPostFun: async (a, b) => null,
	editPostFun: async (a, b) => null,
	deletePostFun: async (a, b) => null,
};

const Context = createContext(initState);

export const LocalProvider = ({ children, DATA }) => {
	const { edit } = useEdit();
	const { react } = useReact();
	const { uploadPost } = useUploadPost();
	const { editPost } = useEditPost();
	const { deletePost } = useDelete();
	const [state, dispatch] = useReducer(localReducer, { ...initState, DATA });

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

	const uploadPostFun = async (payload, setValues) => {
		dispatch({
			type: UPLOAD_POST,
			payload: await uploadPost?.(payload, setValues),
		});
	};

	const editPostFun = async (payload, setValues) => {
		dispatch({
			type: EDIT_POST,
			payload: await editPost?.(payload, setValues),
		});
	};

	const deletePostFun = async (payload, setValues) => {
		dispatch({
			type: DELETE_POST,
			payload: await deletePost?.(payload, setValues),
		});
	};

	const values = {
		DATA: state.DATA,
		editFunc,
		reactFunc,
		uploadPostFun,
		editPostFun,
		deletePostFun,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const LocalContext = () => {
	return useContext(Context);
};
