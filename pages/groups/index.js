import React from "react";
import { GroupContainer, LeftAside } from "../../components/group";
import verifyAuth from "../../utils/verifyAuth";

const GroupsPage = () => {
	return (
		<section className="mySection">
			<LeftAside />
			<GroupContainer />
		</section>
	);
};

export default GroupsPage;

export const getServerSideProps = async ({ req }) => {
	return await verifyAuth?.(req);
};
