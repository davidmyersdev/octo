import { store } from '/src/store'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
