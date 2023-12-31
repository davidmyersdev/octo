import { type UserConfig, defineConfig } from 'vitest/config'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgPlugin from 'vite-svg-loader'

export const config = {
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
  test: {
    environment: 'happy-dom',
  },
} satisfies UserConfig

// https://vitejs.dev/config/
export default defineConfig(config)
