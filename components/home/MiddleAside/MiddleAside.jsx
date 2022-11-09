import React from "react";
import CreateRoom from "./CreateRoom/CreateRoom";
import FeedsList from "./FeedsList/FeedsList";
import PostForm from "./../../common/Post/PostForm";
import Story from "./Story/Story";

const MiddleAside = () => {
	return (
		// <aside className="flex-shrink flex-grow w-[44.125rem] space-y-6 p-2 overflow-x-hidden sm:px-10 md:px-12 lg:px-24 sm:py-4 md:flex-grow-0">
		<aside className="max-w-full w-full mx-auto p-2 space-y-5 sm:max-w-[calc(100%-6rem)] md:max-w-[calc(100%-12rem)] lg:py-6 lg:max-w-[calc(100%-30rem)] xl:max-w-[calc(100%-37.8125rem)] xl:px-20 2xl:px-24">
			<Story />

			<PostForm />

			<CreateRoom />

			<FeedsList />
		</aside>
	);
};

export default MiddleAside;
