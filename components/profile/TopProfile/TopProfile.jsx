/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { LocalContext } from "../../../store/contexts/LocalContext";
import BasicInfoBlock from "./BasicInfoBlock";
import Blurness from "./Blurness";
import CoverPicBlock from "./CoverPicBlock";
import MenuBlock from "./MenuBlock";

const TopProfile = () => {
	const {
		DATA: { currentUser },
	} = LocalContext();
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
				img={currentUser.pictures.cover}
				alt={currentUser.username}
				isMine={currentUser.isMine}
				setOffsetHeight={setOffsetHeight}
			/>

			{/* blurness */}
			<Blurness
				img={currentUser.pictures.cover}
				alt={currentUser.username}
			/>

			{/* pdp name and stuff */}
			<BasicInfoBlock
				user={currentUser}
				isMine={currentUser.isMine}
				setOffsetHeight={setOffsetHeight}
			/>

			{/* menu section */}
			<MenuBlock user={currentUser} isFixed={isFixed} />
		</main>
	);
};

export default TopProfile;
