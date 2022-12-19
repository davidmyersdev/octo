import { useStorage } from '@vueuse/core'
import { getAuth } from 'firebase/auth'
import { useStore } from 'vuex'
import { type User } from '/composables'
import { globalConfig } from '/src/global'

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
      } else {
        user.value = {
          id: undefined,
          providers: [],
          roles: [],
        }

        store.commit('SET_USER', null)
        store.commit('SET_SUBSCRIPTION', { pro: false })
      }
    })
  }
}
