import { LocalContext } from "../../../../store/contexts/LocalContext";
import { Post } from "../../../common/Post";

const FeedsList = () => {
	const {
		DATA: { posts },
	} = LocalContext();

	return (
		<section className="flex flex-col items-start justify-center w-full space-y-4">
			{posts?.flatMap((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</section>
	);
};

export default FeedsList;
