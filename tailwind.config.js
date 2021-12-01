module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				promotion: "url('/src/assets/images/promotion-bg.png')",
			},
			colors: {
				primary: "#e65540",
			},
			spacing: {
				67: "67px",
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
	plugins: [],
};
