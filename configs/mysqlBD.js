import mysql from "mysql2";

const mysqlDB = mysql.createPool({
	host: process.env.NODE_ENV === "production" ? "db4free.net" : "localhost",
	user: process.env.NODE_ENV === "production" ? "myfacebook" : "root",
	password: process.env.NODE_ENV === "production" ? "12345678910" : "",
	database:
		process.env.NODE_ENV === "production" ? "myfacebook" : "facebook2.0",

	// testing
	// host: "localhost",
	// user: "root",
	// password: "",
	// database: "testbd",
	// multipleStatements: true,
	// connectionLimit: Infinity,
});

export default mysqlDB;
