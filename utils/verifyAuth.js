import axios from "axios";
import apiEndpoint from "./apiEndpoint";

const VerifyAuth = async (req) => {
	const tokens = req.cookies.refresh_token;
	const page = req.url;

	const response = () => {
		return {
			onSuccess: (props) => {
				return {
					props: {
						...props,
					},
				};
			},

			onError: (path) => {
				return {
					redirect: {
						destination: path,
						permanent: false,
					},
				};
			},
		};
	};

	// console.log({ page });

	if (!tokens)
		return page !== "/" && !page.includes("index.json")
			? response().onError("/")
			: response().onSuccess({ user: null });

	try {
		const url = apiEndpoint?.("/authorization/auth");
		const fecth = await axios.get(url, {
			withCredentials: true,
			headers: {
				refresh_token: tokens,
			},
		});
		const result = fecth.data;

		if (result.success) {
			return page !== "/" && page !== "/_next/data/development/index.json"
				? response().onSuccess({ user: result.payload })
				: response().onError("/home");
		}
	} catch (error) {
		return page !== "/" && page !== "/_next/data/development/index.json"
			? response().onError("/")
			: response().onSuccess({ user: null });
	}
};

export default VerifyAuth;
