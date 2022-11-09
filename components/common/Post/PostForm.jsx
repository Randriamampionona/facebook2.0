import Image from "next/image";
import * as Icons from "../../icons/Icons";
import { AuthContext } from "../../../store/contexts/AuthContext";

const PostForm = ({ postType }) => {
	const { user: loggedInUser } = AuthContext();

	return (
		<section className="bg-semiDark p-3 rounded-md space-y-2 w-full">
			<div className="flex items-center space-x-3">
				<div>
					<Image
						src={loggedInUser.pictures.profile}
						alt={loggedInUser.username}
						width="40"
						height="40"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>

				<div className="flex-grow flex-shrink">
					<form className="flex items-center bg-lightDark text-textLight rounded-full w-full">
						<input
							type="search"
							placeholder={`What's on your mind, ${loggedInUser.username}`}
							className="inputReset w-full px-3 py-2"
						/>
					</form>
				</div>
			</div>

			<hr className="border-t-hoverDark" />

			<div className="flex items-center justify-between">
				{postType?.map((item) => (
					<div
						key={item.id}
						className={`flex-grow flex-shrink flex-wrap flex items-center justify-center gap-2 p-2 rounded-md cursor-pointer hover:bg-lightDark ${
							item.id == 3 ? "hidden sm:flex" : ""
						}`}>
						<span>
							<item.Icon />
						</span>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		</section>
	);
};

PostForm.defaultProps = {
	postType: [
		{
			id: 1,
			text: "Live video",
			Icon: Icons.LiveVideoIcon,
		},
		{
			id: 2,
			text: "Photo/video",
			Icon: Icons.PhotoVideoIcon,
		},
		{
			id: 3,
			text: "Feeling/activity",
			Icon: Icons.FeelingActivityIcon,
		},
	],
};

export default PostForm;
