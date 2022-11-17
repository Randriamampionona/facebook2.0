const idGenerator = () => {
	return require("crypto").randomBytes(5).toString("hex");
};

export default idGenerator;
