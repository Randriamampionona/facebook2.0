import axios from "axios";

const useAuth = () => {
	const auth = async () => {
		try {
			const url = "/authorization/auth";
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
