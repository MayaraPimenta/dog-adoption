/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-100': '#F8E7D7',
        'primary': '#FDB402',
        'secondary-red': '#F95D54',
        'secondary-blue': '#0065AF',
        'secondary-green': '#407E46'
      },

      fontFamily: {
        montserrat: ['Montserrat', 'Sans-serif'],
        serif: ['Fraunces', 'serif'],
      },

      screens: {
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px'
      },

      boxShadow: {
        'default': '2px 2px 0 rgba(30, 30, 30, 1)'
      }
    },
  },
  plugins: [],
};
