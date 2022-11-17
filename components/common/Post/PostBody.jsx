/* eslint-disable @next/next/no-img-element */
import { FaPlay } from "react-icons/fa";

const PostBody = ({ post, postType }) => {
	return (
		<div className="relative bg-black">
			{postType === "text" && (
				<div
					className="flex items-center justify-center w-full h-48"
					style={{ background: post.content.bg }}>
					<p
						className="w-full max-w-[75%] text-center font-bold"
						style={{ color: post.content.color }}>
						{/* {post.description} */}
						<span
							dangerouslySetInnerHTML={{
								__html: post.description,
							}}
						/>
					</p>
				</div>
			)}

			{postType !== "text" && (
				<div className="grid justify-center">
					<img src={post.content} alt={post.description} loading="lazy" />
				</div>
			)}

			{postType === "video" && postType !== "text" && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center border-[3px] border-textWhite bg-black/40 p-5 rounded-full cursor-pointer">
					<span className="text-textWhite text-xl">
						<FaPlay />
					</span>
				</div>
			)}
		</div>
	);
};

export default PostBody;
