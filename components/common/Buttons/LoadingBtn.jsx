import { ImSpinner7 } from "react-icons/im";

const LoadingBtn = ({ style, text }) => {
	return (
		<button
			className={`${style} flex items-center justify-center gap-x-2 bg-gray-400 cursor-not-allowed`}
			disabled>
			<span className="animate-spin">
				<ImSpinner7 />
			</span>
			<span>{text}</span>
		</button>
	);
};

LoadingBtn.defaultProps = {
	text: "Loading...",
};

export default LoadingBtn;
