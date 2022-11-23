import { useGetPageData } from "../../../../hooks";
import { Post } from "../../../common/Post";

const FeedsList = () => {
	const { data } = useGetPageData();

	return (
		<section className="flex flex-col items-start justify-center w-full space-y-4">
			{data?.payload?.posts?.map((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</section>
	);
};

export default FeedsList;
