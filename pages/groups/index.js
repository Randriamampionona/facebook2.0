import axios from "axios";
import React, { Fragment } from "react";
import { GroupContainer, LeftAside } from "../../components/group";
import verifyAuth from "../../utils/verifyAuth";

const GroupsPage = () => {
	return (
		<Fragment>
			<section className="mySection">
				<LeftAside />
				<GroupContainer />
			</section>
		</Fragment>
	);
};

export default GroupsPage;

export const getServerSideProps = async ({ req }) => {
	const auth = await verifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	const URL = `/post?p=group`;

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
