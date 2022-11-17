import { LocalContext } from "../../../store/contexts/LocalContext";
import { Post } from "./../../common/Post";

const GamingFeeds = () => {
	const {
		DATA: { posts },
	} = LocalContext();

	return (
		<div className="space-y-4">
			{posts?.map((item) => (
				<Post key={item.post_ID} {...item} />
			))}
		</div>
	);
};

export default GamingFeeds;
