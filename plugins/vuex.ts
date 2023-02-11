import { store } from '#root/src/store'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
