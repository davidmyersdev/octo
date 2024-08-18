import * as appEvents from '#helpers/app'
import { isClient } from '#helpers/environment'

if (isClient) {
  window.appEvents = appEvents
}

export default defineNuxtPlugin((nuxtApp) => {
  globalThis.isNuxt = true

  nuxtApp.vueApp.config.performance = true
})
