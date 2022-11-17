export const apiErrorHandler = (res, status, error) => {
	const isLow = error?.code === "ETIMEDOUT";
	// console.log({ error, isLow });

	res.status(isLow ? 408 : status).json({
		error: true,
		message: isLow
			? "Low connection network detected, Try again"
			: error.message
			? error.message
			: error,
	});
};

export const methodErrorHandler = (req, res, method) => {
	if (req.method !== method)
		return res.status(405).json({
			error: true,
			message: "Method not allowed",
		});
};
