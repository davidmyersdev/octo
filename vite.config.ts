import { defineConfig } from 'vite'
import { VitePWA as pwaPlugin } from 'vite-plugin-pwa'
import svgPlugin from 'vite-svg-loader'
import { config as pwaConfig } from './pwa.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pwaPlugin(pwaConfig),
    svgPlugin(),
  ],
})
