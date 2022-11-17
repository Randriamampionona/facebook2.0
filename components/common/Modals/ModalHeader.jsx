import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../../store/contexts/GlobalContext";

const ModalHeader = ({ isEdit }) => {
	const { toogleUploadModal } = GlobalContext();

	const closeUploadModalHandler = () => toogleUploadModal({ type: null });

	return (
		<div className="relative w-full flex items-center justify-center p-4 border-b border-lightDark">
			<h1 className="font-systemUI font-semibold text-xl text-center cursor-default">
				{isEdit ? "Edit" : "Creat"} post
			</h1>

			{/* close button */}
			<span
				className="grid place-items-center absolute right-4 top-4 rounded-full w-8 h-8 text-textLight bg-lightDark hover:bg-red-500/30"
				onClick={closeUploadModalHandler}>
				<FaTimes />
			</span>
		</div>
	);
};

export default ModalHeader;
