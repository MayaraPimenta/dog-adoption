/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-100': '#faf4e1',
        'primary': '#f7cb54',
        'secondary-red': '#ffccb4',
        'secondary-blue': '#9cd3d1',
        'secondary-green': '#A2CB93',
        'black-100': '#1e1e1e'
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
        'default': '3px 3px 0 #1e1e1e',
        'card': '5px 5px 0 #1e1e1e',
      }
    },
  },
  plugins: [],
};
