import { ProfileContextLocal } from "../../../store/contexts/locales/ProfileContext.local";
import { PostForm } from "../../common/Post";
import * as Icons from "../../icons/Icons";
import PostList from "./PostList";
import Settings from "./Settings";

const SettingsAndPosts = ({ postType }) => {
	const {
		DATA: { currentUser },
	} = ProfileContextLocal();

	return (
		<div className="flex flex-col items-start gap-y-4 w-full">
			{/* post form */}
			<PostForm postType={postType} />

			{/* parametre */}
			<Settings isMine={currentUser.isMine} />

			{/* my post */}
			<PostList />
		</div>
	);
};

SettingsAndPosts.defaultProps = {
	postType: [
		{
			id: 1,
			text: "Live video",
			Icon: Icons.LiveVideoIcon,
		},
		{
			id: 2,
			text: "Photo/video",
			Icon: Icons.PhotoVideoIcon,
		},
		{
			id: 3,
			text: "Life event",
			Icon: Icons.LifeEventIcon,
		},
	],
};

export default SettingsAndPosts;
