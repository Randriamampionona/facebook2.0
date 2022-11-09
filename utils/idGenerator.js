const idGenerator = (length) => {
	return require("crypto")
		.randomBytes((length ||= 30))
		.toString("hex");
};

export default idGenerator;
