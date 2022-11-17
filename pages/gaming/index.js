import axios from "axios";
import { GamingContainer, LeftAside } from "../../components/gaming";
import { LocalProvider } from "../../store/contexts/LocalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import verifyAuth from "../../utils/verifyAuth";

const GaminPage = ({ DATA }) => {
	return (
		<LocalProvider DATA={DATA}>
			<section className="mySection">
				<LeftAside />
				<GamingContainer />
			</section>
		</LocalProvider>
	);
};

export default GaminPage;

export const getServerSideProps = async ({ req }) => {
	const auth = await verifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	try {
		const url = apiEndpoint?.(`/post?p=watch`);
		const fetch = await axios.get(url, {
			withCredentials: true,
			headers: {
				user_id: auth?.props?.user?.user_ID,
			},
		});
		const result = fetch.data;

		if (result.success) {
			return {
				props: {
					...auth.props,
					DATA: result.payload,
				},
			};
		}
	} catch (error) {
		console.log({ error });
		return {
			DATA: null,
		};
	}
};
