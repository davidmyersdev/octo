import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { config } from './pwa.config'

const manifest = JSON.stringify(config.manifest, null, 2)

// The manifest is not being created on nuxt generate.
// https://github.com/vite-pwa/nuxt/issues/17
writeFileSync(resolve('./public/manifest.webmanifest'), manifest)
