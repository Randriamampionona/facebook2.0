import { GamingContainer, LeftAside } from "../../components/gaming";
import verifyAuth from "../../utils/verifyAuth";

const GaminPage = () => {
	return (
		<section className="mySection">
			<LeftAside />
			<GamingContainer />
		</section>
	);
};

export default GaminPage;

export const getServerSideProps = async ({ req }) => {
	return await verifyAuth?.(req);
};
