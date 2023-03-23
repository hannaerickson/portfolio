/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    color: {
      primary: colors.indigo,
      secondary: colors.yellow,
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        'sans': ['Jost', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}