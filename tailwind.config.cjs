// tailwind.config.js
export default {
  purge: ['./src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
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