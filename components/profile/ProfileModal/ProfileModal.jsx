import { useState } from "react";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import Bio from "./Bio";
import ModalHeader from "./ModalHeader";
import Buttons from "./Buttons";
import Details from "./Details";
import Hobbies from "./Hobbies";
import { LocalContext } from "../../../store/contexts/LocalContext";

const ProfileModal = ({ form }) => {
	const { toogleProfileModal } = GlobalContext();
	const {
		DATA: { infos },
		editFunc,
	} = LocalContext();

	const [values, setValues] = useState({
		isLoading: false,
		bio: infos.bio,
		city: infos.city,
		country: infos.country,
		loveCituation: infos.loveCituation,
		hobbies: infos.hobbies,
	});

	const changeValHandler = (key, val) => {
		setValues((prev) => ({
			...prev,
			[key]: val,
		}));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		editFunc?.({ values }, setValues);
	};

	return (
		<section
			className="z-[75] fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/75"
			onClick={(e) => toogleProfileModal(false)}>
			<form
				className="w-full max-w-[25rem] rounded-md bg-semiDark shadow-md"
				onClick={(e) => e.stopPropagation()}
				onSubmit={submitHandler}>
				{/* header */}
				<ModalHeader />

				{/* bio */}
				{form === "bio" && <Bio values={values} setValues={setValues} />}

				{/* details */}
				{form === "details" && (
					<Details values={values} changeValHandler={changeValHandler} />
				)}

				{/* Hobbies */}
				{form === "hobbies" && (
					<Hobbies values={values} changeValHandler={changeValHandler} />
				)}

				{/* btns */}
				<Buttons isLoading={values.isLoading} />
			</form>
		</section>
	);
};

export default ProfileModal;
