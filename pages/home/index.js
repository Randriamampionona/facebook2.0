import axios from "axios";
import { UploadModal } from "../../components/common";
import { LeftAside, MiddleAside, RightAside } from "../../components/home";
import { AuthContext } from "../../store/contexts/AuthContext";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import { LocalProvider } from "../../store/contexts/LocalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import verifyAuth from "../../utils/verifyAuth";

const Home = ({ DATA }) => {
	const { uploadModale } = GlobalContext();
	const { user } = AuthContext();

	return (
		<LocalProvider DATA={DATA}>
			{user && uploadModale.open && <UploadModal />}

			<section className="mySection">
				<LeftAside />
				<MiddleAside />
				<RightAside />
			</section>
		</LocalProvider>
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
			DATA: null,
		};
	}
};
