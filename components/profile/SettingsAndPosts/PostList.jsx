import { LocalContext } from "../../../store/contexts/LocalContext";
import { Post } from "../../common/Post";

const PostList = () => {
	const {
		DATA: { posts },
	} = LocalContext();

	return (
		<div className="flex flex-col items-start justify-center w-full space-y-4">
			{posts?.flatMap((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</div>
	);
};

export default PostList;
