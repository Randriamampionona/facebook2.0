import { useEffect, useState } from "react";
import { EmojiPicker } from "../../common";

const Bio = ({ values, setValues }) => {
	const [charLength, setCharLength] = useState(120);

	const changeHandler = (e) => {
		setValues((prev) => ({
			...prev,
			bio: e.target.value,
		}));
	};

	useEffect(() => {
		setCharLength(120 - values.bio.length);
	}, [values.bio.length]);

	return (
		<div className="w-full p-4 border-b border-lightDark">
			<div className="relative w-auto">
				<textarea
					autoFocus
					maxLength={120}
					name="bio"
					placeholder="Write something that discribe you"
					className={`w-full h-32 max-h-32 p-4 rounded-md bg-lightDark outline-none focus-within:border ${
						charLength < 0
							? "border border-red-500 focus-within:border-red-500"
							: "focus-within:border-blueNormal"
					}`}
					value={values.bio}
					onChange={changeHandler}
				/>
				<EmojiPicker
					position={{ bottom: "1rem", right: "1rem" }}
					handler={{ key: "bio", setValues }}
				/>
			</div>
			<p className="text-end text-xs text-textLight leading-none font-normal">
				{charLength} characters remaining
			</p>
		</div>
	);
};

export default Bio;
