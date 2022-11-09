/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				default:
					"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
				poppins: "Poppins, sans-serif",
				systemUI: "system-ui, sans-serif",
			},

			colors: {
				whiteBg: "#f1f2f6",
				dark: "#18191a",
				semiDark: "#242526",
				lightDark: "#3a3b3c",
				hoverDark: "#ffffff1a",

				activeLog: "#31a24c",
				blueDark: "#2374e1",
				blueNormal: "#0a81ec",

				textWhite: "#e4e6eb",
				textLight: "#b0b3b8",
				textBlue: "#2e89ff",

				liveColor: "#ed2a4c",
				greenColor: "#3fb928",
			},

			boxShadow: {
				formShadow: "0px 4px 10px -2px #18191a30",
				blockShadow: "0px 4px 10px -2px #18191a85",
			},
		},
	},
	plugins: [],
};
