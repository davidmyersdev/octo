import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'
import { createVuePlugin } from 'vite-plugin-vue2'

import { config as pwaConfig } from './pwa.config'

const { parsed } = dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    injectHtml({ data: parsed }),
    VitePWA(pwaConfig),
  ],
})
