import Image from "next/image";
import { useCallback } from "react";
import { LocalContext } from "../../../store/contexts/LocalContext";

const Photos = () => {
	const {
		DATA: { posts },
	} = LocalContext();

	const photoHandler = useCallback(() => {
		return posts
			?.filter((p) => p.post.type != "video" && p.post.type != "text")
			?.slice(0, 3);
	}, [posts]);

	return (
		<div className="space-y-1 p-4 rounded-md w-full bg-semiDark">
			{/* heading */}
			<div className="flex items-center justify-between w-full mb-4">
				<h2 className="text-xl font-systemUI font-bold">Photos</h2>
				<span className="text-textBlue cursor-pointer">See all photos</span>
			</div>

			{/* photos */}
			<div className="grid grid-cols-3 gap-1 w-full rounded-md overflow-hidden">
				{photoHandler()?.map((post) => (
					<div
						key={post.post_ID}
						className="relative w-full h-[8.5rem] bg-lightDark">
						<Image
							src={post.post.content}
							alt={post.post.description}
							objectFit="cover"
							layout="fill"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Photos;
