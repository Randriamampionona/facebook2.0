import axios from "axios";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import toastHandler from "../../utils/toastHandler";

const useUploadPost = () => {
	const { toogleUploadModal } = GlobalContext();

	const uploadPost = async (data, setValues) => {
		setValues((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const url = apiEndpoint("/post/add");
			const fetch = await axios.post(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				toastHandler("success", result.message);
				return result.snapshot;
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
