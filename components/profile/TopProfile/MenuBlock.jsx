import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";
import motionVariants from "./motionVariants";

const MenuBlock = ({ user, menuLists, isFixed }) => {
	const { query } = useRouter();

	return (
		<Fragment>
			{isFixed && (
				<div className="z-10 fixed top-[3.1875rem] w-full h-[3.6875rem] bg-semiDark shadow shadow-dark">
					{/* profli & btn */}
					<div className="flex items-center justify-between py-2 px-5 w-full h-full max-w-full mx-auto lg:max-w-[80%] xl:max-w-[70%]">
						<motion.div
							variants={motionVariants.showsIn}
							initial="initial"
							animate="animate"
							className="flex items-center gap-x-3">
							<Image
								src={user.pictures.profile}
								alt={user.username}
								width={36}
								height={36}
								objectFit="cover"
								className="rounded-full"
							/>

							<p className="text-sm font-semibold">{user.username}</p>
						</motion.div>

						<button className="grid place-items-center w-11 h-8 rounded-md bg-lightDark">
							<span className="text-xl text-textLight">
								<FiMoreHorizontal />
							</span>
						</button>
					</div>
				</div>
			)}

			{!isFixed && (
				<div className="relative px-5 w-full h-[3.6875rem] max-w-full mx-auto bg-semiDark lg:max-w-[80%] xl:max-w-[70%]">
					{/* separator */}
					<hr className="w-full border-lightDark" />

					{/* menus & btn */}
					<div className="flex items-center justify-between">
						<ul className="flex items-center gap-x-3">
							{menuLists?.map((menu) => (
								<Link
									key={menu.slug}
									href={`/profile/${user.user_ID}?p=${menu.slug}`}>
									<li
										className={`font-semibold cursor-pointer px-2 py-4 border-b-2 ${
											query.p === menu.slug
												? "text-blueDark border-blueDark"
												: "text-textLight border-transparent hover:bg-lightDark"
										}`}>
										{menu.text}
									</li>
								</Link>
							))}

							<li className="flex items-center gap-x-1 font-semibold cursor-pointer px-2 py-4 border-b-2 text-textLight border-transparent hover:bg-lightDark">
								<span>More</span>
								<span>
									<HiChevronDown />
								</span>
							</li>
						</ul>

						<button className="grid place-items-center w-11 h-8 rounded-md bg-lightDark">
							<span className="text-xl text-textLight">
								<FiMoreHorizontal />
							</span>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	);
};

MenuBlock.defaultProps = {
	menuLists: [
		{
			slug: "posts",
			text: "Posts",
		},
		{
			slug: "about",
			text: "About",
		},
		{
			slug: "friends",
			text: "Friends",
		},
		{
			slug: "photos",
			text: "Photos",
		},
	],
};

export default MenuBlock;
