import dotenv from 'dotenv'
import autoImportPlugin from 'unplugin-auto-import/vite'
import autoImportVuePlugin from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { createHtmlPlugin as htmlPlugin } from 'vite-plugin-html'
import { VitePWA as pwaPlugin } from 'vite-plugin-pwa'
import svgPlugin from 'vite-svg-loader'
import vuePlugin from '@vitejs/plugin-vue'
import { config as pwaConfig } from './pwa.config'

const { parsed = {} } = dotenv.config()
const fathom = {
  script: '',
  siteId: process.env.NUXT_PUBLIC_FATHOM_SITE_ID || parsed.NUXT_PUBLIC_FATHOM_SITE_ID,
  siteUrl: process.env.NUXT_PUBLIC_FATHOM_SITE_URL || parsed.NUXT_PUBLIC_FATHOM_SITE_URL,
}

if (fathom.siteId && fathom.siteUrl) {
  fathom.script = `<script src="${fathom.siteUrl}/script.js" data-auto="false" data-site="${fathom.siteId}" defer></script>`
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
  },
  envPrefix: 'NUXT_PUBLIC_',
  plugins: [
    autoImportPlugin({
      dirs: [
        './composables/**',
      ],
      imports: [
        '@vueuse/core',
        'pinia',
        'vue',
        'vue-router',
      ],
      vueTemplate: true,
    }),
    autoImportVuePlugin({
      dirs: [
        './components/**',
      ],
    }),
    htmlPlugin({
      inject: {
        data: {
          ...parsed,
          fathomScript: fathom.script,
        },
      },
    }),
    pwaPlugin(pwaConfig),
    svgPlugin(),
    vuePlugin(),
  ],
})
