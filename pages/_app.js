import { Layout } from "../components/layout";
import { AuthProvider } from "../store/contexts/AuthContext";
import { GlobalProvider } from "../store/contexts/GlobalContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	pageProps.user ||= null;

	return (
		<GlobalProvider>
			<AuthProvider user={pageProps.user}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</GlobalProvider>
	);
};

export default MyApp;
