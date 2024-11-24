/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				secondary: "#fd3db5",
				out_stock: "#fa1e39",
			},
		},
	},
	plugins: [typography],
}
