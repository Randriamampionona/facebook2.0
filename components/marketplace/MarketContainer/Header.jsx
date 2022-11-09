import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = ({ menus }) => {
	return (
		<div className="z-10 sticky top-[3.125rem] space-y-4 w-full p-3 bg-semiDark lg:hidden">
			<ul className="flex items-center gap-x-2">
				{menus?.map((menu) => (
					<li
						key={menu.id}
						className="w-auto px-4 py-2 text-center text-sm cursor-pointer whitespace-nowrap rounded-full bg-lightDark hover:bg-[#4b4c4e]">
						{menu.text}
					</li>
				))}
			</ul>

			<form className="flex items-center bg-lightDark text-textLight rounded-full w-full p-2 space-x-2">
				<label htmlFor="search">
					<FiSearch />
				</label>
				<input
					type="search"
					id="search"
					placeholder="Search Marketplace"
					className="inputReset w-full"
				/>
			</form>
		</div>
	);
};

Header.defaultProps = {
	menus: [
		{
			id: 1,
			text: <FaUser size={20} />,
		},
		{
			id: 2,
			text: "Sell",
		},
		{
			id: 3,
			text: "All Categories",
		},
	],
};

export default Header;
