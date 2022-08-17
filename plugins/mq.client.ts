// @ts-ignore
import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 577,
      md: 769,
      lg: 993,
      xl: 1201,
    },
  })
})
