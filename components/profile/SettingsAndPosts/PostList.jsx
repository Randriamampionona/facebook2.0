import { ProfileContextLocal } from "../../../store/contexts/locales/ProfileContext.local";
import { PostBody, PostFooter, PostHead } from "../../common/Post";

const PostList = () => {
	const {
		DATA: { posts },
	} = ProfileContextLocal();

	return (
		<div className="flex flex-col items-start justify-center w-full space-y-4">
			{posts?.flatMap((item) => (
				<div
					key={item.post_ID}
					className="bg-semiDark min-w-full rounded-md">
					<PostHead owner={item.owner} post={item.post} />
					<PostBody post={item.post} postType={item.post.type} />
					<PostFooter
						post_ID={item.post_ID}
						count={item.count}
						reactHint={item.post.reactHint}
					/>
				</div>
			))}
		</div>
	);
};

export default PostList;
