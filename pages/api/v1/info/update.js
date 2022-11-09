import checkAuth from "../../../../middlewares/checkAuth";
import checkConnection from "../../../../middlewares/checkConnection";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "PATCH");

	const { promiseConn } = req.con;
	const { user_ID } = req.payload;
	const { c: column } = req.query;
	const { values } = req.body;

	const querys = {
		bio: {
			q: "UPDATE user_infos SET bio = ? WHERE user_ID = ?",
			data: [values.bio, user_ID],
		},
		hobbies: {
			q: "UPDATE user_infos SET hobbies = ? WHERE user_ID = ?",
			data: [JSON.stringify(values.hobbies), user_ID],
		},
		details: {
			q: "UPDATE user_infos SET city = ?, country = ?, love_cituation = ? WHERE user_ID = ?",
			data: [values.city, values.country, values.loveCituation, user_ID],
		},
	};

	try {
		// update
		await promiseConn.query(querys[column].q, querys[column].data);

		// send response
		res.status(200).json({
			success: true,
			message: "Updated",
			snapshot:
				column === "details"
					? {
							city: values.city,
							country: values.country,
							loveCituation: values.loveCituation,
					  }
					: {
							[column]: values[column],
					  },
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(checkAuth?.(handler));
