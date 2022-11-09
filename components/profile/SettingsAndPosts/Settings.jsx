import { useState } from "react";
import { FaSlidersH, FaCog } from "react-icons/fa";
import { HiViewList, HiViewGrid } from "react-icons/hi";

const Settings = ({ isMine, btns, views }) => {
	const [viewType, setViewType] = useState("list");

	const changeView = (key) => setViewType(key);

	return (
		<div className="w-full bg-semiDark rounded-md divide-y-[1px] divide-lightDark">
			<div className="flex items-center justify-between px-4">
				<h2 className="text-xl font-systemUI font-bold">Posts</h2>

				<div className="flex items-center gap-x-2 my-2">
					{(isMine ? btns : btns.filter((b) => !b.requireAuth))?.map(
						(btn) => (
							<button
								key={btn.text}
								className="flex items-center justify-center gap-x-2 text-textWhite rounded-md w-full h-[2.2rem] bg-lightDark whitespace-nowrap px-4">
								<span className="text-base">{btn.Icon}</span>
								<span className="text-sm font-semibold">
									{btn.text}
								</span>
							</button>
						)
					)}
				</div>
			</div>

			{isMine && (
				<div className="flex items-center justify-center px-4">
					{views?.map((view) => (
						<button
							key={view.id}
							className={`flex-grow flex items-center justify-center gap-x-1  w-full h-[2.25rem] bg-none border-b-2 ${
								viewType === view.id
									? "text-blueNormal border-blueNormal"
									: "text-textLight border-transparent hover:bg-lightDark"
							}`}
							onClick={(e) => changeView(view.id)}>
							<span className="text-lg">{view.Icon}</span>
							<span className="text-sm font-medium">{view.text}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

Settings.defaultProps = {
	btns: [
		{
			text: "Filters",
			Icon: <FaSlidersH />,
			requireAuth: false,
		},
		{
			text: "Manage posts",
			Icon: <FaCog />,
			requireAuth: true,
		},
	],

	views: [
		{
			id: "list",
			text: "List view",
			Icon: <HiViewList />,
		},
		{
			id: "grid",
			text: "Grid view",
			Icon: <HiViewGrid />,
		},
	],
};

export default Settings;
