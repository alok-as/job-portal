import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "0",
			},
			screens: {
				sm: "100%", // (Phones, Landscape) (481px to 767px)
				md: "100%", // (Tablets) (768px to 1024px)
				lg: "1024px", // (Laptops and Desktops) (1025px to 1200px)
				xl: "1280px", // (Large Desktops) (1201px and above)
			},
		},
		extend: {
			colors: {
				"js-grey": {
					100: "#4f5e64",
					200: "#e0e6f6",
					300: "#f2f6fd",
					400: "#b4c0e0",
					500: "#66789c",
					600: "#6c757d",
				},
				"js-primary": {
					400: "#3c65f5",
					800: "#05264e",
				},
			},
		},
	},
	plugins: [],
};
export default config;
