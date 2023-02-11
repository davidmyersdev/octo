import PackageManager from '#root/src/packages/manager'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$packageManager = PackageManager
})
