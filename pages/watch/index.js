import { LeftAside, WatchContainer } from "../../components/watch";
import verifyAuth from "../../utils/verifyAuth";

const WatchPage = () => {
	return (
		<section className="mySection">
			<LeftAside />
			<WatchContainer />
		</section>
	);
};

export default WatchPage;

export const getServerSideProps = async ({ req }) => {
	return await verifyAuth?.(req);
};
