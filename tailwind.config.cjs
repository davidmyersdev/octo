const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

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
          '0': 'rgb(var(--colors-layer-0) / <alpha-value>)',
          '0-bg': 'rgb(var(--layer-0-bg) / <alpha-value>)',
          '0-text': 'rgb(var(--layer-0-text) / <alpha-value>)',
          '1': 'rgb(var(--colors-layer-1) / <alpha-value>)',
          '1-bg': 'rgb(var(--layer-1-bg) / <alpha-value>)',
          '1-text': 'rgb(var(--layer-1-text) / <alpha-value>)',
          '2': 'rgb(var(--colors-layer-2) / <alpha-value>)',
          '2-bg': 'rgb(var(--layer-2-bg) / <alpha-value>)',
          '2-text': 'rgb(var(--layer-2-text) / <alpha-value>)',
          '3': 'rgb(var(--colors-layer-3) / <alpha-value>)',
          '3-bg': 'rgb(var(--layer-3-bg) / <alpha-value>)',
          '3-text': 'rgb(var(--layer-3-text) / <alpha-value>)',
          '4': 'rgb(var(--colors-layer-4) / <alpha-value>)',
          '4-bg': 'rgb(var(--layer-4-bg) / <alpha-value>)',
          '4-text': 'rgb(var(--layer-4-text) / <alpha-value>)',
          '5': 'rgb(var(--colors-layer-5) / <alpha-value>)',
          '5-bg': 'rgb(var(--layer-5-bg) / <alpha-value>)',
          '5-text': 'rgb(var(--layer-5-text) / <alpha-value>)',
        },
        primary: 'rgb(var(--colors-primary) / <alpha-value>)',
        text: 'rgb(var(--colors-text) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        sq: (value) => ({
          height: value,
          width: value,
        }),
      }, { values: theme('spacing') })
    }),
  ],
}
