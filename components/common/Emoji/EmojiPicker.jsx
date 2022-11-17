import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useMemo, useRef, useState } from "react";
import { FiSmile } from "react-icons/fi";
import motionVariants from "./motionVariants";
import { emojiPickerShortcut } from "../../../utils/shortcuts";

const EmojiPicker = ({ emojiList, position, handler }) => {
	const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
	const constraintsRef = useRef(null);

	useMemo(() => emojiPickerShortcut(setOpenEmojiPicker), []);

	const tooglePicker = (payload) => setOpenEmojiPicker(payload);

	const apendValuesHandler = (emoji) => {
		handler?.setValues((prev) => ({
			...prev,
			[handler?.key]: prev?.[handler?.key] + emoji,
		}));
	};

	return (
		<Fragment>
			{/* emoji btn */}
			<AnimatePresence>
				{!openEmojiPicker && (
					<button
						type="button"
						className="absolute"
						style={{ ...position }}
						onClick={tooglePicker}>
						<span className="text-textLight/75 text-2xl hover:text-[#ffc83d]">
							<FiSmile />
						</span>
					</button>
				)}
			</AnimatePresence>

			{/* emoji picker */}
			<AnimatePresence>
				{openEmojiPicker && (
					<motion.section
						ref={constraintsRef}
						className="z-20 fixed inset-0 grid place-items-center w-full h-full">
						<motion.div
							drag={true}
							dragConstraints={constraintsRef}
							variants={motionVariants.showsIn}
							initial="initial"
							animate="animate"
							exit="exit"
							className="z-20 absolute w-auto h-auto"
							onMouseLeave={(e) => tooglePicker(false)}>
							<div className="w-[19rem] h-auto rounded-md bg-dark shadow-md shadow-dark divide-y divide-lightDark">
								<div className="relative flex items-center justify-between p-4 cursor-grab">
									<h3 className="font-poppins font-bold text-base cursor-default">
										Facebook 2.0
									</h3>
									<span
										className="absolute top-4 right-4 text-textLight text-xl hover:text-textWhite cursor-default"
										onClick={(e) => tooglePicker(false)}>
										&times;
									</span>
								</div>

								<div
									id="emoji"
									className="flex flex-wrap justify-between max-h-60 px-[9px] overflow-auto">
									{emojiList?.map((emoji, i) => (
										<small
											key={i}
											className="flex items-center justify-between p-[0.325rem] text-xl hover:bg-lightDark cursor-default select-none active:scale-110"
											onClick={(e) => apendValuesHandler(emoji)}>
											{emoji}
										</small>
									))}
								</div>

								<div className="flex items-center justify-center p-4">
									<span className="text-center text-xs font-normal text-textLight">
										Tip: Press&nbsp;
										<code className="bg-gray-400 px-[2px] py-[1px] rounded-sm text-dark font-medium">
											CTRL
										</code>
										&nbsp;+&nbsp;
										<code className="bg-gray-400 px-[2px] py-[1px] rounded-sm text-dark font-medium">
											B
										</code>
										&nbsp;to use emoji
									</span>
								</div>
							</div>
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</Fragment>
	);
};

EmojiPicker.defaultProps = {
	position: {
		top: 0,
		right: 0,
	},

	emojiList: [
		"😀",
		"😁",
		"😂",
		"🤣",
		"😃",
		"😄",
		"😅",
		"😆",
		"😗",
		"🥰",
		"😘",
		"😍",
		"😎",
		"😋",
		"😊",
		"😉",
		"😙",
		"😚",
		"🙂",
		"🤗",
		"🤩",
		"🤔",
		"🤨",
		"😮",
		"😥",
		"😣",
		"😏",
		"🙄",
		"😶",
		"😑",
		"😐",
		"🤐",
		"😯",
		"😪",
		"😫",
		"🥱",
		"😴",
		"😌",
		"😛",
		"🙃",
		"😕",
		"😔",
		"😓",
		"😒",
		"🤤",
		"😝",
		"😜",
		"🤑",
		"😲",
		"🙁",
		"😖",
		"😞",
		"😟",
		"😤",
		"😬",
		"🤯",
		"😩",
		"😨",
		"😧",
		"😦",
		"😭",
		"😢",
		"😰",
		"😱",
		"🥵",
		"🥶",
		"😳",
		"🤪",
		"😵",
		"🥴",
		"🤮",
		"🤢",
		"🤕",
		"🤒",
		"😷",
		"🤬",
		"😡",
		"😠",
		"🤧",
		"😇",
		"🥳",
		"🥺",
		"🤠",
		"🤡",
		"🤥",
		"🤫",
		"💀",
		"👺",
		"👹",
		"👿",
		"😈",
		"🤓",
		"🧐",
		"🤭",
		"💀",
		"💩",
	],
};

export default EmojiPicker;
