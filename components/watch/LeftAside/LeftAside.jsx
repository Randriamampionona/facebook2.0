import Link from "next/link";
import { useRouter } from "next/router";
import { FaCog, FaTv, FaVideo, FaPlay, FaBookmark } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const LeftAside = ({ menuList }) => {
	const { query } = useRouter();

	return (
		<aside className="sticky top-[3.125rem] min-h-[calc(100vh-3.125rem)] w-[22.625rem] py-2 px-3 space-y-4 bg-semiDark hidden lg:block">
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl text-textWhite font-bold">Watch</h1>
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

			<div className="space-y-1">
				{menuList?.map((menu) => (
					<Link key={menu.slug} href={`/watch?p=${menu.slug}`}>
						<div
							className={`flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-lightDark ${
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
			</div>
		</aside>
	);
};

LeftAside.defaultProps = {
	menuList: [
		{
			slug: "home",
			text: "Home",
			Icon: FaTv,
		},
		{
			slug: "live",
			text: "Live",
			Icon: FaVideo,
		},
		{
			slug: "shows",
			text: "Shows",
			Icon: FaPlay,
		},
		{
			slug: "saved-videos",
			text: "Saved Videos",
			Icon: FaBookmark,
		},
	],
};

export default LeftAside;
