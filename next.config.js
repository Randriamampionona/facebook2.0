/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// images: {
	// 	domains: ["localhost"],
	// },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

module.exports = nextConfig;
