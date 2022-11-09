import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaGlobeAmericas, FaUserFriends, FaUserLock } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import formatTime from "./../../../utils/formatTime";

const PostHead = ({ owner, post, w, h, ownerType }) => {
	const { push } = useRouter();
	const confidentialityHandler = useCallback((key) => {
		if (key == 0) return <FaUserLock />;
		if (key == 1) return <FaUserFriends />;
		if (key == 2) return <FaGlobeAmericas />;
	}, []);

	const url = owner.isMine
		? "/profile/me?p=posts"
		: `/profile/${owner.user_ID}?p=posts`;

	const navigate = () => push(url);

	return (
		<div className="flex flex-col gap-y-1 p-3">
			<div className="flex items-center justify-between">
				{/* profile */}
				<div className="flex items-start gap-2">
					<div className="relative grid place-items-center">
						<Image
							src={owner.profile}
							alt={owner.username}
							objectFit="cover"
							width={w ? w : "40"}
							height={h ? h : "40"}
							className={`bg-lightDark hover:filter hover:brightness-90 active:scale-90 ${
								ownerType === "group" ? "rounded-md" : "rounded-full"
							}`}
							onClick={navigate}
						/>

						{ownerType === "group" && owner.poster && (
							<div className="grid absolute -bottom-1 -right-1 border-2 border-semiDark rounded-full overflow-hidden">
								<Image
									src={owner.poster.profile}
									alt={owner.poster.name}
									width="20"
									height="20"
									objectFit="cover"
									className="bg-lightDark"
									onClick={navigate}
								/>
							</div>
						)}
					</div>

					<div className="grid">
						<Link href={url}>
							<a className="font-semibold text-[0.8125rem]">
								{owner.username}
							</a>
						</Link>

						<span className="flex items-center text-sm text-textLight font-light">
							<small>
								{ownerType === "group" &&
									owner.poster &&
									owner.poster.name + " • "}
								{formatTime?.(post.date)}&nbsp;•&nbsp;
							</small>
							<small>
								{confidentialityHandler(post.confidentiality)}
							</small>
						</span>
					</div>
				</div>

				{/* icon */}
				<div>
					<span className="grid place-items-center text-textLight text-xl cursor-pointer p-[0.45rem] rounded-full hover:bg-hoverDark">
						<FiMoreHorizontal />
					</span>
				</div>
			</div>

			{/* description */}
			{post.type != "text" && (
				<div>
					<p className="text-textWhite text-sm leading-tight">
						{post.description}
					</p>
				</div>
			)}
		</div>
	);
};

export default PostHead;
