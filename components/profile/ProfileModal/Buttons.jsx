import { Fragment } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { LoadingBtn } from "./../../common";

const Buttons = ({ isLoading }) => {
	const { modal, toogleProfileModal } = GlobalContext();

	const closeHandler = () => toogleProfileModal(false);

	return (
		<div className="flex items-center justify-between w-full p-4">
			<div className="flex items-center justify-start gap-x-1">
				<span className="text-base">
					<FaGlobeAmericas />
				</span>
				<span className="text-sm font-medium">{modal.form} are Public</span>
			</div>

			<div className="flex items-center justify-end gap-x-2">
				<button
					type="reset"
					className="px-5 py-[6px] rounded-md bg-lightDark"
					onClick={closeHandler}>
					<span>Cancel</span>
				</button>

				<Fragment>
					{isLoading ? (
						<LoadingBtn
							style={"px-8 py-[6px] rounded-md bg-blueNormal"}
						/>
					) : (
						<button
							type="submit"
							className="px-8 py-[6px] rounded-md bg-blueNormal">
							<span>Save</span>
						</button>
					)}
				</Fragment>
			</div>
		</div>
	);
};

export default Buttons;
