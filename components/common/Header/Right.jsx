import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { AuthContext } from "../../../store/contexts/AuthContext";
import AuthBtns from "./AuthBtns";
import * as Icons from "../../icons/Icons";

const Right = ({ navMenu }) => {
	const { toogleProfileMenu, isProfileMenuOpen } = GlobalContext();
	const { user } = AuthContext();

	return (
		<div className="flex items-center justify-end h-full pr-2 sm:pr-4 xl:w-[17.5rem]">
			{user ? (
				<ul className="flex items-center space-x-2">
					{/* menu (grid) */}
					<li className="group relative place-items-center bg-lightDark rounded-full w-10 h-10 hover:bg-[#4b4c4e] hidden lg:grid">
						<Icons.MenuIcon />

						<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
							Menu
						</span>
					</li>

					{/* create */}
					<li className="group relative grid place-items-center bg-lightDark rounded-full w-10 h-10 hover:bg-[#4b4c4e] lg:hidden">
						<Icons.CreateIcon />

						<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
							Create
						</span>
					</li>

					{navMenu?.map((nav) => (
						<Link key={nav.slug} href={nav.slug}>
							<li className="group relative grid place-items-center bg-lightDark rounded-full w-10 h-10 hover:bg-[#4b4c4e]">
								<nav.Icon />

								<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
									{nav.linkText}
								</span>
							</li>
						</Link>
					))}

					{/* account */}
					<li
						className="group relative grid place-items-center cursor-pointer"
						onClick={() => toogleProfileMenu?.(!isProfileMenuOpen)}>
						<Image
							src={user?.pictures.profile}
							alt={user?.username}
							width="40"
							height="40"
							objectFit="cover"
							className="rounded-full pointer-events-none"
						/>
						{/* <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block"> */}
						<span className="absolute -bottom-9 right-0 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
							Account
						</span>
					</li>
				</ul>
			) : (
				<AuthBtns />
			)}
		</div>
	);
};

Right.defaultProps = {
	navMenu: [
		{
			slug: "/messenger",
			linkText: "Messenger",
			Icon: Icons.MessengerIcon,
		},
		{
			slug: "/notifications",
			linkText: "Notifications",
			Icon: Icons.NotificationIcon,
		},
	],
};

export default Right;
