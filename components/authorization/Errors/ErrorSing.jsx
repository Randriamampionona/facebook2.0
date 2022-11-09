import { FaExclamationCircle } from "react-icons/fa";

const ErrorSing = ({ msg }) => {
	return (
		<span
			className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600"
			title={msg}>
			<FaExclamationCircle />
		</span>
	);
};

export default ErrorSing;
