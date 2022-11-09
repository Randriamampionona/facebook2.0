import axios from "axios";
import apiEndpoint from "../../utils/apiEndpoint";
import toastHandler from "../../utils/toastHandler";

const useReact = () => {
	const react = async (DATA) => {
		try {
			const url = apiEndpoint?.(`/post/react?r=${DATA.react_ID}`);
			const fetch = await axios.patch(url, null, {
				withCredentials: true,
				headers: {
					post_ID: DATA.post_ID,
				},
			});
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);

				return result.snapshot;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { react };
};

export default useReact;
