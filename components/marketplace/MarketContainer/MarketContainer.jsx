import Header from "./Header";
import Product from "./Product";
import { FiMoreHorizontal } from "react-icons/fi";

const MarketContainer = ({ marketList }) => {
	return (
		<main className="relative w-full lg:max-w-[calc(100%-22.625rem)]">
			{/* hearder */}
			<Header />

			<div className="w-full px-3 divide-y-[1px] divide-hoverDark lg:px-8">
				{Object.values(marketList).map((market) => (
					<div key={market.title} className="w-full pb-8">
						{/* heading */}
						<div className="flex items-center justify-between my-4">
							<h1 className="text-textWhite text-lg font-semibold">
								{market.title}
							</h1>
							<div className="flex items-center gap-x-4">
								<span className="text-[0.85rem] text-textBlue cursor-pointer">
									See All
								</span>

								<span className="text-textLight p-2 rounded-full hover:bg-lightDark cursor-pointer">
									<FiMoreHorizontal />
								</span>
							</div>
						</div>

						{/* products */}
						<div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
							{market?.data?.map((product) => (
								<Product key={product.id} product={product} />
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

MarketContainer.defaultProps = {
	marketList: {
		todaysPicks: {
			title: "Today's picks",
			data: [
				{
					id: "fg5se8gdv",
					name: "✨CASQUE FILAIRE DM-4600 --MORA BEE!💵",
					price: 25000,
					location: "Antananarivo, Madagascar",
					img: "/assets/market-img/✨CASQUE FILAIRE DM-4600 --MORA BEE!💵.png",
				},
				{
					id: "fz8qzfse5v",
					name: "4g pocket wifi airtel",
					price: 150000,
					location: "Antananarivo, Madagascar",
					img: "/assets/market-img/4g pocket wifi airtel.png",
				},
				{
					id: "cb5fx8b1",
					name: "Fauteuil de bureau",
					price: 60000,
					location: "Antananarivo, Madagascar",
					img: "/assets/market-img/Fauteuil de bureau.png",
				},
			],
		},

		electronics: {
			title: "Electronics",
			data: [
				{
					id: "2dv5d1vxd5v",
					name: "ASUS TUF GAMING A15",
					price: 640000,
					location: "Antananarivo",
					img: "/assets/market-img/ASUS TUF GAMING A15.png",
				},
				{
					id: "fg54e7d1",
					name: "Ordinateur",
					price: 562000,
					location: "Antananarivo",
					img: "/assets/market-img/Ordinateur.png",
				},
				{
					id: "wd2z5dvc",
					name: "Xiaomi Mi 12 Pro Europe🇫🇷",
					price: 1502000,
					location: "Antananarivo",
					img: "/assets/market-img/Xiaomi Mi 12 Pro Europe🇫🇷.png",
				},
				{
					id: "dge4dxv",
					name: "Poco x4 pro 5G",
					price: 752000,
					location: "Antananarivo",
					img: "/assets/market-img/Poco x4 pro 5G.png",
				},
			],
		},
	},
};

export default MarketContainer;
