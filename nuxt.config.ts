import { defineNuxtConfig } from 'nuxt/config'

const fathomScript = process.env.NUXT_PUBLIC_FATHOM_SITE_URL ? {
  'data-auto': false,
  'data-site': process.env.NUXT_PUBLIC_FATHOM_SITE_ID || '',
  'defer': true,
  'src': `${process.env.NUXT_PUBLIC_FATHOM_SITE_URL}/script.js`,
} : {}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
      firebaseLogLevel: '',
      firebaseMessagingSenderId: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      stripeMonthlyPrice: '',
    },
  },
  ssr: false,
  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },
})
