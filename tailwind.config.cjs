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
        brand: '#ff6666',
        darkest: '#121212',
        gray: colors.neutral,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
