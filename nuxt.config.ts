import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgPlugin from 'vite-svg-loader'

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
    '#components': join(root, './components'),
    '#composables': join(root, './composables'),
    '#helpers': join(root, './helpers'),
    '#root': join(root, '.'),
    '#shared': join(root, './lib/shared'),
    '#test': join(root, './test'),
    '#test-utils': join(root, './test/utils'),
  },

  app: {
    head: {
      htmlAttrs: {
        class: 'scroll-smooth scroll-pt-4 layer-0',
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
        { content: 'We swim in an ocean of knowledge. Discover its pearls of wisdom with Octo.', name: 'description' },
        { content: '#121212', name: 'theme-color' },
        { property: 'og:url', content: 'https://octo.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Octo | Your home for deep work' },
        { property: 'og:description', content: 'We swim in an ocean of knowledge. Discover its pearls of wisdom with Octo.' },
        { property: 'og:image', content: 'https://octo.app/img/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'octo.app' },
        { property: 'twitter:url', content: 'https://octo.app' },
        { name: 'twitter:title', content: 'Octo | Your home for deep work' },
        { name: 'twitter:description', content: 'We swim in an ocean of knowledge. Discover its pearls of wisdom with Octo.' },
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

  compatibilityDate: '2024-09-06',

  devServer: {
    host: '127.0.0.1',
  },

  devtools: {
    enabled: !process.env.DISABLE_DEVTOOLS,
    timeline: {
      enabled: true,
    },
  },

  experimental: {
    appManifest: true,
    payloadExtraction: true,
  },

  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'home',
        path: '/home',
        file: '~/pages/index.vue',
      })
    },
    'vite:extend': ({ config }) => {
      // https://github.com/nuxt/nuxt/issues/27558#issuecomment-2254471601
      if (config.server && config.server.hmr) {
        if (typeof config.server.hmr === 'boolean') {
          config.server.hmr = {}
        }

        // This port must match the main dev server in order for Tauri to work.
        config.server.hmr.port = 8888
        config.server.hmr.protocol = 'ws'
      }
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
        '/authenticate',
        '/home',
        '/product/pricing',
        '/settings',
      ],
    },
    routeRules: {
      '/emulator/auth/**': {
        proxy: 'http://127.0.0.1:32775/emulator/auth/**',
      },
      '/identitytoolkit.googleapis.com/**': {
        proxy: 'http://127.0.0.1:32775/identitytoolkit.googleapis.com/**',
      },
      '/securetoken.googleapis.com/**': {
        proxy: 'http://127.0.0.1:32775/securetoken.googleapis.com/**',
      },
    },
  },

  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': {
        preserve: true,
      },
      'autoprefixer': {},
      'tailwindcss/nesting': 'postcss-nesting',
      'tailwindcss': {},
    },
  },

  pwa: {
    includeAssets: ['img/icons/favicon.ico'],
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    workbox: {
      additionalManifestEntries: [
        { url: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap', revision: 'v1' },
      ],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      globPatterns: ['**/*.{css,html,ico,jpeg,jpg,js,png,svg,txt}'],
      maximumFileSizeToCacheInBytes: (5 * 1024 * 1024),
      navigateFallback: '/',
      navigateFallbackDenylist: [
        // Necessary for Firebase auth requests.
        /^\/__/,
        // Keep this around for backward compatibility.
        /^\/manifest\.json$/,
        // Keep this around for backward compatibility.
        /^\/service-worker\.js$/,
      ],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdnjs.cloudflare.com\/.*/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'cloudflare-cache',
          },
        },
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\/s\/.*/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'font-cache',
          },
        },
      ],
      skipWaiting: true,
    },
    manifest: {
      background_color: '#171717',
      display: 'standalone',
      theme_color: '#121212',
      name: process.env.NUXT_PUBLIC_APP_NAME || 'Octo',
      scope: '/',
      short_name: process.env.NUXT_PUBLIC_APP_NAME || 'Octo',
      start_url: '/docs/new',
      icons: [
        {
          src: './img/icons/icon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/icon-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    base: '/',
    client: {
      registerPlugin: true,
    },
    devOptions: {
      enabled: !process.env.DISABLE_PWA,
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
      appTitle: 'Your home for deep work',
      appSubtitle: 'We swim in an ocean of knowledge. Discover its pearls of wisdom with Octo.',
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
      linkFeedback: '',
      openaiApiKey: '',
      stripeMonthlyPrice: '',
    },
  },

  sourcemap: true,
  ssr: !process.env.DISABLE_SSR,

  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
  },

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    plugins: [
      nodePolyfills({
        globals: {
          Buffer: false,
          global: false,
          process: false,
        },
        include: ['path'],
      }),
      svgPlugin(),
    ],
    server: {
      // This is currently ignored due to a Nuxt bug.
      // https://github.com/nuxt/nuxt/issues/27558#issuecomment-2254471601
      hmr: {
        port: 8888,
        protocol: 'ws',
      },
      strictPort: true,
    },
  },
})
