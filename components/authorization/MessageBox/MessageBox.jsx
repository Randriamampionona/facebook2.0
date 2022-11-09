import { Fragment } from "react";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const MessageBox = ({ msg }) => {
	return (
		<Fragment>
			{msg.error && typeof msg.error === "string" && (
				<div className="flex items-center justify-between w-full h-10 px-3 rounded border border-red-600 bg-red-200">
					<p className="text-red-600 text-sm font-medium">{msg.error}</p>
					<span className="text-red-600">
						<FaExclamationTriangle />
					</span>
				</div>
			)}

			{msg.success && (
				<div className="flex items-center justify-between w-full h-10 px-3 rounded border border-green-600 bg-green-200">
					<p className="text-green-600 text-sm font-medium">
						{msg.success}
					</p>
					<span className="text-green-600">
						<FaCheckCircle />
					</span>
				</div>
			)}
		</Fragment>
	);
};

export default MessageBox;
