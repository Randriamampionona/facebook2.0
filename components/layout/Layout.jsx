import { Fragment } from "react";
import { useRouter } from "next/router";
import { Header, MetaHead, MobileMenu, UploadModal } from "../common";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import { AuthContext } from "../../store/contexts/AuthContext";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	const { isMobileMenuOpen, uploadModale } = GlobalContext();
	const { user } = AuthContext();

	return (
		<Fragment>
			<MetaHead />
			<ToastContainer position="top-right" theme="dark" autoClose={2000} />
			{user && uploadModale.open && <UploadModal />}
			{pathname !== "/" && pathname !== "/404" && <Header />}
			<AnimatePresence exitBeforeEnter>
				{user && isMobileMenuOpen && <MobileMenu />}
			</AnimatePresence>
			{children}
		</Fragment>
	);
};

export default Layout;
