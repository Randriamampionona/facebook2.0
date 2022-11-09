import Image from "next/image";

const Blurness = ({ img, alt }) => {
	return (
		<div className="topProfileGradient absolute inset-0 filter hidden blur-xl after:content-[''] after:z-10 after:absolute after:bottom-0 after:h-[42rem] after:w-full lg:block">
			<div className="relative w-full h-full">
				<Image src={img} alt={alt} layout="fill" />
			</div>
		</div>
	);
};

export default Blurness;
