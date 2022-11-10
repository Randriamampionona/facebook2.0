import mysql from "mysql2";

const mysqlDB = mysql.createPool({
	host: process.env.NEXT_HOST,
	user: process.env.NEXT_USER,
	password:
		process.env.NODE_ENV === "production" ? process.env.NEXT_PASSWORD : "",
	database: process.env.NEXT_DATABASE,
	multipleStatements: true,
	connectionLimit: 30,
	connectTimeout: 15,
});

export default mysqlDB;
