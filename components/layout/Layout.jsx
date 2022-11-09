import { Fragment } from "react";
import { useRouter } from "next/router";
import { Header, MetaHead } from "../common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
	const { pathname } = useRouter();

	return (
		<Fragment>
			<MetaHead />
			<ToastContainer position="top-right" theme="dark" />
			{pathname !== "/" && <Header />}
			{children}
		</Fragment>
	);
};

export default Layout;
