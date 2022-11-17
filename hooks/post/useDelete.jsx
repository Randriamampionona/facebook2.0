import apiEndpoint from "../../utils/apiEndpoint";
import axios from "axios";
import toastHandler from "../../utils/toastHandler";

const useDelete = () => {
	const deletePost = async (data, setValues) => {
		setValues(true);

		try {
			const url = apiEndpoint?.("/post/delete");
			const fetch = await axios.delete(url, {
				withCredentials: true,
				headers: {
					post_id: data.post_ID,
				},
			});
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);

				return result.snapshot;
			}
		} catch (error) {
			console.log(error);
		} finally {
			setValues(false);
		}
	};

	return { deletePost };
};

export default useDelete;
