import { useGetPageData } from "../../../hooks";
import { Post } from "./../../common/Post";

const GamingFeeds = () => {
	const { data } = useGetPageData();

	return (
		<div className="space-y-4">
			{data?.payload?.posts?.map((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</div>
	);
};

export default GamingFeeds;
