import axios from "axios";
import { Fragment } from "react";
import { GamingContainer, LeftAside } from "../../components/gaming";
import verifyAuth from "../../utils/verifyAuth";

const GaminPage = () => {
	return (
		<Fragment>
			<section className="mySection">
				<LeftAside />
				<GamingContainer />
			</section>
		</Fragment>
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

	const URL = `/post?p=watch`;

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
