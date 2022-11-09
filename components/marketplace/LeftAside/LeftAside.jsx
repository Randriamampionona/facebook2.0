import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import {
	FaCog,
	FaShopify,
	FaBell,
	FaInbox,
	FaBuysellads,
	FaIdBadge,
	FaChevronRight,
	FaPlus,
	FaCar,
	FaHouseUser,
	FaTshirt,
	FaLaptop,
	FaHeart,
	FaTools,
	FaTree,
} from "react-icons/fa";
import { useRouter } from "next/router";

const LeftAside = ({ menuList, categoryList }) => {
	const { query } = useRouter();

	return (
		<aside
			id="asideScrollbar"
			className="sticky top-[3.125rem] max-h-[calc(100vh-3.125rem)] w-[22.625rem] px-3 space-y-4 bg-semiDark hidden lg:block">
			<div className="z-10 sticky top-0 space-y-2 bg-semiDark pt-3">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl text-textWhite font-bold">
						Marketplace
					</h1>
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
						<Link key={menu.slug} href={`/marketplace?p=${menu.slug}`}>
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
										<FaChevronRight />
									</span>
								)}
							</div>
						</Link>
					))}

					<button className="flex items-center justify-center gap-x-2 w-full py-2 !mt-4 rounded text-blueDark text-sm font-semibold bg-blueDark/25 cursor-pointer">
						<span>
							<FaPlus />
						</span>
						<span>Create new listing</span>
					</button>
				</div>

				<div className="pt-4">
					<h1 className="text-sm font-semibold mb-2">Filters</h1>
					<p className="text-blueNormal text-sm">
						Antananarivo, Madagascar • Within 60 kilometers
					</p>
				</div>

				<div className="py-4 space-y-1">
					<h1 className="text-sm font-semibold mb-2">Categories</h1>

					{categoryList?.map((menu) => (
						<Link key={menu.slug} href={`/marketplace?c=${menu.slug}`}>
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
			slug: "all",
			text: "Browse all",
			Icon: FaShopify,
		},
		{
			slug: "notification",
			text: "Notification",
			Icon: FaBell,
		},
		{
			slug: "inbox",
			text: "Inbox",
			Icon: FaInbox,
		},
		{
			slug: "buying",
			text: "Buying",
			Icon: FaBuysellads,
			subMenu: ["submenu1", "submenu2"],
		},
		{
			slug: "selling",
			text: "Selling",
			Icon: FaIdBadge,
			subMenu: ["submenu1", "submenu2"],
		},
	],

	categoryList: [
		{
			slug: "vehicules",
			text: "Vehicules",
			Icon: FaCar,
		},
		{
			slug: "property-rentals",
			text: "Property Rentals",
			Icon: FaHouseUser,
		},
		{
			slug: "apparel",
			text: "Apparel",
			Icon: FaTshirt,
		},
		{
			slug: "electronics",
			text: "Electronics",
			Icon: FaLaptop,
		},
		{
			slug: "family",
			text: "Family",
			Icon: FaHeart,
		},
		{
			slug: "tools",
			text: "Tools",
			Icon: FaTools,
		},
		{
			slug: "garden",
			text: "Garden",
			Icon: FaTree,
		},
	],
};

export default LeftAside;
