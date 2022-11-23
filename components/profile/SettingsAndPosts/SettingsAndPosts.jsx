import { useGetPageData } from "../../../hooks";
import { PostForm } from "../../common/Post";
import * as Icons from "../../icons/Icons";
import PostList from "./PostList";
import Settings from "./Settings";

const SettingsAndPosts = ({ postType }) => {
	const {
		data: { payload },
	} = useGetPageData();

	return (
		<div className="flex flex-col items-start gap-y-4 w-full">
			{/* post form */}
			{payload.currentUser.isMine && <PostForm postType={postType} />}

			{/* parametre */}
			<Settings isMine={payload.currentUser.isMine} />

			{/* my post */}
			<PostList />
		</div>
	);
};

SettingsAndPosts.defaultProps = {
	postType: [
		{
			id: "video",
			text: "Live video",
			Icon: Icons.LiveVideoIcon,
		},
		{
			id: "photo",
			text: "Photo/video",
			Icon: Icons.PhotoVideoIcon,
		},
		{
			id: "text",
			text: "Life event",
			Icon: Icons.LifeEventIcon,
		},
	],
};

export default SettingsAndPosts;
