import axios from "axios";
import { mutate } from "swr";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import toastHandler from "../../utils/toastHandler";

const useUploadPost = () => {
	const { mutateKey, toogleUploadModal } = GlobalContext();

	const uploadPost = async (data, setValues) => {
		setValues((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const url = "/post/add";
			const fetch = await axios.post(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				toastHandler("success", result.message);

				mutate(mutateKey);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setValues((prev) => ({
				...prev,
				isLoading: false,
			}));
			toogleUploadModal?.({ type: null });
		}
	};

	return { uploadPost };
};

export default useUploadPost;
