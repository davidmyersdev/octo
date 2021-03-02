const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        light: '0 1px 3px 0 rgba(240, 240, 240, 0.1), 0 1px 2px 0 rgba(240, 240, 240, 0.12)',
      },
      colors: {
        brand: '#e06c75',
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}
