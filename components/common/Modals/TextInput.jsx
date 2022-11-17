import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../store/contexts/AuthContext";
import EmojiPicker from "../Emoji/EmojiPicker";

const TextInput = ({ values, setValues, textStyles }) => {
	const { user: loggedInUser } = AuthContext();

	const changeUiHandler = (ui) => {
		setValues((prev) => ({
			...prev,
			content: ui.content,
		}));
	};

	const changeHandler = (e) => {
		setValues((prev) => ({
			...prev,
			description: e.target.value,
		}));
	};

	const resetHandler = () => {
		setValues((prev) => ({
			...prev,
			content: null,
			description: "",
		}));
	};

	return (
		<div className="w-full px-4">
			{!values.content ? (
				<div className="relative w-auto h-auto">
					<textarea
						autoFocus
						autoComplete="off"
						maxLength={64}
						placeholder={`What's on your mind, ${loggedInUser.username}?`}
						className="w-full h-28 bg-transparent border-0 outline-0 text-lg placeholder:text-textLight resize-none"
						value={values.description}
						onChange={changeHandler}
					/>

					<EmojiPicker
						position={{ bottom: 0, right: 0 }}
						handler={{ key: "description", setValues }}
					/>
				</div>
			) : (
				<div
					className="relative flex items-center justify-center w-full h-48 rounded-md"
					style={{ background: values.content?.bg }}>
					<p
						className="w-full max-w-[75%] text-center font-bold"
						style={{ color: values.content?.color }}>
						{values.description}
					</p>

					<span
						className="grid place-items-center absolute right-2 top-2 rounded-full w-6 h-6 text-textLight bg-[#3a3b3c] hover:bg-red-500/30"
						onClick={resetHandler}>
						<FaTimes />
					</span>
				</div>
			)}

			{values.description && (
				<div className="flex items-center w-full border border-lightDark rounded-md mt-4 p-2 overflow-hidden">
					<Swiper slidesPerView={"auto"} spaceBetween={8}>
						{textStyles?.map((style) => (
							<SwiperSlide key={style.id} className="!w-auto">
								<button
									key={style.id}
									className={`grid place-items-center w-8 h-8 rounded-md border-2  cursor-pointer active:scale-90 ${
										JSON.stringify(values.content) ===
										JSON.stringify(style.content)
											? "border-[#060e18]"
											: "border-white"
									}`}
									style={{
										color: style.content.color,
										background: style.content.bg,
									}}
									onClick={(e) => {
										e.preventDefault();
										changeUiHandler(style);
									}}>
									Aa
								</button>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};

TextInput.defaultProps = {
	textStyles: [
		{
			id: 1,
			content: {
				bg: "#f44336",
				color: "#e4e6eb",
			},
		},
		{
			id: 2,
			content: {
				bg: "#e91e63",
				color: "#e4e6eb",
			},
		},
		{
			id: 3,
			content: {
				bg: "#9c27b0",
				color: "#e4e6eb",
			},
		},
		{
			id: 4,
			content: {
				bg: "#673ab7",
				color: "#e4e6eb",
			},
		},
		{
			id: 5,
			content: {
				bg: "#2196f3",
				color: "#e4e6eb",
			},
		},
		{
			id: 6,
			content: {
				bg: "#009688",
				color: "#e4e6eb",
			},
		},
		{
			id: 7,
			content: {
				bg: "#4caf50",
				color: "#18191a",
			},
		},
		{
			id: 8,
			content: {
				bg: "#ffeb3b",
				color: "#18191a",
			},
		},
		{
			id: 9,
			content: {
				bg: "#795548",
				color: "#e4e6eb",
			},
		},
		{
			id: 10,
			content: {
				bg: "#607d8b",
				color: "#e4e6eb",
			},
		},
		{
			id: 11,
			content: {
				bg: "#01050a",
				color: "#e4e6eb",
			},
		},
	],
};

export default TextInput;
