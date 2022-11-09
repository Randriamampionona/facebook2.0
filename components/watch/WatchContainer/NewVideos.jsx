import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NewVideos = ({ newVideosData }) => {
	return (
		<div className="bg-semiDark p-4 space-y-3 rounded-md">
			<h1 className="text-xl text-textWhite font-bold">
				New Videos for You 3
			</h1>

			<div className="flex items-center w-full overflow-x-hidden">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
					}}
					className="!mx-0">
					{newVideosData?.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="flex items-center gap-x-3 w-full">
								<div className="grid place-items-center">
									<Image
										src={item.profileImg}
										alt=""
										width={60}
										height={60}
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
								<div>
									<p className="max-w-full text-textLight leading-[1.2] md:max-w-[85%]">
										{item.title}
									</p>
									<p className="flex items-center space-x-[0.4rem] text-blueDark text-xs">
										<span className="w-2 h-2 rounded-full mt-[2px] bg-blueDark" />
										<span>{item.date}</span>
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

NewVideos.defaultProps = {
	newVideosData: [
		{
			id: 1,
			profileImg: "/assets/user-profile-img/realTV.png",
			title: "Real TV Madagasikara has gone live.",
			date: "18 hour ago",
		},
		{
			id: 2,
			profileImg: "/assets/user-profile-img/info-france-2.png",
			title: "New videos from Info France 2 and others.",
			date: "about an hour ago",
		},
		{
			id: 3,
			profileImg: "/assets/user-profile-img/tataki.png",
			title: "New videos from Tataki and others.",
			date: "3 days ago",
		},
	],
};

export default NewVideos;
