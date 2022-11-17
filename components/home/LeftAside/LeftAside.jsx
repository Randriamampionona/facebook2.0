import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../../../store/contexts/AuthContext";

const LeftAside = ({ menus, shortcuts, footerMenus }) => {
	const { user } = AuthContext();

	return (
		<aside
			id="asideScrollbar"
			className="sticky top-[3.125rem] w-full px-2 py-4 space-y-2 h-[calc(100vh-3.125rem)] hidden xl:block xl:max-w-[18.90625rem]">
			<ul>
				{/* profile */}
				<li>
					<Link href={"/profile/me?p=posts"}>
						<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
							<Image
								src={user.pictures.profile}
								alt={user.username}
								width="36"
								height="36"
								objectFit="cover"
								className="rounded-full"
							/>
							<a className="text-xs font-semibold cursor-default">
								{user.username}
							</a>
						</div>
					</Link>
				</li>

				{/* menu */}
				{menus?.map((menu) => (
					<li key={menu.slug}>
						<Link href={menu.slug}>
							<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
								<Image
									src={menu.imgIco}
									alt={menu.textLink}
									width="36"
									height="36"
									objectFit="cover"
									className="rounded-full"
								/>
								<a className="text-xs font-semibold cursor-default">
									{menu.textLink}
								</a>
							</div>
						</Link>
					</li>
				))}

				{/* see more */}
				<li>
					<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
						<span className="grid place-items-center bg-lightDark text-[13px] w-9 h-9 rounded-full">
							<FaChevronDown />
						</span>
						<a className="text-[0.85rem] font-semibold cursor-default">
							See more
						</a>
					</div>
				</li>
			</ul>

			<hr className="border-t-hoverDark ml-2" />

			{/* shortcuts */}
			<ul>
				<div className="group flex items-center justify-between w-full px-2 pb-3">
					<p className="text-[0.85rem] font-semibold text-textLight">
						Your shortcuts
					</p>
					<Link href="/">
						<a className="text-[0.85rem] text-textBlue hidden group-hover:block">
							Edit
						</a>
					</Link>
				</div>

				{shortcuts?.map((menu) => (
					<li key={menu.slug}>
						<Link href={menu.slug}>
							<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
								<Image
									src={menu.imgIco}
									alt={menu.textLink}
									width="36"
									height="36"
									objectFit="cover"
									className="rounded-md"
								/>
								<a className="text-xs font-semibold cursor-default">
									{menu.textLink}
								</a>
							</div>
						</Link>
					</li>
				))}

				{/* see more */}
				<li>
					<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
						<span className="grid place-items-center bg-lightDark text-[13px] w-9 h-9 rounded-full">
							<FaChevronDown />
						</span>
						<a className="text-[0.85rem] font-semibold cursor-default">
							See more
						</a>
					</div>
				</li>
			</ul>

			{/* footer */}
			<div className="px-2 py-4">
				<ul className="flex items-center flex-wrap gap-x-1">
					{footerMenus?.map((menu) => (
						<li
							key={menu.slug}
							className="text-[0.6875rem] text-textLight hover:underline">
							<a href={menu.slug} target="_blank" rel="noreferrer">
								{menu.textLink}&nbsp;•
							</a>
						</li>
					))}
					<li className="text-[0.6875rem] text-textLight list-none">
						Meta &copy; 2022
					</li>
				</ul>
			</div>
		</aside>
	);
};

LeftAside.defaultProps = {
	menus: [
		{
			slug: "/friends",
			textLink: "Friends",
			imgIco: "/assets/icon-img/friends.png",
		},
		{
			slug: "/groups",
			textLink: "Groups",
			imgIco: "/assets/icon-img/groups.png",
		},
		{
			slug: "/marketplace",
			textLink: "Marketplace",
			imgIco: "/assets/icon-img/marketplace.png",
		},
		{
			slug: "/watch",
			textLink: "Watch",
			imgIco: "/assets/icon-img/watch.png",
		},
		{
			slug: "/memories",
			textLink: "Memories",
			imgIco: "/assets/icon-img/memories.png",
		},
	],

	shortcuts: [
		{
			slug: "/only-girls",
			textLink: "Only Girls 🔥",
			imgIco: "/assets/your-shortcuts-img/Only-Girls.png",
		},
		{
			slug: "/gasy-dev-javascript",
			textLink: "Gasy Dev Javascript",
			imgIco: "/assets/your-shortcuts-img/Gasy Dev JavaScript.png",
		},
		{
			slug: "/html-css-javascript-php",
			textLink: "HTML, CSS, JAVASCRIPT, PHP",
			imgIco: "/assets/your-shortcuts-img/HTML, CSS, JavaScript, PHP.png",
		},
		{
			slug: "/react-js-developers",
			textLink: "React Js Developers",
			imgIco: "/assets/your-shortcuts-img/React JS Developers.png",
		},
		{
			slug: "/dank-meme-empire",
			textLink: "Dank Meme Empire",
			imgIco: "/assets/your-shortcuts-img/Dank Meme Empire.png",
		},
	],

	footerMenus: [
		{
			slug: "/Privacy",
			textLink: "Privacy",
		},
		{
			slug: "/Terms",
			textLink: "Terms",
		},
		{
			slug: "/Advertising",
			textLink: "Advertising",
		},
		{
			slug: "/Ad Choices",
			textLink: "Ad Choices",
		},
		{
			slug: "/Cookies",
			textLink: "Cookies",
		},
		{
			slug: "/More",
			textLink: "More",
		},
	],
};

export default LeftAside;
