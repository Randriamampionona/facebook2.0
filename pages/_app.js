import axios from "axios";
import { SWRConfig } from "swr";
import { Layout } from "../components/layout";
import { AuthProvider } from "../store/contexts/AuthContext";
import { GlobalProvider } from "../store/contexts/GlobalContext";
import "../styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const MyApp = ({ Component, pageProps }) => {
	pageProps.user ||= null;

	const configValue = {
		fallback: pageProps.fallback,
		refreshInterval: 5000,
		dedupingInterval: 5000,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	};

	return (
		<GlobalProvider mutateKey={pageProps.mutateKey}>
			<AuthProvider user={pageProps.user}>
				<SWRConfig value={configValue}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</AuthProvider>
		</GlobalProvider>
	);
};

export default MyApp;
