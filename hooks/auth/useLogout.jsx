import apiEndpoint from "../../utils/apiEndpoint";
import axios from "axios";
import { useRouter } from "next/router";
import toastHandler from "../../utils/toastHandler";

const useLogout = () => {
	const { replace } = useRouter();

	const logout = async (data, setData) => {
		try {
			const url = apiEndpoint?.("/authorization/logout");
			const fetch = await axios.patch(url, data, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				// redirect
				replace("/");

				toastHandler?.("success", result.message);

				return result.payload;
			}
		} catch (error) {
			console.log(error.response.data.message);
		} finally {
		}
	};

	return { logout };
};

export default useLogout;
