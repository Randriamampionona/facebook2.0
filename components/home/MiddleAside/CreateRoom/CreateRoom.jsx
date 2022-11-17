import Image from "next/image";
import { RiVideoAddFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CreateRoom = ({ roomsData }) => {
	return (
		<section className="flex items-center justify-between gap-x-4 bg-semiDark p-2 rounded-md">
			<button className="flex-shrink-0 flex items-center justify-center space-x-2 bg-transparent rounded-full px-3 py-2 w-full max-w-max border border-lightDark">
				<span className="text-[1.125rem] text-[#bd45af]">
					<RiVideoAddFill />
				</span>
				<span className="text-textBlue text-sm">Create room</span>
			</button>

			<div className="flex-shrink max-w-max overflow-hidden">
				<Swiper slidesPerView={"auto"} spaceBetween={15}>
					{roomsData?.map((contact) => (
						<SwiperSlide key={contact.id} className="!w-auto">
							<div className="relative grid place-items-center">
								<Image
									src={contact.profile}
									alt={contact.name}
									width="40"
									height="40"
									objectFit="cover"
									className="rounded-full"
								/>
								<span className="absolute bottom-[-2px] right-0 h-3 w-3 rounded-full bg-activeLog border-2 border-dark" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

CreateRoom.defaultProps = {
	roomsData: [
		{
			id: 1,
			name: "Henintsoa Jonathan",
			profile: "/assets/user-profile-img/Henintsoa Jonathan.png",
		},
		{
			id: 2,
			name: "Raherinantenaina Fayyaz Hassanaly",
			profile:
				"/assets/user-profile-img/Raherinantenaina Fayyaz Hassanaly.png",
		},
		{
			id: 3,
			name: "Thony Andria",
			profile: "/assets/user-profile-img/Thony Andria.png",
		},
		{
			id: 4,
			name: "Hari Mahefadownload",
			profile: "/assets/user-profile-img/Hari Mahefadownload.png",
		},
		{
			id: 5,
			name: "Tvhrz Tom",
			profile: "/assets/user-profile-img/Tvhrz Tom.png",
		},
		{
			id: 6,
			name: "Tantely Fanomezaniarivo",
			profile: "/assets/user-profile-img/Tantely Fanomezaniarivo.png",
		},
		{
			id: 7,
			name: "Andria Aliniaina",
			profile: "/assets/user-profile-img/Andria Aliniaina.png",
		},
		{
			id: 8,
			name: "Elioh Rahajanirina",
			profile: "/assets/user-profile-img/Elioh Rahajanirina.png",
		},
		{
			id: 9,
			name: "Annick Shinary",
			profile: "/assets/user-profile-img/Annick Shinary.png",
		},
		{
			id: 10,
			name: "Mãc Jācky",
			profile: "/assets/user-profile-img/Mac-Jacky.png",
		},
		{
			id: 11,
			name: "Jøsé",
			profile: "/assets/user-profile-img/Jøsé.png",
		},
		{
			id: 12,
			name: "Tsiory Ralison",
			profile: "/assets/user-profile-img/Tsiory Ralison.png",
		},
		{
			id: 13,
			name: "Lutécianne RM",
			profile: "/assets/user-profile-img/Lutecianne-RM.png",
		},
		{
			id: 14,
			name: "Swae Todoroki",
			profile: "/assets/user-profile-img/Swae Todoroki.png",
		},
		{
			id: 15,
			name: "Fy Hyung",
			profile: "/assets/user-profile-img/Fy Hyung.png",
		},
		{
			id: 16,
			name: "Rōsåh La Blanche",
			profile: "/assets/user-profile-img/Rosah-La-Blanche.png",
		},
		{
			id: 17,
			name: "Manoa Razafi",
			profile: "/assets/user-profile-img/Manoa Razafi.png",
		},
		{
			id: 18,
			name: "Bonze Athelstan",
			profile: "/assets/user-profile-img/Bonze Athelstan.png",
		},
		{
			id: 19,
			name: "SHIN YU",
			profile: "/assets/user-profile-img/SHIN YU.png",
		},
		{
			id: 20,
			name: "Stecy Ashley",
			profile: "/assets/user-profile-img/Stecy Ashley.png",
		},
	],
};

export default CreateRoom;
