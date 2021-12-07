module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			fontSize: {
				xxs: "10px",
			},
			backgroundImage: {
				promotion: "url('/src/assets/images/promotion-bg.png')",
				banner1: "url('/src/assets/images/banner-1.webp')",
				banner2: "url('/src/assets/images/banner-2.jpg')",
			},
			colors: {
				primary: "#e65540",
				secondary: "#66a8a6",
			},
			spacing: {
				67: "67px",
			},
			gridTemplateColumns: {
				"container-layout": "300px 1fr",
			},
		},
	},
	variants: {
		extend: {
			scale: ["group-hover"],
			visibility: ["group-hover"],
			translate: ["group-hover"],
			brightness: ["group-hover"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
