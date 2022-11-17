import LoadingBtn from "../Buttons/LoadingBtn";

const SubmitBtn = ({ btnText, isLoading }) => {
	return (
		<div className="w-full p-4">
			{isLoading ? (
				<LoadingBtn style={"w-full h-8 rounded-md"} text={"Uploading..."} />
			) : (
				<button
					type="submit"
					className="w-full h-8 bg-blueNormal rounded-md">
					<span className="text-sm font-medium">{btnText}</span>
				</button>
			)}
		</div>
	);
};

export default SubmitBtn;
