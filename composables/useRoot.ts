import { getAuth } from 'firebase/auth'
import { useStore } from 'vuex'
import { appEventTypes, logEvent } from '#helpers/app'
import { isClient } from '#helpers/environment'
import { init } from '#root/src/firebase'

const updateAppHeight = () => {
  if (isClient && window.visualViewport) {
    const actualHeight = window.visualViewport.scale * window.visualViewport.height

    document.documentElement.style.setProperty('--app-height', `calc(${actualHeight}px - 1px)`)
  }
}

export const useRoot = () => {
  const { user } = useUser()
  const store = useStore()
  const { public: { firebaseDisabled } } = useRuntimeConfig()

  useAppearance()
  useToasts()
  useWorkers()

  onMounted(() => {
    logEvent(appEventTypes.appMounted)

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

    // Ensure the app height is always correct.
    updateAppHeight()
    window.visualViewport?.addEventListener('resize', updateAppHeight)
    window.addEventListener('resize', updateAppHeight)

    if (firebaseDisabled) { return }

    // Initialize Firebase
    init()

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

        logEvent(appEventTypes.userSignedIn)
      } else {
        user.value = {
          id: undefined,
          providers: [],
          roles: [],
        }

        store.commit('SET_USER', null)
        store.commit('SET_SUBSCRIPTION', { pro: false })

        logEvent(appEventTypes.userSignedOut)
      }
    })
  })
}
