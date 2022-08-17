import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import { config as pwaConfig } from './pwa.config'

// const { parsed = {} } = dotenv.config()
// const fathom = {
//   script: '',
//   siteId: parsed.VITE_FATHOM_SITE_ID,
//   siteUrl: parsed.VITE_FATHOM_SITE_URL,
// }

// if (fathom.siteId && fathom.siteUrl) {
//   fathom.script = `<script src="${fathom.siteUrl}/script.js" data-auto="false" data-site="${fathom.siteId}" defer></script>`
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA(pwaConfig),
  ],
})
