import { HomeContextLocal } from "../../../../store/contexts/locales/HomeContext.local";
import { PostBody, PostFooter, PostHead } from "../../../common/Post";

const FeedsList = () => {
	const {
		DATA: { posts },
	} = HomeContextLocal();

	return (
		<section className="flex flex-col items-start justify-center w-full space-y-4">
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
		</section>
	);
};

export default FeedsList;
