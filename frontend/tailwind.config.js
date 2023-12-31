/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-light': '#aba9a8ff',
        'grey-dark' : '#434549ff'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
