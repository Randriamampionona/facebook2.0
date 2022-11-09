import Image from "next/image";
import Link from "next/link";
import { RiVideoAddFill } from "react-icons/ri";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

const RightAside = ({ sponsoredData, friendReqData, contactsData }) => {
	return (
		<aside
			id="asideScrollbar"
			className="sticky top-[3.125rem] w-full px-2 py-4 space-y-2 h-[calc(100vh-3.125rem)] hidden lg:block lg:max-w-[19.5rem] xl:max-w-[18.90625rem]">
			<div>
				<div className="group flex items-center justify-between w-full pb-3">
					<p className="text-[0.85rem] font-semibold text-textLight">
						Sponsored
					</p>
				</div>

				{sponsoredData?.map((menu) => (
					<div
						key={menu.slug}
						className="grid grid-cols-[7rem,1fr] items-center gap-x-3 mb-2">
						<div>
							<Image
								src={menu.img}
								alt={menu.title}
								width={131}
								height={131}
								objectFit="cover"
								className="rounded-md"
							/>
						</div>
						<div>
							<h1 className="text-[0.85rem] font-semibold">
								{menu.title}
							</h1>
							<span className="text-textLight text-xs">
								{menu.website}
							</span>
						</div>
					</div>
				))}
			</div>

			<hr className="border-t-hoverDark ml-2" />

			<div>
				<div className="group flex items-center justify-between w-full px-2 pb-3">
					<p className="text-[0.85rem] font-semibold text-textLight">
						Friend requests
					</p>
					<Link href="/">
						<a className="text-[0.85rem] text-textBlue">See all</a>
					</Link>
				</div>

				{friendReqData?.map((req) => (
					<div key={req.id} className="flex gap-x-3 mb-4">
						<div>
							<Image
								src={req.profileImg}
								alt={req.name}
								width="60"
								height="60"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<div className="space-y-2">
							<Link href={`/${req.id}`}>
								<a className="flex items-center justify-between text-xs font-semibold w-full cursor-default">
									{req.name}
									<span className="text-textLight font-medium">
										4d
									</span>
								</a>
							</Link>

							<div className="flex items-center space-x-1">
								<div className="flex">
									{req.mutalFriends.img.map((img, i) => (
										<Image
											key={img}
											src={img}
											alt={img}
											width="16"
											height="16"
											objectFit="cover"
											className={`rounded-full border-2 border-dark ${
												i == 0 ? "z-10" : "!-ml-[0.3rem]"
											}`}
										/>
									))}
								</div>
								<span className="text-textLight text-xs">
									{req.mutalFriends.text}
								</span>
							</div>

							<div className="flex items-center gap-2">
								<button className="px-8 py-2 rounded-md text-textWhite text-xs font-semibold bg-blueNormal">
									Confirm
								</button>
								<button className="px-8 py-2 rounded-md text-textWhite text-xs font-semibold bg-lightDark">
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<hr className="border-t-hoverDark ml-2" />

			<div>
				<div className="group flex items-center justify-between w-full px-2 pb-3">
					<p className="text-[0.85rem] font-semibold text-textLight">
						Contacts
					</p>
					<div className="flex items-center justify-end space-x-4 text-textLight">
						<span className="cursor-pointer">
							<RiVideoAddFill />
						</span>
						<span className="cursor-pointer">
							<FiSearch />
						</span>
						<span className="cursor-pointer">
							<FiMoreHorizontal />
						</span>
					</div>
				</div>

				<div className="flex flex-col space-y-1">
					{contactsData?.map((contact) => (
						<Link key={contact.id} href="/profile">
							<div className="flex items-center space-x-2 w-full cursor-pointer py-1 px-2 rounded-md hover:bg-hoverDark">
								<div className="relative grid place-items-center">
									<Image
										src={contact.profile}
										alt={contact.name}
										width="36"
										height="36"
										objectFit="cover"
										className="rounded-full"
									/>
									<span className="absolute bottom-[-2px] right-0 h-3 w-3 rounded-full bg-activeLog border-2 border-dark" />
								</div>
								<a className="text-xs font-semibold cursor-default">
									{contact.name}
								</a>
							</div>
						</Link>
					))}
				</div>
			</div>
		</aside>
	);
};

RightAside.defaultProps = {
	sponsoredData: [
		{
			slug: "/tranokala.pro",
			title: "Hébergement site web Professionel | Tranokala Madagascar",
			website: "tranokala.pro",
			img: "/assets/sponsored-img/sponsored1.jfif",
		},
		{
			slug: "/estiramientoshiperbolicos.com",
			title: "Récupérer la somme sur votre compte",
			website: "estiramientoshiperbolicos.com",
			img: "/assets/sponsored-img/sponsored2.jfif",
		},
	],

	friendReqData: [
		{
			id: "1",
			name: "Stecy Ashley",
			profileImg: "/assets/user-profile-img/Stecy Ashley.png",
			mutalFriends: {
				img: [
					"/assets/user-profile-img/Manoa Razafi.png",
					"/assets/user-profile-img/Lutécianne RM.png",
				],
				text: "75 mutal friends",
			},
		},
	],

	contactsData: [
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
			profile: "/assets/user-profile-img/Mãc Jācky.png",
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
			profile: "/assets/user-profile-img/Lutécianne RM.png",
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
			profile: "/assets/user-profile-img/Rōsåh La Blanche.png",
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

export default RightAside;
