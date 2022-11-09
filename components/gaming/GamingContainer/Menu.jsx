import Link from "next/link";
import { useRouter } from "next/router";

const Menu = ({ menuList }) => {
	const { query } = useRouter();

	return (
		<ul className="z-10 sticky top-[3.125rem] flex items-center gap-x-4 w-full h-14 px-3 bg-semiDark lg:hidden">
			{menuList?.map((menu) => (
				<Link key={menu.slug} href={`/gaming?p=${menu.slug}`}>
					<li
						className={`w-auto px-4 py-[0.35rem] text-center text-sm cursor-pointer whitespace-nowrap rounded-full ${
							menu.slug == query.p
								? "bg-[#2e89ff36] text-blueDark font-bold"
								: "bg-lightDark hover:bg-[#4b4c4e]"
						}`}>
						{menu.text}
					</li>
				</Link>
			))}
		</ul>
	);
};

export default Menu;
