import axios from "axios";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import apiEndpoint from "./../../utils/apiEndpoint";
import toastHandler from "./../../utils/toastHandler";

const useEdit = () => {
	const {
		modal: { form: column },
		toogleProfileModal,
	} = GlobalContext();

	const edit = async (data, setValues) => {
		setValues((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const url = apiEndpoint?.(`/info/update?c=${column}`);
			const fetch = await axios.patch(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);
				toogleProfileModal(false);
				return result.snapshot;
			}
		} catch (error) {
			console.log(error);
		} finally {
			setValues((prev) => ({
				...prev,
				isLoading: false,
			}));
		}
	};

	return { edit };
};

export default useEdit;
