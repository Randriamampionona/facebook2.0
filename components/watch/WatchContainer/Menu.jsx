import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Menu = ({ menuList }) => {
	const { query } = useRouter();

	return (
		<div className="z-10 sticky top-[3.125rem] flex items-center justify-between gap-x-4 w-full h-14 px-3 bg-semiDark lg:hidden">
			{/* heading */}
			<h1 className="text-2xl text-textWhite font-bold">Watch</h1>

			{/* slide menu */}
			<ul className="rigthGradient relative flex-grow flex items-center gap-x-2 overflow-x-hidden after:content-[''] after:z-10 after:absolute after:right-0 after:h-full after:w-6">
				<Swiper slidesPerView={"auto"} spaceBetween={8} className="!mx-0">
					{menuList?.map((menu) => (
						<SwiperSlide key={menu.slug} className="!w-auto">
							<Link href={`/watch?p=${menu.slug}`}>
								<li
									className={`w-auto px-4 py-[0.35rem] text-center text-sm cursor-pointer whitespace-nowrap rounded-full ${
										menu.slug == query.p
											? "bg-[#2e89ff36] text-blueDark font-bold"
											: "bg-lightDark hover:bg-[#4b4c4e]"
									}`}>
									{menu.text}
								</li>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</ul>

			{/* FiSearch */}
			<div>
				<span className="grid place-items-center bg-lightDark rounded-full w-10 h-10 hover:bg-[#4b4c4e]">
					<FiSearch />
				</span>
			</div>
		</div>
	);
};

Menu.defaultProps = {
	menuList: [
		{
			slug: "home",
			text: "Home",
		},
		{
			slug: "live",
			text: "Live",
		},
		{
			slug: "shows",
			text: "Shows",
		},
		{
			slug: "explore",
			text: "Explore",
		},
		{
			slug: "saved-videos",
			text: "Saved Videos",
		},
		{
			slug: "Following",
			text: "Following",
		},
	],
};

export default Menu;
