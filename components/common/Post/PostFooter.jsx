import { Fragment, useState } from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import { reactIcons } from "../../icons/ReactIcon";
import formatNumber from "../../../utils/formatNumber";
import { LocalContext } from "../../../store/contexts/LocalContext";
import { AnimatePresence, motion } from "framer-motion";
import motionVariants from "./motionVariants";

const PostFooter = (props) => {
	const {
		post_ID,
		count,
		reactHint,
		showReactionBtns,
		setShowReactionBtns,
		btnsData,
		reactionBtns,
	} = props;
	const { reactFunc } = LocalContext();
	// const [showReactionBtns, setShowReactionBtns] = useState(false);

	const reactHandler = async (react_ID) => {
		reactFunc({ react_ID, post_ID });
		setShowReactionBtns(false);
	};

	return (
		<div className="relative px-3 divide-y divide-hoverDark">
			{!(count.likesCount.length == 0 && count.sharesCount.length == 0) && (
				<div className="flex items-center justify-between my-2">
					<div>
						<p className="flex items-center text-textLight text-[0.8125rem]">
							<span className="grid grid-flow-col place-items-center">
								{reactHint.displayedReact.map((r, i) => (
									<Fragment key={r}>{reactIcons?.(r, i)}</Fragment>
								))}
							</span>
							<span>{formatNumber?.(count.likesCount.length)}</span>
						</p>
					</div>
					<div>
						<p className="space-x-2 text-textLight text-[0.8125rem]">
							<span>{formatNumber?.(0)} Comments</span>
							<span>
								{formatNumber?.(count.sharesCount.length)} Shares
							</span>
						</p>
					</div>
				</div>
			)}

			<div className="flex items-center justify-between gap-x-1">
				{btnsData?.map((btn) => (
					<button
						key={btn.id}
						className="flex-grow flex items-center justify-center gap-x-2 text-textLight text-sm py-1 my-1 rounded hover:bg-hoverDark"
						onMouseOver={() =>
							btn.text === "Like" && setShowReactionBtns(true)
						}
						onClick={(e) => btn.text === "Like" && reactHandler("like")}>
						<span className="text-base">
							{reactHint.hasReacted && btn.text === "Like" ? (
								<Fragment>{reactIcons?.(reactHint.react, 1)}</Fragment>
							) : (
								<btn.Icon />
							)}
						</span>
						{!(reactHint.hasReacted && btn.text === "Like") && (
							<span>{btn.text}</span>
						)}
					</button>
				))}
			</div>

			{/* reactions btns */}
			<AnimatePresence exitBeforeEnter>
				{showReactionBtns && (
					<motion.div
						variants={motionVariants.fadesDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="absolute bottom-12 left-3 flex items-center justify-center gap-x-1 bg-dark p-1 rounded-full shadow-blockShadow"
						onMouseLeave={() => setShowReactionBtns(false)}>
						{reactionBtns?.map((r) => (
							<button
								key={r}
								className="transition-[scale] hover:scale-125"
								onClick={(e) => reactHandler(r)}>
								<Fragment>{reactIcons?.(r, 0, 32, 32)}</Fragment>
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

PostFooter.defaultProps = {
	btnsData: [
		{
			id: 1,
			text: "Like",
			Icon: FiThumbsUp,
		},
		{
			id: 2,
			text: "Comment",
			Icon: FiMessageSquare,
		},
		{
			id: 3,
			text: "Share",
			Icon: IoMdShare,
		},
	],

	reactionBtns: ["like", "heart", "wow", "haha", "angry", "sad", "care"],
};

export default PostFooter;
