const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // the default is 'media'
  theme: {
    extend: {
      colors: {
        brand: '#e06c75',
        darkest: '#121212',
        gray: colors.neutral,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
