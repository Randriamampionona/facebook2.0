import React from "react";
import Menu from "./Menu";
import NewVideos from "./NewVideos";
import { PostBody, PostFooter, PostHead } from "../../common/Post";

const WatchContainer = ({ videosList }) => {
	return (
		<main className="relative w-full lg:max-w-[calc(100%-22.625rem)]">
			{/* menu */}
			<Menu />

			<div className="flex flex-col gap-3 w-full max-w-[calc(100%-4rem)] mx-auto py-3 xl:max-w-[calc(100%-18rem)]">
				<NewVideos />

				{videosList?.map((video) => (
					<div
						key={video.id}
						className="bg-semiDark min-w-full rounded-md">
						<PostHead owner={video.owner} post={video.post} />
						<PostBody post={video.post} postType="video" />
						<PostFooter count={video.count} />
					</div>
				))}
			</div>
		</main>
	);
};

WatchContainer.defaultProps = {
	videosList: [
		{
			id: 1,
			owner: {
				userID: "jrhrwgh5sweg5hwswgse",
				profile: "/assets/user-profile-img/Yoongs Guth - Jiolambups.png",
				name: "Yoongs Guth - Jiolambups",
			},
			post: {
				type: "public",
				date: new Date(),
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut quisquam reprehenderit",
				img: "/assets/feed-img/Screenshot (563).png",
			},
			count: {
				likes: {
					length: 54188,
					react: ["haha", "heart", "like"],
				},
				comments: 2488,
				shares: 1755,
			},
		},

		{
			id: 2,
			owner: {
				userID: "rft5eqgr8BVS5",
				profile: "/assets/user-profile-img/Norman fait des vidéos.png",
				name: "Norman fait des vidéos",
			},
			post: {
				type: "public",
				date: new Date(),
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.",
				img: "/assets/feed-img/Screenshot (564).png",
			},
			count: {
				likes: {
					length: 1547875,
					react: ["like", "haha"],
				},
				comments: 25478,
				shares: 58475,
			},
		},
	],
};

export default WatchContainer;
