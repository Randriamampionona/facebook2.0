import axios from "axios";
import { LeftAside, MiddleAside, RightAside } from "../../components/home";
import { HomeProviderLocal } from "../../store/contexts/locales/HomeContext.local";
import apiEndpoint from "../../utils/apiEndpoint";
import verifyAuth from "../../utils/verifyAuth";

const Home = ({ DATA }) => {
	return (
		<HomeProviderLocal DATA={DATA}>
			<section className="mySection">
				<LeftAside />
				<MiddleAside />
				<RightAside />
			</section>
		</HomeProviderLocal>
	);
};

export default Home;

export const getServerSideProps = async ({ req }) => {
	const auth = await verifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	try {
		const url = apiEndpoint?.(`/post?p=home`);
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
			infosData: {},
		};
	}
};
