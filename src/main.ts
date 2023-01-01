import { createPinia } from 'pinia'
import { createApp, h } from 'vue'
import { Vue3Mq } from 'vue3-mq'
import CoreScrollable from '/components/CoreScrollable.vue'
import Extendable from '/components/Extendable.vue'
import App from '/app.vue'
import { router } from '/src/router'
import { store } from '/src/store'
import { caching } from '/src/stores/plugins'

// Auto-imported by Nuxt
import '/assets/css/tailwind.css'

import PackageManager from '/src/packages/manager.js'

const app = createApp({
  render: () => h(App),
})
const pinia = createPinia()

pinia.use(caching)

// plugins/plugins.ts
app.config.globalProperties.$packageManager = PackageManager

app.use(pinia)
app.use(router)
app.use(store)
app.component('CoreScrollable', CoreScrollable)
app.component('Extendable', Extendable)
app.use(Vue3Mq, {
  breakpoints: {
    xs: 0,
    sm: 577,
    md: 769,
    lg: 993,
    xl: 1201,
  },
})
app.mount('#app')
