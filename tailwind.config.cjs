const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './**/*.vue',
  ],
  darkMode: 'class', // the default is 'media'
  theme: {
    extend: {
      colors: {
        brand: '#6c93e0',
        darkest: '#121212',
        gray: colors.neutral,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
