import Image from "next/image";
import CreateStory from "./CreateStory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Story = ({ storyData }) => {
	return (
		<section className="flex items-center overflow-hidden space-x-[0.4rem]">
			<Swiper slidesPerView={"auto"} spaceBetween={8} className="!mx-0">
				<SwiperSlide className="!w-auto">
					<CreateStory />
				</SwiperSlide>

				{storyData?.flatMap((story) => (
					<SwiperSlide key={story.id} className="!w-auto">
						<div
							// key={story.id}
							className="group relative min-w-[5.9375rem] h-[11.15rem] rounded-lg bg-lightDark overflow-hidden cursor-pointer">
							<Image
								src={story.storyImg}
								alt={story.name}
								width="95"
								height="178"
								objectFit="cover"
								className="scale-125 transition-all group-hover:scale-150"
							/>

							<div className="absolute inset-0 bg-black/25">
								<div className="absolute top-2 left-2 rounded-full w-9 h-9 border-[3px] border-blueNormal">
									<Image
										src={story.profileImg}
										alt={story.name}
										width="40"
										height="40"
										objectFit="cover"
										className="rounded-full"
									/>
								</div>

								<p className="absolute bottom-2 left-2 text-xs font-semibold cursor-default">
									{story.name}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

Story.defaultProps = {
	storyData: [
		{
			id: 1,
			profileImg: "/assets/user-profile-img/SHIN YU.png",
			name: "SHIN YU",
			storyImg: "/assets/story-img/FB_IMG_16189447574863610.jpg",
		},
		{
			id: 2,
			profileImg: "/assets/user-profile-img/Lutécianne RM.png",
			name: "Lutécianne RM",
			storyImg: "/assets/story-img/cat.jpg",
		},
		{
			id: 3,
			profileImg: "/assets/user-profile-img/Fy Hyung.png",
			name: "Fy Hyung",
			storyImg: "/assets/story-img/orange eyes.png",
		},
		{
			id: 4,
			profileImg: "/assets/user-profile-img/Annick Shinary.png",
			name: "Annick Shinary",
			storyImg: "/assets/story-img/pexels-cottonbro-6864673.jpg",
		},
		{
			id: 5,
			profileImg: "/assets/user-profile-img/Andria Aliniaina.png",
			name: "Andria Aliniaina",
			storyImg: "/assets/story-img/pexels-muaz-aj-4017827.jpg",
		},
		{
			id: 6,
			profileImg: "/assets/user-profile-img/Stecy Ashley.png",
			name: "Stecy Ashley",
			storyImg: "/assets/story-img/pexels-eliza-lensa-3278814.jpg",
		},
		{
			id: 7,
			profileImg: "/assets/user-profile-img/Manoa Razafi.png",
			name: "Manoa Razafi",
			storyImg: "/assets/story-img/pexels-ihsan-aditya-1056252.jpg",
		},
		{
			id: 8,
			profileImg: "/assets/user-profile-img/Rōsåh La Blanche.png",
			name: "Rōsåh La Blanche",
			storyImg:
				"/assets/story-img/pexels-katarzyna-modrzejewska-1314550.jpg",
		},
		{
			id: 9,
			profileImg: "/assets/user-profile-img/Bonze Athelstan.png",
			name: "Bonze Athelstan",
			storyImg: "/assets/story-img/te amo.png",
		},
	],
};

export default Story;
