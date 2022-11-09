import { PostBody, PostFooter, PostHead } from "./../../common/Post";

const GamingFeeds = ({ gamingFeedsList }) => {
	return (
		<div className="space-y-4">
			{gamingFeedsList?.map((feed) => (
				<div key={feed.id} className="bg-semiDark min-w-full rounded-md">
					<PostHead owner={feed.owner} post={feed.post} />
					<PostBody post={feed.post} postType="video" />
					<PostFooter count={feed.count} />
				</div>
			))}
		</div>
	);
};

export default GamingFeeds;
