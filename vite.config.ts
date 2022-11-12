import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

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
    sourcemap: true,
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          ...parsed,
          fathomScript: fathom.script,
        },
      },
    }),
    VitePWA(pwaConfig),
  ],
})
