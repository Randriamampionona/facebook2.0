import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../../../store/contexts/AuthContext";

const CreateStory = () => {
	const { user } = AuthContext();

	return (
		<div className="relative min-w-[5.9375rem] h-[11.15rem] rounded-lg bg-lightDark overflow-hidden">
			<Image
				src={user.pictures.profile}
				alt={user.username}
				width="95"
				height="178"
				objectFit="cover"
			/>

			<div className="absolute bottom-0 w-full h-[2.8125rem] bg-[#242527] cursor-pointer">
				<div className="grid place-items-center absolute -top-4 left-1/2 -translate-x-1/2 rounded-full w-9 h-9 border-[3px] border-[#242527] bg-blueNormal text-textWhite">
					<span>
						<FaPlus />
					</span>
				</div>

				<p className="text-xs font-semibold text-center pt-[1.375rem]">
					Create story
				</p>
			</div>
		</div>
	);
};

export default CreateStory;
