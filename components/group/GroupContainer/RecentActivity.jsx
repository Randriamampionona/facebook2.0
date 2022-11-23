import { useGetPageData } from "../../../hooks";
import { Post } from "./../../common/Post";

const RecentActivity = () => {
	const { data } = useGetPageData();

	return (
		<div className="space-y-4 mt-2 mx-auto">
			<p className="text-sm text-textLight">Recent activity</p>

			{data?.payload?.posts?.map((p) => {
				const item = {
					...p,
					ownerType: "group", //just for the test
					w: 36,
					h: 36,
				};
				return <Post key={item.post_ID} {...item} />;
			})}
		</div>
	);
};

export default RecentActivity;
