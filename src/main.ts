import { getAuth } from 'firebase/auth'
import { init } from '/src/firebase'
import { globalConfig } from '/src/global'

// import the service worker
import '/src/sw.js'

import {
  SET_MOD_KEY,
  SET_OFFLINE,
  SET_ONLINE,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'

import { SET_SUBSCRIPTION, SET_USER } from '/src/store/modules/auth'

// import PackageManager from '/src/packages/manager.js'

// init firebase
init()

if (localStorage.getItem('octo/welcome/v1') === null) {
  store.dispatch(SET_SHOW_WELCOME, true)
}

// window.addEventListener('offline', () => {
//   store.dispatch(SET_OFFLINE)
// })

// window.addEventListener('online', () => {
//   store.dispatch(SET_ONLINE)
// })

if (!navigator.onLine) {
  store.dispatch(SET_OFFLINE)
}

if (globalConfig.supportsFirebase) {
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
}
