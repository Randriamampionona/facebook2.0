import axios from "axios";
import { useRouter } from "next/router";
import apiEndpoint from "../../utils/apiEndpoint";
import toastHandler from "../../utils/toastHandler";
import formValidationinputs from "./../../utils/formValidationinputs";

const useSignup = () => {
	const { replace } = useRouter();

	const signup = async (data, setData) => {
		const isVerifiedFirstName = formValidationinputs?.(
			"firstName",
			data.firstName
		);
		const isVerifiedLastName = formValidationinputs?.(
			"lastName",
			data.lastName
		);
		const isVerifiedEmail = formValidationinputs?.("email", data.email);
		const isVerifiedPass = formValidationinputs?.("password", data.password);

		if (
			isVerifiedFirstName.error ||
			isVerifiedLastName.error ||
			isVerifiedEmail.error ||
			isVerifiedPass.error
		) {
			return setData((prev) => ({
				...prev,
				message: {
					...prev.message,
					error: {
						firstName:
							isVerifiedFirstName.error && isVerifiedFirstName.message,
						lastName:
							isVerifiedLastName.error && isVerifiedLastName.message,
						email: isVerifiedEmail.error && isVerifiedEmail.message,
						password: isVerifiedPass.error && isVerifiedPass.message,
					},
					success: null,
				},
			}));
		}

		setData((prev) => ({ ...prev, loading: true }));

		try {
			const url = apiEndpoint?.("/authorization/signup");
			const fecth = await axios.post(url, data, { withCredentials: true });
			const result = fecth.data;

			if (result.success) {
				setData({
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					m: "Jan",
					d: "01",
					y: "1999",
					gender: "female",
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
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				m: "Jan",
				d: "01",
				y: "1999",
				gender: "female",
				message: {
					error: error.response.data.message,
					success: null,
				},
			});
			console.log(error.response.data.message);
		} finally {
			setData((prev) => ({ ...prev, loading: false }));
		}
	};

	return { signup };
};

export default useSignup;
