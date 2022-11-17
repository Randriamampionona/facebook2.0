import { useState } from "react";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import ConfidentialityBlock from "./ConfidentialityBlock";
import MediaInput from "./MediaInput";
import ModalHeader from "./ModalHeader";
import SubmitBtn from "./SubmitBtn";
import TextInput from "./TextInput";
import { LocalContext } from "../../../store/contexts/LocalContext";

const initStates = {
	content: null,
	confidentiality: 2,
	description: "",
	isLoading: false,
};

const UploadModal = () => {
	const {
		uploadModale: { type, ...rest },
	} = GlobalContext();
	const { uploadPostFun, editPostFun } = LocalContext();

	const [values, setValues] = useState(
		rest.post_ID ? { ...initStates, ...rest } : initStates
	);

	const submitHandler = async (e) => {
		e.preventDefault();

		values.content ||=
			type === "text"
				? {
						bg: "#01050a",
						color: "#e4e6eb",
				  }
				: "/assets/feed-img/default.png";

		const uploadData = {
			post: {
				type,
				content: values.content,
			},
			confidentiality: values.confidentiality,
			description: values.description,
		};

		const editedData = {
			post_ID: rest.post_ID,
			post: {
				type,
				content: values.content,
			},
			confidentiality: values.confidentiality,
			description: values.description,
		};

		rest?.post_ID
			? await editPostFun?.(editedData, setValues)
			: await uploadPostFun?.(uploadData, setValues);
	};

	return (
		<section className="z-[75] fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/75">
			<form
				className="relative w-full max-w-[25rem] rounded-md bg-semiDark shadow-md"
				onSubmit={submitHandler}>
				<ModalHeader isEdit={!!rest?.post_ID} />

				<ConfidentialityBlock values={values} setValues={setValues} />
				{type === "text" && (
					<TextInput values={values} setValues={setValues} />
				)}

				{(type === "photo" || type === "video") && (
					<MediaInput values={values} setValues={setValues} />
				)}
				<SubmitBtn
					btnText={rest?.post_ID ? "Save" : "Post"}
					isLoading={values.isLoading}
				/>
			</form>
		</section>
	);
};

export default UploadModal;
