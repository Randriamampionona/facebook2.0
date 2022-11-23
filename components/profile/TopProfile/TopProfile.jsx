/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetPageData } from "../../../hooks";
import BasicInfoBlock from "./BasicInfoBlock";
import Blurness from "./Blurness";
import CoverPicBlock from "./CoverPicBlock";
import MenuBlock from "./MenuBlock";

const TopProfile = () => {
	const {
		data: { payload },
	} = useGetPageData();
	const [offsetHeight, setOffsetHeight] = useState({ oh1: 0, oh2: 0 });
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const { oh1, oh2 } = offsetHeight;

		window &&
			window.addEventListener("scroll", () => {
				window.scrollY >= oh1 + oh2 ? setIsFixed(true) : setIsFixed(false);
			});
	}, [offsetHeight]);

	return (
		<main
			className={`relative w-full bg-semiDark overflow-hidden ${
				isFixed ? "mb-[calc(3.6875rem+1rem)]" : "mb-0"
			}`}>
			{/* cover pic */}
			<CoverPicBlock
				img={payload.currentUser.pictures.cover}
				alt={payload.currentUser.username}
				isMine={payload.currentUser.isMine}
				setOffsetHeight={setOffsetHeight}
			/>

			{/* blurness */}
			<Blurness
				img={payload.currentUser.pictures.cover}
				alt={payload.currentUser.username}
			/>

			{/* pdp name and stuff */}
			<BasicInfoBlock
				user={payload.currentUser}
				isMine={payload.currentUser.isMine}
				setOffsetHeight={setOffsetHeight}
			/>

			{/* menu section */}
			<MenuBlock user={payload.currentUser} isFixed={isFixed} />
		</main>
	);
};

export default TopProfile;
