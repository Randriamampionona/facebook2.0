import axios from "axios";
import { useRouter } from "next/router";
import formValidationinputs from "../../utils/formValidationinputs";
import apiEndpoint from "./../../utils/apiEndpoint";
import toastHandler from "./../../utils/toastHandler";

const useSignin = () => {
	const { replace } = useRouter();

	const signin = async (data, setData) => {
		const isVerifiedEmail = formValidationinputs?.("email", data.email);
		const isVerifiedPass = formValidationinputs?.("password", data.password);

		if (isVerifiedEmail.error || isVerifiedPass.error) {
			return setData((prev) => ({
				...prev,
				message: {
					...prev.message,
					error: {
						email: isVerifiedEmail.error && isVerifiedEmail.message,
						password: isVerifiedPass.error && isVerifiedPass.message,
					},
					success: null,
				},
			}));
		}

		setData((prev) => ({ ...prev, loading: true }));

		try {
			const url = apiEndpoint?.("/authorization/signin");
			const fecth = await axios.post(url, data, { withCredentials: true });
			const result = fecth.data;

			if (result.success) {
				setData({
					email: "",
					password: "",
					message: {
						error: null,
						success: result.message,
					},
				});

				// redirect
				setTimeout(() => {
					replace("/home");
				}, 1000);

				toastHandler?.("success", result.message);

				return result.payload;
			}
		} catch (error) {
			setData({
				email: "",
				password: "",
				message: {
					error: error.response.data.message,
					success: null,
				},
			});
			console.log(error);
		} finally {
			setData((prev) => ({ ...prev, loading: false }));
		}
	};

	return { signin };
};

export default useSignin;
