import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useState } from "react";
import { FaGlobeAmericas, FaUserFriends, FaUserLock } from "react-icons/fa";
import { FiEdit, FiDelete, FiDownload, FiMoreHorizontal } from "react-icons/fi";
import { ImSpinner7 } from "react-icons/im";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { LocalContext } from "../../../store/contexts/LocalContext";
import formatTime from "./../../../utils/formatTime";

const PostHead = ({
	post_ID,
	owner,
	post,
	w,
	h,
	ownerType,
	openMenu,
	setOpenMenu,
}) => {
	const { toogleUploadModal } = GlobalContext();
	const { deletePostFun } = LocalContext();
	const [deleteLoading, setDeleteLoading] = useState(false);
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

	const toogleMenuPostHandler = () => {
		setOpenMenu((prev) => !prev);
	};

	const openEditModal = () => {
		toogleUploadModal?.({ type: post.type, post_ID, ...post });
	};

	const deleteHandler = async () => {
		if (confirm("Delete ?"))
			await deletePostFun?.({ post_ID }, setDeleteLoading);
	};

	return (
		<div className="relative flex flex-col gap-y-1 p-3">
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

						{ownerType === "group" && (
							<div className="grid absolute -bottom-1 -right-1 border-2 border-semiDark rounded-full overflow-hidden">
								<Image
									src={owner.profile}
									alt={owner.name}
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
								{ownerType === "group" && "Group name goes here • "}
								{formatTime?.(post.date)}&nbsp;•&nbsp;
							</small>
							<small>
								{confidentialityHandler(post.confidentiality)}
							</small>
						</span>
					</div>
				</div>

				{/* moreHorizontal icon */}
				<div onClick={toogleMenuPostHandler}>
					<span className="grid place-items-center text-textLight text-xl cursor-pointer p-[0.45rem] rounded-full hover:bg-hoverDark active:bg-hoverDark">
						<FiMoreHorizontal />
					</span>
				</div>
			</div>

			{/* description */}
			{post.type != "text" && (
				<div>
					<p className="text-textWhite text-sm leading-tight">
						{/* {post.description} */}
						<span
							dangerouslySetInnerHTML={{
								__html: post.description,
							}}
						/>
					</p>
				</div>
			)}

			{/* menu post */}
			{openMenu && (
				<div
					className="z-10 absolute top-14 right-4 min-w-28 h-auto bg-dark rounded-md shadow-md shadow-dark select-none overflow-hidden"
					onMouseLeave={(e) => setOpenMenu(false)}>
					<ul className="w-full">
						<li className="flex items-center gap-x-2 w-full px-4 py-[0.4375rem] hover:bg-lightDark active:bg-hoverDark cursor-default">
							<span>
								<FiDownload />
							</span>
							<span>Save</span>
						</li>

						{owner.isMine && (
							<Fragment>
								<li
									className="flex items-center gap-x-2 w-full px-4 py-[0.4375rem] hover:bg-lightDark active:bg-hoverDark cursor-default"
									onClick={openEditModal}>
									<span>
										<FiEdit />
									</span>
									<span>Edit</span>
								</li>

								<li
									className="flex items-center gap-x-2 w-full px-4 py-[0.4375rem] hover:bg-lightDark active:bg-hoverDark cursor-default"
									onClick={deleteHandler}>
									<span>
										{deleteLoading ? (
											<ImSpinner7 className="animate-spin" />
										) : (
											<FiDelete />
										)}
									</span>
									<span>
										{deleteLoading ? "Deleting..." : "Delete"}
									</span>
								</li>
							</Fragment>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default PostHead;
