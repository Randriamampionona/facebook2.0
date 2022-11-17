import axios from "axios";
import React from "react";
import { GroupContainer, LeftAside } from "../../components/group";
import { LocalProvider } from "../../store/contexts/LocalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import VerifyAuth from "../../utils/verifyAuth";

const GroupsPage = ({ DATA }) => {
	return (
		<LocalProvider DATA={DATA}>
			<section className="mySection">
				<LeftAside />
				<GroupContainer />
			</section>
		</LocalProvider>
	);
};

export default GroupsPage;

export const getServerSideProps = async ({ req }) => {
	const auth = await VerifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	try {
		const url = apiEndpoint?.(`/post?p=group`);
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
