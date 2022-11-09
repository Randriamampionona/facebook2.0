import Image from "next/image";
import formatNumber from "./../../../utils/formatNumber";
import { FaPlay, FaCog, FaVolumeMute, FaEye } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LiveSlides = ({ liveSlidesList }) => {
	return (
		<div className="grid w-full h-[33.5rem] bg-lightDark sm:h-[29rem] xl:h-[22rem]">
			<Swiper
				slidesPerView={1}
				spaceBetween={5}
				className="!mx-0"
				breakpoints={{
					1280: {
						slidesPerView: 1.7,
						spaceBetween: 5,
					},
				}}>
				{liveSlidesList?.map((live) => (
					<SwiperSlide key={live.id}>
						<div className="relative grid items-center h-full xl:p-2">
							{/* video */}
							<div className="z-10 relative w-full h-[16.5rem] bg-black sm:h-[calc(100%-3rem)] lg:h-[calc(100%-1rem)] xl:h-full xl:rounded-md xl:overflow-hidden">
								{/* <Image
									src={live.content}
									alt={live.desc}
									objectFit="cover"
									layout="fill"
									className="filter brightness-50"
								/> */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center border-[3px] border-textWhite bg-black/40 p-5 rounded-full cursor-pointer">
									<span className="text-textWhite text-xl">
										<FaPlay />
									</span>
								</div>
							</div>

							{/* blurness */}
							<div className="absolute inset-0 filter blur-xl">
								<div className="relative w-full h-full">
									<Image
										src={live.content}
										alt={live.desc}
										layout="fill"
									/>
								</div>
							</div>

							{/* profile and stuff */}
							<div className="z-10 absolute bottom-0 flex items-center justify-between w-full p-3">
								<div className="flex items-center space-x-2 w-full cursor-pointer">
									<Image
										src={live.owner.profile}
										alt={live.owner.name}
										width="62"
										height="62"
										objectFit="cover"
										className="rounded-full bg-lightDark"
									/>
									<div className="w-full">
										<h1 className="font-semibold">{live.desc}</h1>
										<p className="text-xs">
											{live.owner.name}&nbsp;•&nbsp;{live.from}
										</p>
									</div>
								</div>

								<div className="flex items-center justify-end gap-2">
									<span className="p-2 rounded-full text-xl hover:bg-hoverDark">
										<FiVideo />
									</span>
									<span className="p-2 rounded-full text-xl hover:bg-hoverDark">
										<FaCog />
									</span>
									<span className="p-2 rounded-full text-xl hover:bg-hoverDark">
										<FaVolumeMute />
									</span>
								</div>
							</div>

							{/* count */}
							<div className="z-10 absolute top-0 left-0 flex items-center gap-2 p-3 text-textWhite">
								<span className="p-1 text-[12px] font-semibold leading-none rounded bg-liveColor uppercase cursor-default">
									Live
								</span>
								<span className="flex items-center gap-1 p-1 text-[12px] leading-none rounded bg-[#03060d] uppercase cursor-default">
									<FaEye />
									<small>{formatNumber?.(live.views)}</small>
								</span>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default LiveSlides;
