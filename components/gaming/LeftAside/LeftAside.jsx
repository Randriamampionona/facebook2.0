import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import {
	FaCog,
	FaTrophy,
	FaGift,
	FaPlay,
	FaBell,
	FaRocket,
	FaChevronDown,
	FaBookmark,
	FaGamepad,
	FaFighterJet,
	FaMap,
	FaDice,
	FaPuzzlePiece,
} from "react-icons/fa";
import { useRouter } from "next/router";

const LeftAside = ({ menuList, streamersList, categoryList }) => {
	const { query } = useRouter();

	return (
		<aside
			id="asideScrollbar"
			className="sticky top-[3.125rem] h-[calc(100vh-3.1875rem)] w-[22.625rem] px-3 space-y-4 bg-semiDark hidden lg:block">
			<div className="z-10 sticky top-0 space-y-2 bg-semiDark pt-3">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl text-textWhite font-bold">Gaming</h1>
					<span className="grid place-items-center p-[0.625rem] rounded-full bg-lightDark hover:bg-[#4b4c4e] cursor-pointer">
						<FaCog />
					</span>
				</div>

				<form className="flex items-center bg-lightDark text-textLight rounded-full w-full p-2 space-x-2">
					<label htmlFor="search">
						<FiSearch />
					</label>
					<input
						type="search"
						id="search"
						placeholder="Search videos"
						className="inputReset w-full"
					/>
				</form>
			</div>

			<div className="space-y-4 divide-y divide-hoverDark">
				<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
					<Image
						src={"/assets/user-profile-img/profile-gaming.png"}
						alt=""
						width={36}
						height={36}
						objectFit="cover"
						className="rounded-full bg-lightDark"
					/>
					<div className="flex flex-col">
						<p className="text-xs text-textLight uppercase">
							Gaming activity
						</p>
						<a className="text-xs font-semibold cursor-default">
							Shin Yu
						</a>
					</div>
				</div>

				<div className="pt-4 space-y-1">
					{menuList?.map((menu) => (
						<Link key={menu.slug} href={`/gaming?p=${menu.slug}`}>
							<div
								className={`relative flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-lightDark ${
									menu.slug == query.p ? "bg-lightDark" : ""
								}`}>
								<span
									className={`grid place-items-center text-textWhite p-[0.625rem] rounded-full ${
										menu.slug == query.p
											? "bg-blueNormal"
											: "bg-lightDark"
									}`}>
									<menu.Icon />
								</span>
								<span className="text-xs font-semibold cursor-default">
									{menu.text}
								</span>
								{menu?.subMenu && (
									<span className="absolute right-2 top-1/2 -translate-y-1/2 text-textLight">
										<FaChevronDown />
									</span>
								)}
							</div>
						</Link>
					))}
				</div>

				<div className="py-4 space-y-1">
					<h1 className="text-sm font-semibold mb-2">
						Streamers You Follow
					</h1>

					{streamersList?.map((streamer) => (
						<li
							key={streamer.id}
							className="flex justify-between list-none py-1 px-2 rounded-md hover:bg-hoverDark">
							<div className="flex items-center space-x-2 w-full cursor-pointer">
								<Image
									src={streamer.profile}
									alt={streamer.name}
									width="52"
									height="52"
									objectFit="cover"
									className="rounded-full"
								/>
								<div className="w-full">
									<p className="text-xs font-semibold cursor-default">
										{streamer.name}
									</p>
									<span className="text-xs text-textLight">
										{streamer?.desc?.substring(0, 42)}{" "}
										{streamer?.desc?.length >= 42 && "..."}
									</span>
								</div>
							</div>
						</li>
					))}

					<li className="list-none">
						<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
							<span className="grid place-items-center bg-lightDark text-[13px] w-9 h-9 rounded-full">
								<FiMoreHorizontal />
							</span>
							<a className="text-[0.85rem] font-semibold cursor-default">
								See more
							</a>
						</div>
					</li>
				</div>

				<div className="py-4 space-y-1">
					<div className="w-full px-2 pb-3">
						<div className="flex items-center justify-between">
							<h1 className="text-sm font-semibold mb-2">My games</h1>
							<Link href="/">
								<a className="text-[0.85rem] text-textBlue">See all</a>
							</Link>
						</div>
						<p className="text-textLight text-xs">
							Save a game to My games to create a shoetcut for it here.
						</p>
					</div>

					<li className="list-none">
						<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
							<span className="grid place-items-center bg-lightDark text-[13px] w-9 h-9 rounded-full">
								<FaBookmark />
							</span>
							<a className="text-[0.85rem] font-semibold cursor-default">
								Save games
							</a>
						</div>
					</li>
				</div>

				<div className="py-4 space-y-1">
					<h1 className="text-sm font-semibold mb-2">Categories</h1>

					{categoryList?.map((menu) => (
						<Link key={menu.slug} href={`/gaming?c=${menu.slug}`}>
							<div
								className={`relative flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-lightDark ${
									menu.slug == query.c ? "bg-lightDark" : ""
								}`}>
								<span
									className={`grid place-items-center text-textWhite p-[0.625rem] rounded-full ${
										menu.slug == query.c
											? "bg-blueNormal"
											: "bg-lightDark"
									}`}>
									<menu.Icon />
								</span>
								<span className="text-xs font-semibold cursor-default">
									{menu.text}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</aside>
	);
};

LeftAside.defaultProps = {
	menuList: [
		{
			slug: "for-you",
			text: "For You",
			Icon: FaGift,
		},
		{
			slug: "video",
			text: "Video",
			subMenu: [1, 2, 3],
			Icon: FaPlay,
		},
		{
			slug: "tournaments",
			text: "Tournaments",
			subMenu: [1, 2, 3],
			Icon: FaTrophy,
		},
		{
			slug: "play-games",
			text: "Play Games",
			subMenu: [1, 2, 3],
			Icon: FaRocket,
		},
		{
			slug: "notifications",
			text: "Notifications",
			Icon: FaBell,
		},
	],

	streamersList: [
		{
			id: "sdf58qcvsc",
			name: "Xzit Thamer",
			profile: "/assets/user-profile-img/Xzit Thamer.png",
			desc: "Grand Theft Auto: The Triology - The Definition of GTA",
		},
		{
			id: "qf5qzvqz4s",
			name: "Viva La Dirt League",
			profile: "/assets/user-profile-img/Viva La Dirt League.png",
			desc: "The Witcher 3: Wild Hunt",
		},
		{
			id: "ve5vqz8svc4qz",
			name: "OoopsSorry Gaming",
			profile: "/assets/user-profile-img/OoopsSorry Gaming.png",
			desc: "Let's talk about CODM: Call Of Duty Mobile",
		},
		{
			id: "gZQgv8SV",
			name: "Shujin Plays",
			profile: "/assets/user-profile-img/Shujin Plays.png",
			desc: "Mobile Legends",
		},
	],

	categoryList: [
		{
			slug: "all-games",
			text: "All games",
			Icon: FaGamepad,
		},
		{
			slug: "action",
			text: "Action",
			Icon: FaFighterJet,
		},
		{
			slug: "adventure",
			text: "Adventure",
			Icon: FaMap,
		},
		{
			slug: "casino",
			text: "Casino",
			Icon: FaDice,
		},
		{
			slug: "puzzle",
			text: "Puzzle",
			Icon: FaPuzzlePiece,
		},
	],
};

export default LeftAside;
