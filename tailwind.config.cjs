const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/css/tailwind.css',
    './index.html',
    './**/*.ts',
    './**/*.vue',
    '!./.nuxt/**/*',
    '!./.output/**/*',
    '!./dev-dist/**/*',
    '!./dist/**/*',
    '!./node_modules/**/*',
  ],
  darkMode: 'class', // the default is 'media'
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--colors-brand) / <alpha-value>)',
        darkest: '#121212',
        gray: colors.zinc,
        layer: {
          'bg': 'rgb(var(--layer-bg) / <alpha-value>)',
          'bg-hover': 'rgb(var(--layer-bg-hover) / <alpha-value>)',
          'bg-active': 'rgb(var(--layer-bg-active) / <alpha-value>)',
          'bg-disabled': 'rgb(var(--layer-bg-disabled) / <alpha-value>)',
          'text': 'rgb(var(--layer-text) / <alpha-value>)',
          'text-hover': 'rgb(var(--layer-text-hover) / <alpha-value>)',
          'text-active': 'rgb(var(--layer-text-active) / <alpha-value>)',
          'text-disabled': 'rgb(var(--layer-text-disabled) / <alpha-value>)',
          'text-muted': 'rgb(var(--layer-text-muted) / <alpha-value>)',
        },
        primary: 'rgb(var(--colors-primary) / <alpha-value>)',
      },
      backgroundColor: {
        'layer': 'rgb(var(--layer-bg) / <alpha-value>)',
        'layer-hover': 'rgb(var(--layer-bg-hover) / <alpha-value>)',
        'layer-active': 'rgb(var(--layer-bg-active) / <alpha-value>)',
        'layer-disabled': 'rgb(var(--layer-bg-disabled) / <alpha-value>)',
        'layer-border': 'rgb(var(--layer-border) / <alpha-value>)',
        'layer-text': 'rgb(var(--layer-text) / <alpha-value>)',
        'layer-text-muted': 'rgb(var(--layer-text-muted) / <alpha-value>)',
      },
      borderColor: {
        'layer': 'rgb(var(--layer-border) / <alpha-value>)',
        'layer-text': 'rgb(var(--layer-text) / <alpha-value>)',
        'layer-text-muted': 'rgb(var(--layer-text-muted) / <alpha-value>)',
      },
      placeholderColor: {
        muted: 'rgb(var(--layer-text-muted) / <alpha-value>)',
      },
      textColor: {
        'layer': 'rgb(var(--layer-text) / <alpha-value>)',
        'layer-hover': 'rgb(var(--layer-text-hover) / <alpha-value>)',
        'layer-active': 'rgb(var(--layer-text-active) / <alpha-value>)',
        'layer-disabled': 'rgb(var(--layer-text-disabled) / <alpha-value>)',
        'layer-muted': 'rgb(var(--layer-text-muted) / <alpha-value>)',
        'layer-bg': 'rgb(var(--layer-bg) / <alpha-value>)',
      },
      typography: {
        inherit: {
          css: {
            '--tw-prose-body': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-headings': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-lead': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-links': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-bold': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-counters': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-bullets': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-hr': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-quotes': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-quote-borders': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-captions': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-code': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-pre-code': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-pre-bg': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-th-borders': 'rgb(var(--layer-text) / <alpha-value>)',
            '--tw-prose-td-borders': 'rgb(var(--layer-text) / <alpha-value>)',
          },
        },
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant, matchUtilities, theme }) => {
      addVariant('disabled-within', '&:has(*:disabled)')

      matchUtilities({
        sq: (value) => ({
          height: value,
          width: value,
        }),
      }, { values: theme('spacing') })
    }),
  ],
}
