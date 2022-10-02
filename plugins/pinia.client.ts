import { caching } from '/src/stores/plugins'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(caching)
})
