import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { createHtmlPlugin as htmlPlugin } from 'vite-plugin-html'
import { VitePWA as pwaPlugin } from 'vite-plugin-pwa'
import svgPlugin from 'vite-svg-loader'
import vuePlugin from '@vitejs/plugin-vue'
import { config as pwaConfig } from './pwa.config'

const { parsed = {} } = dotenv.config()
const fathom = {
  script: '',
  siteId: process.env.VITE_FATHOM_SITE_ID || parsed.VITE_FATHOM_SITE_ID,
  siteUrl: process.env.VITE_FATHOM_SITE_URL || parsed.VITE_FATHOM_SITE_URL,
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
  plugins: [
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
