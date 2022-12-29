import { useStorage } from '@vueuse/core'
import { getAuth } from 'firebase/auth'
import { useStore } from 'vuex'
import { type User } from '/composables'
import { init } from '/src/firebase'
import { globalConfig } from '/src/global'

const updateAppHeight = () => {
  document.documentElement.style.setProperty('--app-height', `calc(${window.visualViewport.height}px - 1px)`)
}

export const useRoot = () => {
  // https://github.com/vueuse/vueuse/issues/1595
  const email = useStorage<string>('email', '')
  const user = useStorage<User>('user', {
    id: undefined,
    providers: [],
    roles: [],
  }, undefined, { mergeDefaults: true })
  const { appearance } = useAppearance()
  const store = useStore()
  const { emit } = useHooks()

  provide('appearance', appearance)
  provide('email', email)
  provide('user', user)

  if (localStorage.getItem('octo/welcome/v1') === null) {
    store.dispatch('SET_SHOW_WELCOME', true)
  }

  window.addEventListener('offline', () => {
    store.dispatch('SET_OFFLINE')
  })

  window.addEventListener('online', () => {
    store.dispatch('SET_ONLINE')
  })

  if (!navigator.onLine) {
    store.dispatch('SET_OFFLINE')
  }

  // TODO: Determine whether we need both of these.
  // @ts-ignore
  if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
    store.dispatch('SET_MOD_KEY', '⌘')
  }

  // Initialize Firebase
  init()

  // Ensure the app height is always correct.
  updateAppHeight()
  window.visualViewport.addEventListener('resize', updateAppHeight)

  if (globalConfig.supportsFirebase) {
    getAuth().onIdTokenChanged(async (authUser) => {
      if (authUser) {
        user.value = {
          ...user.value,
          id: authUser.uid,
          providers: [...authUser.providerData],
        }

        store.commit('SET_USER', authUser)

        const token = await authUser.getIdTokenResult(true)

        if (token.claims.ambassador && !user.value.roles.includes('ambassador')) {
          user.value = {
            ...user.value,
            roles: [...user.value.roles, 'ambassador'],
          }

          store.commit('SET_SUBSCRIPTION', { pro: true })
        }

        if (token.claims.stripeRole === 'subscriber' && !user.value.roles.includes('subscriber')) {
          user.value = {
            ...user.value,
            roles: [...user.value.roles, 'subscriber'],
          }

          store.commit('SET_SUBSCRIPTION', { pro: true })
        }

        emit('user_logged_in')
      } else {
        user.value = {
          id: undefined,
          providers: [],
          roles: [],
        }

        store.commit('SET_USER', null)
        store.commit('SET_SUBSCRIPTION', { pro: false })

        emit('user_logged_out')
      }
    })
  }
}
