import { caching } from '#root/src/stores/plugins'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(caching)
})
