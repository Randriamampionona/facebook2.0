import { PostBody, PostFooter, PostHead } from "./../../common/Post";

const RecentActivity = ({ groupPostList }) => {
	return (
		<div className="space-y-4 mt-2">
			<p className="text-sm text-textLight">Recent activity</p>

			{groupPostList?.map((groupPost) => (
				<div
					key={groupPost.id}
					className="bg-semiDark min-w-full rounded-md">
					<PostHead
						owner={groupPost.owner}
						post={groupPost.post}
						ownerType="group"
						w={36}
						h={36}
					/>
					<PostBody post={groupPost.post} postType="image" />
					<PostFooter count={groupPost.count} />
				</div>
			))}
		</div>
	);
};

RecentActivity.defaultProps = {
	groupPostList: [
		{
			id: 1,
			owner: {
				userID: "hukgck2gy5",
				profile:
					"/assets/group-conversations-img/Estudios Del Cuerpo Humano.png",
				name: "Estudios Del Cuerpo Humano",
				poster: {
					profile: "/assets/user-profile-img/Swae Todoroki.png",
					name: "Swae Todoroki",
				},
			},
			post: {
				type: "public",
				date: new Date(),
				description: "Esse dolore ratione voluptates doloremque",
				img: "/assets/feed-img/1646837812837.jpg",
			},
			count: {
				likes: {
					length: 6521,
					react: ["heart", "wow"],
				},
				comments: 854,
				shares: 57842,
			},
		},

		{
			id: 2,
			owner: {
				userID: "ge8SQsGVS",
				profile: "/assets/group-conversations-img/JavaScript.png",
				name: "JavaScript",
				poster: {
					profile: "/assets/user-profile-img/Bonze Athelstan.png",
					name: "Bonze Athelstan",
				},
			},
			post: {
				type: "public",
				date: new Date(),
				description: "Lorem ipsum dolor elit",
				img: "/assets/feed-img/Screenshot (543).png",
			},
			count: {
				likes: {
					length: 2852,
					react: ["like", "wow"],
				},
				comments: 245,
				shares: 71447,
			},
		},

		{
			id: 3,
			owner: {
				userID: "xgxfd8gfx8b",
				profile: "/assets/group-conversations-img/XXX y hentai.png",
				name: "XXX y hentai",
				poster: {
					profile: "/assets/user-profile-img/Henintsoa Jonathan.png",
					name: "Henintsoa Jonathan",
				},
			},
			post: {
				type: "public",
				date: new Date(),
				description: "Unde cum quidem sunt!",
				img: "/assets/feed-img/melanie-these-rz3eCYGgGSc-unsplash.jpg",
			},
			count: {
				likes: {
					length: 455,
					react: ["like", "heart"],
				},
				comments: 15,
				shares: 85,
			},
		},
	],
};

export default RecentActivity;
