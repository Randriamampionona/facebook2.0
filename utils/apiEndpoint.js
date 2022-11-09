const apiEndpoint = (sub) => {
	return `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}${sub}`;
};

export default apiEndpoint;
