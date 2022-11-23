import axios from "axios";
import { mutate } from "swr";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import toastHandler from "../../utils/toastHandler";

const useReact = () => {
	const { mutateKey } = GlobalContext();

	const react = async (DATA) => {
		try {
			const url = `/post/react?r=${DATA.react_ID}`;
			const fetch = await axios.patch(url, null, {
				withCredentials: true,
				headers: {
					post_ID: DATA.post_ID,
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
		}
	};

	return { react };
};

export default useReact;
