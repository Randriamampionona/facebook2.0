import React from "react";
import GamingFeeds from "./GamingFeeds";
import LiveSlides from "./LiveSlides";
import Menu from "./Menu";
import RecentActivity from "./RecentActivity";

const GamingContainer = ({
	menuList,
	liveSlidesList,
	recentActivityList,
	gamingFeedsList,
}) => {
	return (
		<main className="relative w-full lg:max-w-[calc(100%-22.625rem)]">
			<Menu menuList={menuList} />
			<LiveSlides liveSlidesList={liveSlidesList} />

			<div className="w-full max-w-[calc(100%-2rem)] mx-auto my-8 space-y-8 xl:max-w-[calc(100%-12rem)]">
				<RecentActivity recentActivityList={recentActivityList} />
				<GamingFeeds gamingFeedsList={gamingFeedsList} />
			</div>
		</main>
	);
};

GamingContainer.defaultProps = {
	menuList: [
		{
			slug: "for-you",
			text: "For You",
		},
		{
			slug: "play-games",
			text: "Play Games",
			subMenu: [1, 2, 3],
		},
		{
			slug: "gamin-video",
			text: "Gamin Video",
		},
		{
			slug: "tournaments",
			text: "Tournaments",
		},
	],

	liveSlidesList: [
		{
			id: "df5dfv1cv5",
			content: "/assets/feed-img/Screenshot (332).png",
			views: 1572,
			from: "COD Mobile",
			desc: "PRO VS PRO!!!",
			owner: {
				name: "Xzit Thamer",
				profile: "/assets/user-profile-img/Xzit Thamer.png",
			},
		},
		{
			id: "xfv5d8vxd1",
			content: "/assets/feed-img/Screenshot (331).png",
			views: 25478,
			from: "COD Mobile",
			desc: "Solo vs squad!",
			owner: {
				name: "Viva La Dirt League",
				profile: "/assets/user-profile-img/Viva La Dirt League.png",
			},
		},
		{
			id: "xdv2dx8v4",
			content: "/assets/feed-img/Screenshot (303).png",
			views: 425,
			from: "COD Mobile",
			desc: "Shippment 1 VS 1",
			owner: {
				name: "Shujin Plays",
				profile: "/assets/user-profile-img/Shujin Plays.png",
			},
		},
	],

	recentActivityList: [
		{
			id: "5vdf4vwxcc",
			name: "Nura Gaming",
			profile: "/assets/user-profile-img/Nura Gaming.png",
		},
		{
			id: "xvc5dx8",
			name: "OoopsSorry Gaming",
			profile: "/assets/user-profile-img/OoopsSorry Gaming.png",
			isOnLive: {
				views: 2648,
			},
		},
		{
			id: "c2xd4v8dxv4",
			name: "Neardypan",
			profile: "/assets/user-profile-img/Neardypan.png",
		},
		{
			id: "dd7vd8vx5",
			name: "Nizbit",
			profile: "/assets/user-profile-img/Nizbit.png",
		},
		{
			id: "vgjdfhfdb",
			name: "MCU flash view",
			profile: "/assets/user-profile-img/MCU flash view.png",
			isOnLive: {
				views: 87142,
			},
		},
		{
			id: "nc2fn1ffvgf4",
			name: "Xzit Thamer",
			profile: "/assets/user-profile-img/Xzit Thamer.png",
			isOnLive: {
				views: 268475,
			},
		},
		{
			id: "hfd5h8gh",
			name: "Shujin Plays",
			profile: "/assets/user-profile-img/Shujin Plays.png",
		},
		{
			id: "bvcbxdb1",
			name: "Viva La Dirt League",
			profile: "/assets/user-profile-img/Viva La Dirt League.png",
		},
	],

	gamingFeedsList: [
		{
			id: 1,
			owner: {
				userID: "dfd5fd1f5dfd2",
				profile: "/assets/user-profile-img/Viva La Dirt League.png",
				name: "Viva La Dirt League",
			},
			post: {
				type: "public",
				date: new Date(),
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore ratione voluptates doloremque",
				img: "/assets/feed-img/pain.png",
			},
			count: {
				likes: {
					length: 525485,
					react: ["like", "heart", "wow"],
				},
				comments: 7115,
				shares: 75052,
			},
		},

		{
			id: 2,
			owner: {
				userID: "kh85g8se85sv",
				profile: "/assets/user-profile-img/Xzit Thamer.png",
				name: "Xzit Thamer",
			},
			post: {
				type: "public",
				date: new Date(),
				description:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit",
				img: "/assets/feed-img/1641847503523.jpg",
			},
			count: {
				likes: {
					length: 2487754,
					react: ["like", "haha"],
				},
				comments: 65844,
				shares: 415447,
			},
		},

		{
			id: 3,
			owner: {
				userID: "qedz85ds5d8",
				profile: "/assets/user-profile-img/OoopsSorry Gaming.png",
				name: "OoopsSorry Gaming",
			},
			post: {
				type: "public",
				date: new Date(),
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum quidem sunt!",
				img: "/assets/feed-img/alexandre-lallemand-UtPC_kz8CAc-unsplash.jpg",
			},
			count: {
				likes: {
					length: 84884,
					react: ["wow", "heart", "like"],
				},
				comments: 2144,
				shares: 1577,
			},
		},
	],
};

export default GamingContainer;
