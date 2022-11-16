import { useStorage } from '@vueuse/core'
import { getAuth } from 'firebase/auth'
import { createPinia } from 'pinia'
import { createApp, h, provide } from 'vue'
// @ts-ignore
import { Vue3Mq } from 'vue3-mq'
import CoreScrollable from '/components/CoreScrollable.vue'
import Extendable from '/components/Extendable.vue'
import { type User, useAppearance } from '/composables'
import App from '/src/App.vue'
import { init } from '/src/firebase'
import { globalConfig } from '/src/global'
import { router } from '/src/router'
import { store } from '/src/store'
import { caching } from '/src/stores/plugins'

import '/src/assets/app.css'
import 'overlayscrollbars/overlayscrollbars.css'

// import the service worker
import '/src/sw.js'

import {
  SET_MOD_KEY,
  SET_OFFLINE,
  SET_ONLINE,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'

import { SET_SUBSCRIPTION, SET_USER } from '/src/store/modules/auth'

import PackageManager from '/src/packages/manager.js'

const updateAppHeight = () => {
  document.documentElement.style.setProperty('--app-height', `calc(${window.visualViewport.height}px - 1px)`)
}

// init firebase
init()

// set the app height
updateAppHeight()

window.visualViewport.addEventListener('resize', updateAppHeight)

if (localStorage.getItem('octo/welcome/v1') === null) {
  store.dispatch(SET_SHOW_WELCOME, true)
}

window.addEventListener('offline', () => {
  store.dispatch(SET_OFFLINE)
})

window.addEventListener('online', () => {
  store.dispatch(SET_ONLINE)
})

if (!navigator.onLine) {
  store.dispatch(SET_OFFLINE)
}

// TODO: Determine whether we need both of these.
// @ts-ignore
if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
  store.dispatch(SET_MOD_KEY, '⌘')
}

const app = createApp({
  render: () => h(App),
  setup() {
    // https://github.com/vueuse/vueuse/issues/1595
    const email = useStorage<string>('email', '')
    const user = useStorage<User>('user', {
      id: undefined,
      providers: [],
      roles: [],
    }, undefined, { mergeDefaults: true })
    const { appearance } = useAppearance()

    provide('appearance', appearance)
    provide('email', email)
    provide('user', user)

    if (globalConfig.supportsFirebase) {
      getAuth().onIdTokenChanged(async (authUser) => {

        if (authUser) {
          user.value = {
            ...user.value,
            id: authUser.uid,
            providers: [...authUser.providerData],
          }

          store.commit(SET_USER, authUser)

          const token = await authUser.getIdTokenResult(true)

          if (token.claims.ambassador && !user.value.roles.includes('ambassador')) {
            user.value = {
              ...user.value,
              roles: [...user.value.roles, 'ambassador'],
            }

            store.commit(SET_SUBSCRIPTION, { pro: true })
          }

          if (token.claims.stripeRole === 'subscriber' && !user.value.roles.includes('subscriber')) {
            user.value = {
              ...user.value,
              roles: [...user.value.roles, 'subscriber'],
            }

            store.commit(SET_SUBSCRIPTION, { pro: true })
          }
        } else {
          user.value = {
            id: undefined,
            providers: [],
            roles: [],
          }

          store.commit(SET_USER, null)
          store.commit(SET_SUBSCRIPTION, { pro: false })
        }
      })
    }
  },
})
const pinia = createPinia()

pinia.use(caching)

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
