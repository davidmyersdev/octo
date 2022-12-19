import { caching } from '/src/stores/plugins'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(caching)
})
