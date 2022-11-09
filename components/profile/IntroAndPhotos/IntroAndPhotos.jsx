import Intro from "./Intro";
import Photos from "./Photos";

const IntroAndPhotos = () => {
	return (
		<div className="flex flex-col items-start gap-y-4 w-full max-w-full lg:max-w-sm lg:sticky lg:top-[-19rem]">
			<Intro />
			<Photos />
		</div>
	);
};

export default IntroAndPhotos;
