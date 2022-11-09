/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaCamera } from "react-icons/fa";

const CoverPicBlock = ({ img, alt, isMine, setOffsetHeight }) => {
	const ref = useRef(null);

	useEffect(() => {
		setOffsetHeight((prev) => ({
			...prev,
			oh1: ref?.current?.offsetHeight,
		}));
	}, [ref]);

	return (
		<div
			ref={ref}
			className="bottomGradient relative w-full max-w-full mx-auto h-[12rem] bg-lightDark after:content-[''] after:z-10 after:absolute after:bottom-0 after:h-20 after:w-full overflow-hidden sm:h-[14rem] md:h-[18rem] lg:h-[22rem] lg:max-w-[80%] lg:rounded-b-md xl:h-[21rem] xl:max-w-[70%]">
			<Image
				src={img}
				alt={alt}
				objectFit="cover"
				layout="fill"
				className="z-10"
			/>

			{isMine && (
				<button className="z-50 absolute bottom-4 right-6 flex items-center justify-center gap-x-2 px-4 py-[0.7rem] bg-[#fdfdfd] text-semiDark rounded-md">
					<span className="text-base">
						<FaCamera />
					</span>
					<span className="text-xs font-semibold hidden md:block">
						Edit cover photo
					</span>
				</button>
			)}
		</div>
	);
};

export default CoverPicBlock;
