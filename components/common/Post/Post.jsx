import { useState } from "react";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";

const Post = ({ ...props }) => {
	const [showReactionBtns, setShowReactionBtns] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const leaveHandler = () => {
		showReactionBtns && setShowReactionBtns(false)
		openMenu && setOpenMenu(false)
	}

	return (
		<div
			className="bg-semiDark min-w-full rounded-md"
			onMouseLeave={leaveHandler}>
			<PostHead
				post_ID={props.post_ID}
				owner={props.owner}
				post={props.post}
				h={props?.h}
				w={props?.w}
				ownerType={props?.ownerType}
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
			/>
			<PostBody post={props.post} postType={props.post.type} />
			<PostFooter
				post_ID={props.post_ID}
				count={props.count}
				reactHint={props.post.reactHint}
				showReactionBtns={showReactionBtns}
				setShowReactionBtns={setShowReactionBtns}
			/>
		</div>
	);
};

export default Post;
