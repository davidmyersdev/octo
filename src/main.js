import Vue from 'vue'
import VueMq from 'vue-mq'

import App from '/src/App.vue'
import Extendable from '/src/components/Extendable.vue'
import { authInstance } from '/src/firebase.js'
import router from '/src/router.js'
import store from '/src/store.js'

import '/src/assets/app.css'

// setup the service worker
import '/src/sw.js'

import {
  SET_MOD_KEY,
  SET_OFFLINE,
  SET_ONLINE,
  SET_SHOW_WELCOME,
  SET_USER,
} from '/src/store/actions.js'

import PackageManager from '/src/packages/manager.js'

Vue.prototype.$packageManager = PackageManager

Vue.use(VueMq, {
  breakpoints: {
    // breakpoints match as `screen_size <= value`
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: Infinity,
  },
})

if (localStorage.getItem('octo/welcome/v1') === null) {
  store.dispatch(SET_SHOW_WELCOME, true)
}

Vue.component('Extendable', Extendable)

new Vue({
  router,
  store,
  render: h => h(App),
  async created() {
    window.addEventListener('offline', () => {
      this.$store.dispatch(SET_OFFLINE)
    })

    window.addEventListener('online', () => {
      this.$store.dispatch(SET_ONLINE)
    })

    if (!navigator.onLine) {
      await this.$store.dispatch(SET_OFFLINE)
    }

    if (/Mac|iPod|iPhone|iPad/.test(navigator.platform)) {
      this.$store.dispatch(SET_MOD_KEY, '⌘ cmd')
    }
  },
}).$mount('#app')

authInstance.onAuthStateChanged((user) => {
  store.dispatch(SET_USER, { user: user || null })
})
