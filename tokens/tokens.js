import { sign } from "jsonwebtoken";

export const createAccessToken = (payload) => {
	return sign(payload, process.env.NEXT_ACCESS_TOKEN_SECRET, {
		expiresIn: "15m",
	});
};

export const createRefreshToken = (payload) => {
	return sign(payload, process.env.NEXT_REFRESH_TOKEN_SECRET, {
		expiresIn: "24h",
	});
};
