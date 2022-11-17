/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
	FaCamera,
	FaPlusCircle,
	FaEdit,
	FaUserCircle,
	FaFacebookMessenger,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import formatNumber from "./../../../utils/formatNumber";

const BasicInfoBlock = ({
	user,
	isMine,
	friendList,
	btns,
	setOffsetHeight,
}) => {
	const ref = useRef(null);

	useEffect(() => {
		setOffsetHeight((prev) => ({
			...prev,
			oh2: ref?.current?.offsetHeight,
		}));
	}, [ref]);

	return (
		<div
			ref={ref}
			className="relative flex flex-col justify-between gap-y-4 w-full max-w-full mx-auto py-4 px-5 bg-semiDark md:flex-row md:gap-x-3 lg:max-w-[80%] xl:max-w-[70%]">
			{/* profil pic */}
			<div className="z-[55] absolute -top-24 left-1/2 -translate-x-1/2 flex-shrink-0 w-48 h-48 mx-auto rounded-full bg-lightDark border-4 border-semiDark md:mx-0 md:w-40 md:h-40 md:left-24 md:-top-8">
				<Image
					src={user.pictures.profile}
					alt={user.username}
					objectFit="cover"
					layout="fill"
					className="rounded-full"
				/>

				{isMine && (
					<button className="z-50 absolute bottom-[0.9375rem] right-[0.625rem] flex items-center justify-center p-2 bg-lightDark text-textWhite border border-gray-600 rounded-full md:right-0">
						<span className="text-xl">
							<FaCamera />
						</span>
					</button>
				)}
			</div>

			<div className="flex-grow flex-shrink flex flex-col mt-[6rem] md:flex-row md:items-end md:justify-between md:pb-4 md:mt-0 md:ml-[calc(10rem+0.75rem)]">
				{/* username & friend stuff */}
				<div className="flex flex-col items-center justify-center w-full md:items-start">
					<h1 className="text-[2rem] font-poppins font-[700] leading-none text-center md:text-2xl">
						{user.username}
					</h1>
					<p className="text-textLight font-semibold text-center md:text-sm">
						{formatNumber?.(584)} friends
					</p>

					{/* list */}
					<div
						className="flex items-center justify-center w-auto mt-2 md:!px-0 md:mt-1"
						style={{
							paddingLeft: (friendList.length - 1) * 0.5 + "rem",
						}}>
						{friendList?.map((friend, i) => (
							<div
								key={friend}
								className="relative w-10 h-10 rounded-full border-2 border-dark bg-lightDark cursor-pointer overflow-hidden md:w-9 md:h-9"
								style={{
									left: i !== 0 ? i * -0.5 + "rem" : "0rem",
								}}>
								<Image
									src={friend}
									alt=""
									objectFit="cover"
									layout="fill"
								/>
								{i + 1 === friendList.length && (
									<span className="z-10 absolute grid place-items-center w-full h-full text-white text-xl bg-dark/50">
										<FiMoreHorizontal />
									</span>
								)}
							</div>
						))}
					</div>
				</div>

				{/* some btns */}
				<div className="flex items-center justify-center gap-x-2 w-full mt-4 md:justify-end">
					{btns?.[isMine ? "noAuthBtn" : "requiredAuthBtn"]?.map((btn) => (
						<button
							key={btn.id}
							className={`flex-grow flex items-center justify-center h-[2.2rem] gap-x-2 text-textWhite rounded-md ${btn.color} sm:max-w-[9rem]`}>
							<span className="text-base">{btn.Icon}</span>
							<span className="text-xs font-semibold">{btn.text}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

BasicInfoBlock.defaultProps = {
	friendList: [
		"/assets/user-profile-img/SHIN YU.png",
		"/assets/user-profile-img/Andria Aliniaina.png",
		"/assets/user-profile-img/Annick Shinary.png",
		"/assets/user-profile-img/Lutecianne-RM.png",
		"/assets/user-profile-img/Raherinantenaina Fayyaz Hassanaly.png",
		"/assets/user-profile-img/Rosah-La-Blanche.png",
		"/assets/user-profile-img/Manoa Razafi.png",
		"/assets/user-profile-img/Stecy Ashley.png",
	],

	btns: {
		noAuthBtn: [
			{
				id: 1,
				text: "Add to story",
				Icon: <FaPlusCircle />,
				color: "bg-blueNormal",
			},
			{
				id: 2,
				text: "Edit profile",
				Icon: <FaEdit />,
				color: "bg-lightDark",
			},
		],

		requiredAuthBtn: [
			{
				id: 3,
				text: "Add",
				Icon: <FaUserCircle />,
				color: "bg-blueNormal",
				requireAuth: true,
			},
			{
				id: 4,
				text: "Send message",
				Icon: <FaFacebookMessenger />,
				color: "bg-lightDark",
				requireAuth: true,
			},
		],
	},
};

export default BasicInfoBlock;
