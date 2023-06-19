import { caching } from '#root/src/stores/plugins'

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-expect-error $pinia is unknown.
  nuxtApp.$pinia.use(caching)
})
