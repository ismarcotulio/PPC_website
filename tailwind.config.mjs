/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'primary-120': '#44BD5D',
		  'neutral-80': '#3E3E40',
		},
	  },
	},
	variants: {
	  extend: {},
	},
	plugins: [],
  }