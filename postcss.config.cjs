module.exports = {
  plugins: {
    '@csstools/postcss-oklab-function': {
      preserve: true,
    },
    'autoprefixer': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'tailwindcss': {},
  },
}
