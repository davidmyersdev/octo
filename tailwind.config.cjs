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
        brand: 'var(--colors-brand)',
        darkest: '#121212',
        gray: colors.zinc,
        layer: {
          0: 'var(--colors-layer-0)',
          1: 'var(--colors-layer-1)',
          2: 'var(--colors-layer-2)',
          3: 'var(--colors-layer-3)',
          4: 'var(--colors-layer-4)',
          5: 'var(--colors-layer-5)',
        },
        primary: 'var(--colors-primary)',
        text: 'var(--colors-text)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
