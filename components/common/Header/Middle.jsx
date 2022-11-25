import Link from "next/link";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import * as Icons from "../../icons/Icons";

const Middle = ({ navMenu }) => {
	const { isMobileMenuOpen, toogleMobileMenu } = GlobalContext();
	const { pathname } = useRouter();

	const toogleHandler = () => {
		toogleMobileMenu(!isMobileMenuOpen);
	};

	return (
		<div className="flex-grow flex items-center justify-start sm:justify-center h-full px-2">
			<ul className="flex items-center gap-x-2">
				{navMenu?.map((nav) => (
					<Link
						key={nav.slug}
						href={nav?.query ? nav.slug + nav.query : nav.slug}>
						<li
							className={`group headerMenuIcon text-textLight hidden sm:block ${
								pathname === nav.slug
									? "bg-[#2e89ff0a]"
									: "hover:bg-hoverDark"
							}`}>
							{pathname === nav.slug ? (
								<nav.icon.active />
							) : (
								<nav.icon.inactive />
							)}

							{pathname === nav.slug && (
								<span
									className={`absolute bottom-[-0.1875rem] left-1/2 -translate-x-1/2 w-full h-[0.125rem] bg-blueDark`}
								/>
							)}

							<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
								{nav.linkText}
							</span>
						</li>
					</Link>
				))}

				{/* gaming */}
				<Link href="/gaming?p=for-you">
					<li
						className={`group headerMenuIcon hidden lg:block ${
							pathname === "/gamin"
								? "text-textBlue bg-[#2e89ff0a]"
								: "text-textLight hover:bg-hoverDark"
						}`}>
						{pathname === "/gaming" ? (
							<Icons.GaminFillIcon />
						) : (
							<Icons.GaminIcon />
						)}

						{pathname === "/gaming" && (
							<span
								className={`absolute bottom-[-0.1875rem] left-1/2 -translate-x-1/2 w-full h-[0.125rem] bg-blueDark`}
							/>
						)}

						<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
							Gaming
						</span>
					</li>
				</Link>

				{/* burger menu */}
				<li
					className={`group headerMenuIcon text-textLight lg:hidden ${
						isMobileMenuOpen
							? "text-textBlue bg-[#2e89ff0a]"
							: "text-textLight hover:bg-hoverDark"
					}`}
					onClick={toogleHandler}>
					<Icons.MoreIcon />

					{isMobileMenuOpen && (
						<span
							className={`absolute bottom-[-0.1875rem] left-1/2 -translate-x-1/2 w-full h-[0.125rem] bg-blueDark`}
						/>
					)}

					<span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-textWhite text-dark text-xs px-3 py-[0.4375rem] rounded-md hidden group-hover:block">
						More
					</span>
				</li>
			</ul>
		</div>
	);
};

Middle.defaultProps = {
	navMenu: [
		{
			slug: "/home",
			linkText: "Home",
			icon: {
				inactive: Icons.HomeIcon,
				active: Icons.HomeFillIcon,
			},
		},
		{
			slug: "/watch",
			query: "?p=home",
			linkText: "Watch",
			icon: {
				inactive: Icons.WatchIcon,
				active: Icons.WatchFillIcon,
			},
		},
		{
			slug: "/marketplace",
			query: "?p=all",
			linkText: "Marketplace",
			icon: {
				inactive: Icons.MarketPlaceIcon,
				active: Icons.MarketPlaceFillIcon,
			},
		},
		{
			slug: "/groups",
			query: "?p=your-feed",
			linkText: "Groups",
			icon: {
				inactive: Icons.GroupIcon,
				active: Icons.GroupFillIcon,
			},
		},
	],
};

export default Middle;
