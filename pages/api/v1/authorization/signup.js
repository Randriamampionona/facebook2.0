import bcrypt from "bcryptjs";
import { setCookie } from "cookies-next";
import checkConnection from "../../../../middlewares/checkConnection";
import idGenerator from "./../../../../utils/idGenerator";
import {
	createAccessToken,
	createRefreshToken,
} from "../../../../tokens/tokens";
import {
	apiErrorHandler,
	methodErrorHandler,
} from "../../../../utils/errorHandler";

const handler = async (req, res) => {
	methodErrorHandler?.(req, res, "POST");

	const { promiseConn } = req.con;
	const user_ID = idGenerator?.();
	const row_ID = idGenerator?.(6);
	const { firstName, lastName, email, birthday, password } = req.body;
	const username = `${firstName} ${lastName}`;

	const querys = {
		find: {
			q: "SELECT COUNT(*) AS EXIST FROM users WHERE email = ?",
			data: [email],
		},
		addUser: {
			q: "INSERT INTO users SET user_ID= ?, first_name = ?, last_name = ?, username = ?, email = ?, birthday = ?, password = ?",
			data: [user_ID, firstName, lastName, username, email, birthday],
		},
		addUserCredential: {
			q: "INSERT INTO user_credentials SET user_credential_ID = ?, user_ID = ?, access_token = ?",
			data: [row_ID, user_ID],
		},
		setDefaultPictures: {
			q: "INSERT INTO user_pictures SET user_picture_ID = ?, user_ID = ?, profile_picture = DEFAULT, cover_picture = DEFAULT",
			data: [row_ID, user_ID],
		},
		setDefaultInfos: {
			q: "INSERT INTO user_infos SET user_info_ID = ?, user_ID = ?, bio = DEFAULT, city = DEFAULT, country = DEFAULT, love_cituation = DEFAULT, hobbies = DEFAULT",
			data: [row_ID, user_ID],
		},
	};

	try {
		// find user
		const [rowS] = await promiseConn.execute(querys.find.q, querys.find.data);

		// check if user already exist
		const exist = rowS[0].EXIST > 0;
		if (exist) return apiErrorHandler?.(res, 400, "User already exist");

		// crypt password
		const hashedPassword = bcrypt.hashSync(password, 12);

		// user instance
		const currentUser = {
			user_ID,
			firstName,
			lastName,
			username,
			username,
			email,
			birthday,
			password,
			pictures: {
				profile: "/assets/user-profile-img/default.png",
				cover: "/assets/user-profile-img/default.png",
			},
		};

		// create tokens
		const { password: pass, ...rest } = currentUser;
		const accessToken = createAccessToken?.({ ...rest });
		const refreshToken = createRefreshToken?.({ ...rest });

		// add user
		await promiseConn.execute(querys.addUser.q, [
			...querys.addUser.data,
			hashedPassword,
		]);

		// add user credentials
		await promiseConn.execute(querys.addUserCredential.q, [
			...querys.addUserCredential.data,
			accessToken,
		]);

		// set default pics
		await promiseConn.execute(
			querys.setDefaultPictures.q,
			querys.setDefaultPictures.data
		);

		// set default infos
		await promiseConn.execute(
			querys.setDefaultInfos.q,
			querys.setDefaultInfos.data
		);

		// add cookie
		setCookie("refresh_token", refreshToken, {
			req,
			res,
			httpOnly: true,
			maxAge: 60 * 60 * 60,
		});

		// return payload if needed
		res.status(201).json({
			success: true,
			message: "Register successfull",
			payload: {
				...rest,
			},
		});
	} catch (error) {
		return apiErrorHandler?.(res, 500, error);
	} finally {
		promiseConn.release();
	}
};

export default checkConnection?.(handler);
