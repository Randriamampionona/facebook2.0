import axios from "axios";
import { mutate } from "swr";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import toastHandler from "../../utils/toastHandler";

const useDelete = () => {
	const { mutateKey } = GlobalContext();

	const deletePost = async (data, setValues) => {
		setValues(true);

		try {
			const url = "/post/delete";
			const fetch = await axios.delete(url, {
				withCredentials: true,
				headers: {
					post_id: data.post_ID,
				},
			});
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);

				mutate(mutateKey);
			}
		} catch (error) {
			if (error?.response?.data?.error) {
				return toastHandler?.("error", error?.response?.data?.message);
			}

			console.log(error);
		} finally {
			setValues(false);
		}
	};

	return { deletePost };
};

export default useDelete;
