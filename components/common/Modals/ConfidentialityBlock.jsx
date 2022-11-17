import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaGlobeAmericas,
	FaUserFriends,
	FaUserLock,
	FaChevronDown,
} from "react-icons/fa";

const ConfidentialityBlock = ({ values, setValues, confidData }) => {
	const [confidentiality, setConfidentiality] = useState(
		confidData?.[2 - values.confidentiality || 0]
	);
	const [showList, setShowList] = useState(false);

	const changeConfidHandler = (c) => {
		setConfidentiality(c);
		setValues((prev) => ({
			...prev,
			confidentiality: c.id,
		}));
	};

	return (
		<div className="flex items-center gap-x-2 w-full p-4">
			<Image
				src={"/assets/user-profile-img/default.png"}
				alt=""
				width={46}
				height={46}
				className="rounded-full cursor-default active:scale-75"
			/>

			<div className="flex flex-col">
				<Link href={"/"}>
					<a className="text-sm font-medium mb-[0.125rem]">Tooj Rtn</a>
				</Link>

				<div
					className="relative py-[0.125rem] px-2 rounded-md bg-lightDark"
					onClick={(e) => setShowList(!showList)}>
					<li className="flex items-center gap-x-2 text-[0.8125rem] cursor-default select-none">
						<div className="flex items-center gap-x-1">
							<span>{confidentiality.Icon}</span>
							<span>{confidentiality.text}</span>
						</div>

						<span className="text-[0.625rem]">
							<FaChevronDown />
						</span>
					</li>

					{showList && (
						<ul className="z-10 flex flex-col absolute right-0 bottom-0 translate-y-[5.2rem] rounded bg-lightDark shadow-md shadow-dark">
							{confidData?.map((c) => (
								<li
									key={c.id}
									value={c.id}
									className="text-[0.8125rem] px-[14px] py-[0.1875rem] cursor-default select-none hover:bg-hoverDark"
									onClick={(e) => changeConfidHandler(c)}>
									<div className="flex items-center gap-x-1">
										<span>{c.Icon}</span>
										<span>{c.text}</span>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

ConfidentialityBlock.defaultProps = {
	confidData: [
		{
			id: 2,
			text: "Public",
			Icon: <FaGlobeAmericas />,
		},
		{
			id: 1,
			text: "Friends",
			Icon: <FaUserFriends />,
		},
		{
			id: 0,
			text: "Private",
			Icon: <FaUserLock />,
		},
	],
};

export default ConfidentialityBlock;
