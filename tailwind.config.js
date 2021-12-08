module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minWidth: {
			992: "992px",
		},
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
				cart: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/images/cover-1.webp')",
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
