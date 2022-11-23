import axios from "axios";
import { mutate } from "swr";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import toastHandler from "./../../utils/toastHandler";

const useEdit = () => {
	const {
		mutateKey,
		modal: { form: column },
		toogleProfileModal,
	} = GlobalContext();

	const edit = async (data, setValues) => {
		setValues((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const url = `/info/update?c=${column}`;
			const fetch = await axios.patch(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				toastHandler?.("success", result.message);
				toogleProfileModal(false);

				mutate(mutateKey);
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
