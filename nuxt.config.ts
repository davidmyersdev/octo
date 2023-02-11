import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

const fathomScript = process.env.NUXT_PUBLIC_FATHOM_SITE_URL ? {
  'data-auto': false,
  'data-site': process.env.NUXT_PUBLIC_FATHOM_SITE_ID || '',
  'defer': true,
  'src': `${process.env.NUXT_PUBLIC_FATHOM_SITE_URL}/script.js`,
} : {}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '#root': resolve('.'),
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900',
      },
      htmlAttrs: {
        class: 'scroll-smooth scroll-pt-4',
        lang: 'en',
      },
      link: [
        { href: '/manifest.webmanifest', rel: 'manifest' },
        { href: '/img/icons/favicon.ico', rel: 'icon' },
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { crossorigin: '', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600;700&display=swap', rel: 'stylesheet' },
        { href: '/img/icons/icon-maskable-192x192.png', rel: 'apple-touch-icon' },
      ],
      meta: [
        { content: 'The ultimate open source tool for personal knowledge management.', name: 'description' },
        { content: '#121212', name: 'theme-color' },
        { property: 'og:url', content: 'https://octo.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Octo | Unlock your full potential' },
        { property: 'og:description', content: 'The ultimate open source tool for personal knowledge management.' },
        { property: 'og:image', content: 'https://cdn.octo.app/img/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'octo.app' },
        { property: 'twitter:url', content: 'https://octo.app' },
        { name: 'twitter:title', content: 'Octo | Unlock your full potential' },
        { name: 'twitter:description', content: 'The ultimate open source tool for personal knowledge management.' },
        { name: 'twitter:image', content: 'https://cdn.octo.app/img/og.png' },
      ],
      script: [
        fathomScript,
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
  runtimeConfig: {
    public: {
      appName: 'Octo',
      appTitle: 'Unlock your full potential',
      appSubtitle: 'Octo is the ultimate open source tool for personal knowledge management.',
      cdnUrl: '',
      discordInviteLink: '',
      fathomEventAccountRegistration: '',
      fathomEventCtaContinueWithPro: '',
      fathomEventCtaModalUpgrade: '',
      fathomEventCtaOpenApp: '',
      fathomEventCtaSaveDocs: '',
      fathomEventCtaSettingsUpgrade: '',
      fathomEventCtaSignUpNow: '',
      fathomEventCtaTryItOut: '',
      fathomEventCtaUpgradeToPro: '',
      fathomSiteId: '',
      fathomSiteUrl: '',
      firebaseApiKey: '',
      firebaseAppId: '',
      firebaseAuthDomain: '',
      firebaseDatabaseUrl: '',
      firebaseEmulatorAuth: '',
      firebaseEmulatorBypass: '',
      firebaseEmulatorFirestoreHost: '',
      firebaseEmulatorFirestorePort: '',
      firebaseEmulatorFunctionsHost: '',
      firebaseEmulatorFunctionsPort: '',
      firebaseEmulatorStorageHost: '',
      firebaseEmulatorStoragePort: '',
      firebaseDisabled: '',
      firebaseLogLevel: '',
      firebaseMessagingSenderId: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      stripeMonthlyPrice: '',
    },
  },
  sourcemap: true,
  ssr: false,
  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },
})
