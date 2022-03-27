import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

import { config as pwaConfig } from './pwa.config'

const { parsed } = dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    injectHtml({ data: parsed }),
    VitePWA(pwaConfig),
  ],
})
