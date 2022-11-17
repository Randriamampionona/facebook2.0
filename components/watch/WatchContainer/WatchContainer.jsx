import React from "react";
import Menu from "./Menu";
import NewVideos from "./NewVideos";
import { Post } from "../../common/Post";
import { LocalContext } from "../../../store/contexts/LocalContext";

const WatchContainer = () => {
	const {
		DATA: { posts },
	} = LocalContext();

	return (
		<main className="relative w-full lg:max-w-[calc(100%-22.625rem)]">
			{/* menu */}
			<Menu />

			<div className="flex flex-col gap-3 w-full max-w-[calc(100%-4rem)] mx-auto py-3 xl:max-w-[calc(100%-18rem)]">
				<NewVideos />

				{posts?.map((item) => (
					<Post key={item.post_ID} {...item} />
				))}
			</div>
		</main>
	);
};

export default WatchContainer;
