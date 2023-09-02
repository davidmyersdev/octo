import { defineConfig } from 'vite'
import svgPlugin from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgPlugin(),
  ],
})
