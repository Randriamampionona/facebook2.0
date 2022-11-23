import axios from "axios";
import { Fragment } from "react";
import { UploadModal } from "../../components/common";
import { LeftAside, MiddleAside, RightAside } from "../../components/home";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import verifyAuth from "../../utils/verifyAuth";

const Home = ({ user }) => {
	const { uploadModale } = GlobalContext();

	return (
		<Fragment>
			{user && uploadModale.open && <UploadModal />}

			<section className="mySection">
				<LeftAside />
				<MiddleAside />
				<RightAside />
			</section>
		</Fragment>
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

	const URL = "/post?p=home";

	try {
		const fetch = await axios.get(URL, {
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
					mutateKey: URL,
					fallback: {
						[URL]: result,
					},
				},
			};
		}
	} catch (error) {
		return {
			...auth.props,
			fallback: {
				[URL]: null,
			},
		};
	}
};
