const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './assets/css/tailwind.css',
    './index.html',
    './**/*.vue',
  ],
  darkMode: 'class', // the default is 'media'
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--colors-brand) / <alpha-value>)',
        darkest: '#121212',
        gray: colors.zinc,
        layer: {
          0: 'rgb(var(--colors-layer-0) / <alpha-value>)',
          1: 'rgb(var(--colors-layer-1) / <alpha-value>)',
          2: 'rgb(var(--colors-layer-2) / <alpha-value>)',
          3: 'rgb(var(--colors-layer-3) / <alpha-value>)',
          4: 'rgb(var(--colors-layer-4) / <alpha-value>)',
          5: 'rgb(var(--colors-layer-5) / <alpha-value>)',
        },
        primary: 'rgb(var(--colors-primary) / <alpha-value>)',
        text: 'rgb(var(--colors-text) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
