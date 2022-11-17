import { Fragment } from "react";
import { FaHouseUser, FaMapMarkedAlt, FaHeart, FaRss } from "react-icons/fa";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { LocalContext } from "../../../store/contexts/LocalContext";
import hobbiesList from "../hobbiesList";

const Intro = () => {
	const {
		DATA: { currentUser, infos },
	} = LocalContext();

	return (
		<div className="px-4 rounded-md w-full bg-semiDark">
			{/* heading */}
			<h2 className="text-xl font-systemUI font-bold pt-4">Intro</h2>

			<div
				className={`w-full ${
					currentUser.isMine ? "" : "divide-y divide-lightDark/60"
				}`}>
				{/* bio */}
				<div className="w-full pt-4">
					<p className="text-center pt-8 pb-12">{`🍂 ${infos.bio} 🍂`}</p>

					{currentUser.isMine && <IntroBtn id="bio" text={"Edit bio"} />}
				</div>

				{/* location and other */}
				<div className="w-full py-4 space-y-4">
					<ul className="space-y-4">
						<li className="flex items-center gap-x-2 text-textLight">
							<span className="text-xl">
								<FaHouseUser />
							</span>
							<p className="text-sm">
								Lives in{" "}
								<span className="font-semibold">{infos.city}</span>
							</p>
						</li>

						<li className="flex items-center gap-x-2 text-textLight">
							<span className="text-xl">
								<FaMapMarkedAlt />
							</span>
							<p className="text-sm">
								From{" "}
								<span className="font-semibold">{infos.country}</span>
							</p>
						</li>

						<li className="flex items-center gap-x-2 text-textLight">
							<span className="text-xl">
								<FaHeart />
							</span>
							<p className="text-sm">{infos.loveCituation}</p>
						</li>

						<li className="flex items-center gap-x-2 text-textLight">
							<span className="text-xl">
								<FaRss />
							</span>
							<p className="text-sm">
								Followed by{" "}
								<span className="font-semibold">5,694 people</span>
							</p>
						</li>
					</ul>
					{currentUser.isMine && (
						<IntroBtn id="details" text={"Edit details"} />
					)}
				</div>

				{/* hobbies */}
				<div
					className={`w-full space-y-4 ${
						currentUser.isMine ? "pb-4" : "py-4"
					}`}>
					<ul className="flex items-center flex-wrap gap-2">
						{infos.hobbies?.map((hobbie) => (
							<li
								key={hobbie}
								className="text-sm font-semibold px-3 py-2 text-textLight border border-lightDark rounded-full cursor-default select-none">
								{hobbiesList.find((h) => h.ref === hobbie)?.text}
							</li>
						))}
					</ul>
					{currentUser.isMine && (
						<IntroBtn id="hobbies" text={"Edit hobbies"} />
					)}
				</div>

				{/* add featured */}
				{currentUser.isMine && (
					<div className="w-full pb-4">
						<button className="flex items-center justify-center gap-x-2 text-textWhite rounded-md w-full h-[2.2rem] bg-lightDark">
							<span className="text-sm font-semibold">Add featured</span>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Intro;

const IntroBtn = ({ id, text }) => {
	const { toogleProfileModal } = GlobalContext();

	const openModalHandler = () => {
		toogleProfileModal(id);
	};

	return (
		<Fragment>
			<button
				className="flex items-center justify-center gap-x-2 text-textWhite rounded-md w-full h-[2.2rem] bg-lightDark"
				onClick={openModalHandler}>
				<span className="text-sm font-semibold">{text}</span>
			</button>
		</Fragment>
	);
};
