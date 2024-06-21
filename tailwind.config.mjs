/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'primary-190': '#132E18',
		  'primary-120': '#44BD5D',
		  'neutral-80': '#3E3E40',
		},
		height: {
			'500px': '500px',
			'300px': '300px',
			'200px': '200px',
			'100px': '100px',
			'70px': '70px',
			'60px': '60px',
			'40px': '40px',
		  },
		width: {
			'100px': '100px'
		},
		space: {
			'70px': '70px'
		},
		grayscale: {
			50: '50%',
		  }
	  },
	},
	variants: {
	  extend: {},
	},
	plugins: [],
  }