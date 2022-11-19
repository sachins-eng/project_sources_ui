/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#111727",
					50: "#F8FBFC",
					light: "#333B48",
				},
			},
			fontFamily: {
				sans: ["Inter var"],
			},
		},
	},
	plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
