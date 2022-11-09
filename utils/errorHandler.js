export const apiErrorHandler = (res, status, error) => {
	// console.log({ error });
	const isLow = error?.code === "PROTOCOL_SEQUENCE_TIMEOUT" || "ETIMEDOUT";

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
