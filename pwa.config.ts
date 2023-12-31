import type { PwaModuleOptions } from '@vite-pwa/nuxt'

const defineConfig = (config: Partial<PwaModuleOptions>): Partial<PwaModuleOptions> => {
  return config
}

export const config = defineConfig({
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
      // Ignore Cypress routes.
      /^\/__/,
      // Keep this around for backward compatibility.
      /^\/manifest\.json$/,
      // Keep this around for backward compatibility.
      /^\/service-worker\.js$/,
      /cypress/,
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
})
