import { useRouter } from "next/router";
import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import {
	TOOGLE_MOBILE_MENU,
	TOOGLE_PROFILE_MENU,
	TOOGLE_PROFILE_MODAL,
	TOOGLE_UPLOAD_MODAL,
} from "./../actions/actions";
import globalReducer from "./../reducers/globalReducer";

const initState = {
	mutateKey: null,
	isProfileMenuOpen: false,
	isMobileMenuOpen: false,
	modal: {
		open: false,
		form: null,
	},
	uploadModale: {
		open: false,
		type: "text",
	},
};

const Context = createContext(initState);

export const GlobalProvider = ({ children, mutateKey }) => {
	const [state, dispatch] = useReducer(globalReducer, {
		...initState,
	});
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url) =>
			url !== router.pathname ? setIsLoading(true) : setIsLoading(false);
		const handleComplete = () => setIsLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("hashChangeStart", handleStart);
		router.events.on("beforeHistoryChange", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
		router.events.on("hashChangeComplete", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("hashChangeStart", handleStart);
			router.events.off("beforeHistoryChange", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
			router.events.off("hashChangeComplete", handleComplete);
		};
	}, [router]);

	const toogleProfileMenu = (key) => {
		dispatch({
			type: TOOGLE_PROFILE_MENU,
			payload: key,
		});
	};

	const toogleMobileMenu = (key) => {
		dispatch({
			type: TOOGLE_MOBILE_MENU,
			payload: key,
		});
	};

	const toogleProfileModal = (payload) => {
		dispatch({
			type: TOOGLE_PROFILE_MODAL,
			payload,
		});
	};

	const toogleUploadModal = (payload) => {
		dispatch({
			type: TOOGLE_UPLOAD_MODAL,
			payload,
		});
	};

	const values = {
		mutateKey,
		isProfileMenuOpen: state.isProfileMenuOpen,
		isMobileMenuOpen: state.isMobileMenuOpen,
		modal: state.modal,
		uploadModale: state.uploadModale,
		isLoading,
		toogleProfileMenu,
		toogleMobileMenu,
		toogleProfileModal,
		toogleUploadModal,
		setIsLoading,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const GlobalContext = () => {
	return useContext(Context);
};
