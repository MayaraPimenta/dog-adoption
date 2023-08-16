/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-100': '#f8f8f8',
        'pink': '#fd297b',
        'coral': '#ff5864',
        'light-orange': '#ff655b'
      },

      spacing: {
        '500': '31rem',
        '300': '18rem'
      }
    },
  },
  plugins: [],
}
