import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import formatNumber from "./../../../utils/formatNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Suggestion = ({ suggestGroupList }) => {
	return (
		<div className="w-full max-w-full h-auto bg-semiDark p-4 rounded-md xl:max-w-[20rem] xl:sticky xl:top-[calc(3.1875rem+1rem)]">
			<div className="flex justify-between">
				<div>
					<h1 className="text-sm font-semibold">Suggested for you</h1>
					<p className="text-textLight text-xs">
						Groups you might br interested in.
					</p>
				</div>

				<Link href="/">
					<a className="text-[0.85rem] text-textBlue">See more</a>
				</Link>
			</div>

			<div className="m-4">
				<Swiper
					className="!h-auto"
					slidesPerView={1}
					spaceBetween={5}
					breakpoints={{
						// sm
						640: {
							slidesPerView: 1.5,
							spaceBetween: 15,
						},
						// md
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						// lg
						1024: {
							slidesPerView: 2.3,
							spaceBetween: 15,
						},
						// xl
						1280: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
					}}>
					{suggestGroupList?.map((group) => (
						<SwiperSlide key={group.id}>
							<div className="relative rounded-md border border-hoverDark overflow-hidden">
								<div className="flex items-center w-full h-auto bg-lightDark">
									<Image
										src={group.img}
										alt={group.name}
										width={450}
										height={220}
										objectFit="cover"
									/>
								</div>

								<div className="p-4">
									<div className="mb-6">
										<h1 className="text-sm font-semibold">
											{group.name}
										</h1>
										<p className="text-textLight text-xs space-x-1">
											<span>
												{formatNumber?.(group.member)} members •
											</span>
											<span>{group.dynamic}</span>
										</p>
									</div>
									<button className="w-full h-[2.125rem] bg-blueNormal text-xs font-semibold rounded">
										<span>Join group</span>
									</button>
								</div>

								<span className="absolute top-2 right-2 p-2 bg-black/40 rounded-full cursor-pointer text-textWhite">
									<FaTimes />
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

Suggestion.defaultProps = {
	suggestGroupList: [
		{
			id: "df5d8fdx5",
			name: "Only Girls 🔥",
			img: "/assets/your-shortcuts-img/Only Girls 🔥.png",
			member: 5848475,
			dynamic: "15+ post a day",
		},
		{
			id: "gxd8gxdv5",
			name: "Gasy Dev JavaScript",
			img: "/assets/your-shortcuts-img/Gasy Dev JavaScript.png",
			member: 7945,
			dynamic: "5+ post a day",
		},
		{
			id: "cfgheg9s",
			name: "HTML, CSS, JavaScript, PHP.png",
			img: "/assets/your-shortcuts-img/HTML, CSS, JavaScript, PHP.png",
			member: 347945,
			dynamic: "10+ post a week",
		},
	],
};

export default Suggestion;
