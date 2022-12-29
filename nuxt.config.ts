import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'flex flex-col flex-grow text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900',
      },
      htmlAttrs: {
        class: 'flex scroll-smooth scroll-pt-4',
        lang: 'en',
      },
      link: [
        { href: '/img/icons/favicon.ico', rel: 'icon' },
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { crossorigin: '', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600;700&display=swap', rel: 'stylesheet' },
      ],
      script: [
        // Todo: Add Fathom script
      ],
    },
  },
  experimental: {
    // Todo: Does not respect port provided with `nuxi dev --port`
    // viteNode: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      strict: true,
    },
  },
  ssr: false,
  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },
})
