import React from "react";
import RecentActivity from "./RecentActivity";
import Suggestion from "./Suggestion";

const GroupContainer = () => {
	return (
		<main className="flex flex-col-reverse items-start gap-y-8 p-4 mx-auto w-full lg:max-w-[calc(100%-22.625rem)] xl:flex-row xl:gap-x-4">
			<RecentActivity />
			<Suggestion />
		</main>
	);
};

export default GroupContainer;
