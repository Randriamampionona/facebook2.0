import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsPinFill } from "react-icons/bs";
import {
	FaCog,
	FaPhotoVideo,
	FaNewspaper,
	FaPlus,
	FaChevronDown,
} from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const LeftAside = ({ menuList, groupList }) => {
	const { query } = useRouter();

	return (
		<aside
			id="asideScrollbar"
			className="sticky top-[3.125rem] h-[calc(100vh-3.1875rem)] w-[22.625rem] px-3 space-y-4 bg-semiDark hidden lg:block">
			<div className="z-10 sticky top-0 space-y-2 bg-semiDark pt-3">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl text-textWhite font-bold">Groups</h1>
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
				<div className="space-y-1">
					{menuList?.map((menu) => (
						<Link key={menu.slug} href={`/groups?p=${menu.slug}`}>
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
							</div>
						</Link>
					))}

					<button className="flex items-center justify-center gap-x-2 w-full py-2 !mt-4 rounded text-blueDark text-sm font-semibold bg-blueDark/25 cursor-pointer">
						<span>
							<FaPlus />
						</span>
						<span>Create new group</span>
					</button>
				</div>

				<div className="py-4 space-y-1">
					<h1 className="text-sm font-semibold mb-2">
						Groups you&lsquo;ve joined
					</h1>

					{groupList?.map((menu) => (
						<li
							key={menu.slug}
							className="flex justify-between list-none py-1 px-2 rounded-md hover:bg-hoverDark">
							<div className="flex items-center space-x-2 w-full cursor-pointer">
								<Image
									src={menu.imgIco}
									alt={menu.textLink}
									width="52"
									height="52"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="w-full">
									<p className="text-xs font-semibold cursor-default">
										{menu.textLink}
									</p>
									<span className="text-xs text-textLight">
										Last active {menu.lastActive}
									</span>
								</div>
							</div>

							<div className="flex items-center gap-x-1">
								{menu?.isPinned && (
									<span className="text-textWhite rotate-45">
										<BsPinFill />
									</span>
								)}
								<span className="text-[0.5625rem] text-textLight p-[0.375rem] rounded-full bg-lightDark hover:bg-hoverDark">
									<FaChevronDown />
								</span>
							</div>
						</li>
					))}
				</div>
			</div>
		</aside>
	);
};

LeftAside.defaultProps = {
	menuList: [
		{
			slug: "your-feed",
			text: "Your feed",
			Icon: FaNewspaper,
		},
		{
			slug: "discover",
			text: "Discover",
			Icon: FaPhotoVideo,
		},
	],

	groupList: [
		{
			slug: "/only-girls",
			textLink: "Only Girls 🔥",
			imgIco: "/assets/your-shortcuts-img/Only Girls 🔥.png",
			lastActive: "about an hour ago",
			isPinned: true,
		},
		{
			slug: "/gasy-dev-javascript",
			textLink: "Gasy Dev Javascript",
			imgIco: "/assets/your-shortcuts-img/Gasy Dev JavaScript.png",
			lastActive: "a day ago",
		},
		{
			slug: "/html-css-javascript-php",
			textLink: "HTML, CSS, JAVASCRIPT, PHP",
			imgIco: "/assets/your-shortcuts-img/HTML, CSS, JavaScript, PHP.png",
			lastActive: "about an hour ago",
		},
		{
			slug: "/react-js-developers",
			textLink: "React Js Developers",
			imgIco: "/assets/your-shortcuts-img/React JS Developers.png",
			lastActive: "33 minutes ago",
		},
		{
			slug: "/dank-meme-empire",
			textLink: "Dank Meme Empire",
			imgIco: "/assets/your-shortcuts-img/Dank Meme Empire.png",
			lastActive: "9 minutes ago",
		},
	],
};

export default LeftAside;
