import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import { config as pwaConfig } from './pwa.config'
import { config as viteConfig } from './vite.config'
import postCssConfig from './postcss.config.cjs'

const root = dirname(fileURLToPath(import.meta.url))

const fathomScript = process.env.NUXT_PUBLIC_FATHOM_SITE_URL
  ? {
      'data-auto': false,
      'data-site': process.env.NUXT_PUBLIC_FATHOM_SITE_ID || '',
      'defer': true,
      'src': `${process.env.NUXT_PUBLIC_FATHOM_SITE_URL}/script.js`,
    }
  : {}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '#composables': join(root, './composables'),
    '#helpers': join(root, './helpers'),
    '#root': join(root, '.'),
    '#test': join(root, './test'),
    '#test-utils': join(root, './test/utils'),
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'text-layer-0-text bg-layer-0',
      },
      htmlAttrs: {
        class: 'auto scroll-smooth scroll-pt-4',
        lang: 'en',
      },
      link: [
        { href: '/img/icons/favicon.ico', rel: 'icon' },
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { crossorigin: '', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600;700&display=swap', rel: 'stylesheet' },
        { href: '/img/icons/icon-maskable-192x192.png', rel: 'apple-touch-icon' },
      ],
      meta: [
        { content: 'Reclaim control of your knowledge work.', name: 'description' },
        { content: '#121212', name: 'theme-color' },
        { property: 'og:url', content: 'https://octo.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Octo | Write meaningful notes' },
        { property: 'og:description', content: 'Reclaim control of your knowledge work.' },
        { property: 'og:image', content: 'https://octo.app/img/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'octo.app' },
        { property: 'twitter:url', content: 'https://octo.app' },
        { name: 'twitter:title', content: 'Octo | Write meaningful notes' },
        { name: 'twitter:description', content: 'Reclaim control of your knowledge work.' },
        { name: 'twitter:image', content: 'https://octo.app/img/og.png' },
      ],
      script: [
        fathomScript,
      ],
    },
  },
  build: {
    transpile: [
      'rxjs',
    ],
  },
  experimental: {
    // Todo: Does not respect port provided with `nuxi dev --port`
    // viteNode: true,
  },
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'home',
        path: '/home',
        file: '~/pages/index.vue',
      })
    },
  },
  imports: {
    dirs: [
      './helpers',
    ],
    mergeExisting: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],
  nitro: {
    prerender: {
      routes: [
        '/',
        '/home',
        '/settings',
      ],
    },
  },
  postcss: postCssConfig,
  pwa: {
    ...pwaConfig,
    base: '/',
    client: {
      registerPlugin: true,
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
    includeManifestIcons: true,
    registerWebManifestInRouteRules: true,
    scope: '/',
    writePlugin: true,
  },
  router: {
    options: {
      strict: true,
    },
  },
  runtimeConfig: {
    public: {
      appName: 'Octo',
      appTitle: 'Write meaningful notes',
      appSubtitle: 'Reclaim control of your knowledge work',
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
      firebaseDisabled: '1',
      firebaseLogLevel: '',
      firebaseMessagingSenderId: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      openaiApiKey: '',
      stripeMonthlyPrice: '',
    },
  },
  sourcemap: true,
  ssr: true,
  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },
  vite: viteConfig,
})
