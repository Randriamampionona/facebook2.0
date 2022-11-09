import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { LogoIcon } from "../../icons/Icons";

const Left = ({ user }) => {
	return (
		<div className="flex items-center gap-x-2 h-full pl-2 sm:pl-4 xl:w-[17.5rem]">
			{/* logo */}
			<div>
				<Link href={user ? "/home" : "/"}>
					<a>
						<LogoIcon />
					</a>
				</Link>
			</div>

			{/* search */}
			{user && (
				<div className="w-auto xl:w-[13.375rem]">
					<li className="group relative grid place-items-center bg-lightDark rounded-full w-10 h-10 hover:bg-[#4b4c4e] xl:hidden">
						<FiSearch />
					</li>

					<form className="items-center bg-lightDark text-textLight rounded-full w-full hidden xl:flex">
						<label htmlFor="search" className="pl-3">
							<FiSearch />
						</label>
						<input
							type="search"
							id="search"
							placeholder="Search Facebook"
							className="inputReset w-full p-2"
						/>
					</form>
				</div>
			)}
		</div>
	);
};

export default Left;
