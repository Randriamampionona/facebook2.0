import axios from "axios";
import apiEndpoint from "../../utils/apiEndpoint";

const useAuth = () => {
	const auth = async () => {
		try {
			const url = apiEndpoint?.("/authorization/auth");
			const fetch = await axios.get(url, { withCredentials: true });
			const result = fetch.data;

			if (result.success) {
				return result.payload;
			}
		} catch (error) {
			console.log({ useAuthErr: error });
		}
	};

	return { auth };
};

export default useAuth;
