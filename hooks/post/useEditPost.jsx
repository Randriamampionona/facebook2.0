import axios from "axios";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import toastHandler from "../../utils/toastHandler";

const useEditPost = () => {
	const { toogleUploadModal } = GlobalContext();

	const editPost = async (data, setValues) => {
		setValues((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const url = apiEndpoint?.("/post/edit");
			const fetch = await axios.patch(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);

				return result.snapshot;
			}
		} catch (error) {
			if (error?.response?.data?.error) {
				return toastHandler?.("error", error?.response?.data?.message);
			}

			console.log(error);
		} finally {
			setValues((prev) => ({
				...prev,
				isLoading: false,
			}));
			toogleUploadModal?.({ type: null });
		}
	};

	return { editPost };
};

export default useEditPost;
