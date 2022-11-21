import mysql from "mysql2";

const mysqlDB = mysql.createPool({
	host: "db4free.net",
	user: "myfacebook",
	password: "12345678910",
	database: "myfacebook",
	multipleStatements: true,
	connectionLimit: Infinity,
});

export default mysqlDB;
