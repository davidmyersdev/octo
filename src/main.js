import { getAuth } from 'firebase/auth'
import { createApp } from 'vue'
import { Vue3Mq } from 'vue3-mq'

import App from '/src/App.vue'
import Extendable from '/src/components/Extendable.vue'
import SimpleBar from '/lib/simplebar/src/SimpleBar.vue'
import { init } from '/src/firebase'
import { router } from '/src/router'
import { store } from '/src/store'

import '/src/assets/app.css'

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

// init firebase
init()

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
if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
  store.dispatch(SET_MOD_KEY, '⌘ cmd')
}

const app = createApp(App)

app.config.globalProperties.$packageManager = PackageManager
app.use(router)
app.use(store)
app.component('Extendable', Extendable)
app.component('SimpleBar', SimpleBar)
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

getAuth().onAuthStateChanged(async (user) => {
  store.commit(SET_USER, user)

  if (user) {
    await user.getIdToken(true)

    const decodedToken = await user.getIdTokenResult()
    const pro = decodedToken.claims.ambassador || (decodedToken.claims.stripeRole === 'subscriber')

    store.commit(SET_SUBSCRIPTION, {
      pro,
    })
  }
})
