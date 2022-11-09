import { ImSpinner7 } from "react-icons/im";

const LoadingBtn = ({ style }) => {
	return (
		<button
			className={`${style} flex items-center justify-center gap-x-2 bg-gray-400 cursor-not-allowed`}
			disabled>
			<span className="animate-spin">
				<ImSpinner7 />
			</span>
			<span>Loading...</span>
		</button>
	);
};

export default LoadingBtn;
