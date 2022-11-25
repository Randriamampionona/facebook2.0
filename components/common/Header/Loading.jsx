import { motion } from "framer-motion";
import motionVariants from "./motionVariants";

const Loading = () => {
	return (
		<div className="relative w-full h-1 bg-lightDark">
			<motion.span
				variants={motionVariants.fillsUp}
				initial="initial"
				animate="animate"
				className="absolute top-0 left-0 bg-blueDark h-full w-1/4"
			/>
		</div>
	);
};

export default Loading;
