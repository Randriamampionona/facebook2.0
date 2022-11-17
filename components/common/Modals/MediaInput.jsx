import Image from "next/image";
import { useRef, useState } from "react";
import { FaPhotoVideo, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../store/contexts/AuthContext";
import EmojiPicker from "../Emoji/EmojiPicker";

const MediaInput = ({ values, setValues }) => {
	const { user: loggedInUser } = AuthContext();

	const [file, setFile] = useState(values.content || null);
	const inptRef = useRef(null);

	const showFilepickerHandler = () => !file && inptRef?.current.click();

	const changeHandler = (file) => {
		setFile(`/assets/feed-img/${file.name}`);
		setValues?.((prev) => ({
			...prev,
			content: `/assets/feed-img/${file.name}`,
		}));
	};

	const removeFileHandler = (e) => {
		e.stopPropagation();
		setFile(null);
	};

	const changeInpHandler = (e) => {
		setValues((prev) => ({
			...prev,
			description: e.target.value,
		}));
	};

	return (
		<div className="w-full px-4">
			<div className="relative w-auto h-auto">
				<textarea
					autoFocus
					autoComplete="off"
					maxLength={64}
					placeholder={`What's on your mind, ${loggedInUser.username}?`}
					className="w-full h-8 bg-transparent border-0 outline-0 text-sm placeholder:text-textLight resize-none"
					value={values.description}
					onChange={changeInpHandler}
				/>

				<EmojiPicker handler={{ key: "description", setValues }} />
			</div>

			<div
				className={`w-full p-2 border border-lightDark rounded-md ${
					file ? "h-52" : "h-44"
				}`}>
				<div
					className="relative flex items-center justify-center w-full h-full bg-lightDark rounded-md select-none cursor-default hover:bg-lightDark/50 active:bg-lightDark overflow-hidden"
					onClick={showFilepickerHandler}>
					<input
						ref={inptRef}
						type="file"
						className="hidden"
						accept=".png , .jpeg , .jpg , .webp"
						onChange={(e) => changeHandler(e.target.files[0])}
					/>

					{file ? (
						<div className="relative w-full h-full">
							<Image
								src={file}
								alt={file}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center">
							<span className="p-3 bg-hoverDark text-textLight rounded-full">
								<FaPhotoVideo />
							</span>
							<h2 className="text-base font-bold">Add Photos/Videos</h2>
							<small className="text-textLight text-xs font-light">
								or drag and drop
							</small>
						</div>
					)}

					<span
						className="grid place-items-center absolute right-2 top-2 rounded-full w-6 h-6 text-textLight bg-[#3a3b3c] hover:bg-red-500/30"
						onClick={removeFileHandler}>
						<FaTimes />
					</span>
				</div>
			</div>
		</div>
	);
};

export default MediaInput;
