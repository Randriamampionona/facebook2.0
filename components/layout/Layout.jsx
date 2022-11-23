import { Fragment } from "react";
import { useRouter } from "next/router";
import { Header, MetaHead, UploadModal } from "../common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import { AuthContext } from "../../store/contexts/AuthContext";

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	const { uploadModale } = GlobalContext();
	const { user } = AuthContext();

	return (
		<Fragment>
			<MetaHead />
			<ToastContainer position="top-right" theme="dark" autoClose={2000} />
			{user && uploadModale.open && <UploadModal />}
			{pathname !== "/" && <Header />}
			{children}
		</Fragment>
	);
};

export default Layout;
