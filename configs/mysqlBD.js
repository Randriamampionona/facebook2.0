import mysql from "mysql2";

const mysqlDB = mysql.createPool({
	host:
		process.env.NODE_ENV === "production"
			? process.env.NEXT_HOST
			: "localhost",

	user: process.env.NODE_ENV === "production" ? process.env.NEXT_USER : "root",

	password:
		process.env.NODE_ENV === "production" ? process.env.NEXT_PASSWORD : "",

	database:
		process.env.NODE_ENV === "production"
			? process.env.NEXT_DATABASE
			: "facebook2.0",

	multipleStatements: true,
	connectionLimit: Infinity,

	// testing
	// host: "localhost",
	// user: "root",
	// password: "",
	// database: "testbd",
	// multipleStatements: true,
	// connectionLimit: Infinity,
});

export default mysqlDB;
