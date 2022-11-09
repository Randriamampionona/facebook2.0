import { LeftAside, MarketContainer } from "../../components/marketplace";
import verifyAuth from "../../utils/verifyAuth";

const MarketplacePage = () => {
	return (
		<section className="mySection">
			<LeftAside />
			<MarketContainer />
		</section>
	);
};

export default MarketplacePage;

export const getServerSideProps = async ({ req }) => {
	return await verifyAuth?.(req);
};
