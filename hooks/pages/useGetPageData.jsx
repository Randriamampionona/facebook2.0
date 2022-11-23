import axios from "axios";
import useSWR from "swr";
import { AuthContext } from "../../store/contexts/AuthContext";
import { GlobalContext } from "../../store/contexts/GlobalContext";

const useGetPageData = () => {
	const { mutateKey } = GlobalContext();
	const { user } = AuthContext();

	const fetcher = async (arg) => {
		const fetch = await axios.get(arg, {
			withCredentials: true,
			headers: {
				user_id: user.user_ID,
			},
		});
		const result = fetch.data;

		return result;
	};

	const { data, error } = useSWR(mutateKey, fetcher);

	return { data, error };
};

export default useGetPageData;
