import { useGetPageData } from "../../../hooks";
import { Post } from "../../common/Post";

const PostList = () => {
	const { data } = useGetPageData();

	return (
		<div className="flex flex-col items-start justify-center w-full space-y-4">
			{data?.payload?.posts?.flatMap((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</div>
	);
};

export default PostList;
