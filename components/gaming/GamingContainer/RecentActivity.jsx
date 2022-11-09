import { Swiper, SwiperSlide } from "swiper/react";
import { FaEye } from "react-icons/fa";
import formatNumber from "../../../utils/formatNumber";
import Image from "next/image";

const RecentActivity = ({ recentActivityList }) => {
	return (
		<div className="w-full p-4 bg-semiDark rounded-md space-y-4">
			<h1>Recent activity</h1>

			<div>
				<Swiper slidesPerView={"auto"} spaceBetween={8} className="!mx-0">
					{recentActivityList?.map((activity) => (
						<SwiperSlide key={activity.id} className="!w-auto">
							<div className="bottomGradient relative w-36 h-36 rounded-md overflow-hidden after:content-[''] after:z-10 after:absolute after:bottom-0 after:h-20 after:w-full">
								{/* image */}
								<div className="w-full h-full">
									<Image
										src={activity.profile}
										alt={activity.name}
										objectFit="cover"
										layout="fill"
										className="bg-lightDark"
									/>
								</div>

								{/* live stuff */}
								{activity?.isOnLive && (
									<div className="absolute top-3 left-3 flex items-center gap-2 text-textWhite">
										<span className="p-1 text-xs font-semibold leading-none rounded bg-liveColor uppercase cursor-default">
											Live
										</span>
										<span className="flex items-center gap-1 p-1 text-[0.8125rem] leading-none rounded bg-[#03060da9] uppercase cursor-default">
											<FaEye />
											<small>
												{formatNumber?.(activity?.isOnLive.views)}
											</small>
										</span>
									</div>
								)}

								{/* name */}
								<p className="z-20 absolute bottom-3 left-3 text-[0.8125rem] font-semibold cursor-default">
									{activity.name}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default RecentActivity;
