import mysqlDB from "../configs/mysqlBD";
import { apiErrorHandler } from "../utils/errorHandler";

const checkConnection = (handler) => {
	return async (req, res) => {
		try {
			mysqlDB.getConnection((errDB, con) => {
				if (errDB) return apiErrorHandler?.(res, 500, errDB);

				console.log("Conneced to DB, connection ID: " + con.threadId);

				req.con = { con: con, promiseConn: con.promise() };

				// next
				return handler(req, res);
			});
		} catch (error) {
			return apiErrorHandler?.(res, 500, error);
		}
	};
};

export default checkConnection;
