import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { AuthContext } from "../../../store/contexts/AuthContext";
import { motion } from "framer-motion";
import motionVariants from "./motionVariants";
import {
	FaCog,
	FaQuestionCircle,
	FaMoon,
	FaComment,
	FaSignOutAlt,
	FaLock,
	FaUnlock,
	FaListUl,
	FaPhotoVideo,
	FaGlobe,
	FaEnvelopeSquare,
	FaBug,
	FaWifi,
	FaFont,
	FaKeyboard,
	FaChevronRight,
} from "react-icons/fa";

const ProfileMenu = ({ profileMenu, footerLinks }) => {
	const { push } = useRouter();
	const { toogleProfileMenu } = GlobalContext();
	const { user, logoutFunc } = AuthContext();

	const logoutHandler = async () => {
		toogleProfileMenu(false);

		if (confirm("Do you really want to log out?")) {
			await logoutFunc?.();
		}
	};

	return (
		<motion.section
			variants={motionVariants.showsUp}
			initial="initial"
			animate="animate"
			exit="exit"
			className="fixed top-14 right-2 w-[22rem] h-auto space-y-4 bg-semiDark text-textWhite rounded-md p-3 shadow-formShadow sm:right-4"
			onMouseLeave={() => toogleProfileMenu(false)}>
			{/* profile block */}
			<div className="flex flex-col w-full bg-semiDark px-3 shadow-blockShadow divide-y divide-hoverDark">
				<div className="flex items-center gap-x-2 py-3">
					<Image
						src={user?.pictures.profile}
						alt={user?.username}
						width={36}
						height={36}
						objectFit="cover"
						className="rounded-full cursor-pointer active:scale-95"
						onClick={() => {
							push(`/profile/me?p=posts`);
							toogleProfileMenu(false);
						}}
					/>
					<a
						className="text-sm font-semibold cursor-pointer"
						onClick={() => {
							push(`/profile/me?p=posts`);
							toogleProfileMenu(false);
						}}>
						{user?.username}
					</a>
				</div>

				<div className="w-full py-3">
					<Link href={`/profile/me?p=posts`}>
						<a className="text-sm text-blueDark hover:underline cursor-pointer">
							See all profiles
						</a>
					</Link>
				</div>
			</div>

			{/* menu */}
			<ul className="space-y-1">
				{profileMenu?.map((menu) => (
					<div
						key={menu.id}
						className="flex items-center justify-between w-full cursor-pointer py-1 px-2 rounded-md hover:bg-lightDark"
						onClick={(e) => !menu?.subMenu && toogleProfileMenu(false)}>
						<div className="flex items-center space-x-2">
							<span className="grid place-items-center text-textWhite p-[0.625rem] rounded-full bg-lightDark">
								<menu.Icon />
							</span>
							<span className="text-[0.8125rem] font-semibold cursor-pointer">
								{menu.text}
							</span>
						</div>

						{menu?.subMenu && (
							<span className="text-sm text-textLight">
								<FaChevronRight />
							</span>
						)}
					</div>
				))}

				{/* logout block */}
				<div
					className="flex items-center justify-between w-full cursor-pointer py-1 px-2 rounded-md hover:bg-lightDark"
					onClick={logoutHandler}>
					<div className="flex items-center space-x-2">
						<span className="grid place-items-center text-textWhite p-[0.625rem] rounded-full bg-lightDark">
							<FaSignOutAlt />
						</span>
						<span className="text-[0.8125rem] font-semibold cursor-pointer">
							Log Out
						</span>
					</div>
				</div>
			</ul>

			{/* footer */}
			<div className="w-full">
				<ul className="flex items-center flex-wrap w-full gap-x-1">
					{footerLinks?.map((link) => (
						<li
							key={link}
							className="text-xs text-textLight hover:underline cursor-pointer">
							{link}&nbsp;•
						</li>
					))}
				</ul>
			</div>
		</motion.section>
	);
};

ProfileMenu.defaultProps = {
	profileMenu: [
		{
			id: 1,
			text: "Settings & privacy",
			Icon: FaCog,
			subMenu: [
				{ id: 1, text: "Settings", Icon: FaCog },
				{ id: 2, text: "Privacy Checkup", Icon: FaLock },
				{ id: 3, text: "Privacy Center", Icon: FaUnlock },
				{ id: 4, text: "Activity log", Icon: FaListUl },
				{ id: 5, text: "Feed Preferences", Icon: FaPhotoVideo },
				{ id: 6, text: "Language", Icon: FaGlobe },
			],
		},
		{
			id: 2,
			text: "Help & support",
			Icon: FaQuestionCircle,
			subMenu: [
				{ id: 1, text: "Help Center", Icon: FaQuestionCircle },
				{ id: 2, text: "Support Inbox", Icon: FaEnvelopeSquare },
				{ id: 3, text: "Report a problem", Icon: FaBug },
				{ id: 4, text: "Check Wi-Fi connection", Icon: FaWifi },
			],
		},
		{
			id: 3,
			text: "Display & accessibility",
			Icon: FaMoon,
			subMenu: [
				{
					id: 1,
					text: "Dark Mode",
					desc: "Adjust the appearance of Facebook to reduce glare and give your eyes a break.",
					Icon: FaMoon,
				},
				{
					id: 2,
					text: "Compact Mode",
					desc: "Make your font size smaller so more content can fit on the screen.",
					Icon: FaFont,
				},
				{ id: 3, text: "Keyboard", Icon: FaKeyboard },
			],
		},
		{
			id: 4,
			text: "Give feedback",
			Icon: FaComment,
		},
	],

	footerLinks: [
		"Privacy",
		"Terms",
		"Advertising",
		"Ad Choices",
		"Cookies",
		"More",
		`Meta © ${new Date().getFullYear()}`,
	],
};

export default ProfileMenu;
