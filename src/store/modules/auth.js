import { getAuth } from 'firebase/auth'
import { SIGN_OUT } from '#root/src/store/actions'

export const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION'
export const SET_USER = 'SET_USER'

export default {
  state: () => ({
    isEvaluated: false,
    subscription: {
      pro: false,
    },
    user: null,
  }),
  mutations: {
    [SET_SUBSCRIPTION] (state, subscription) {
      state.subscription = subscription
    },
    [SET_USER] (state, user) {
      state.user = user

      // set auth as evaluated
      state.isEvaluated = true
    },
  },
  actions: {
    async [SET_USER] (context, payload) {
      context.commit(SET_USER, payload)
    },
    async [SIGN_OUT] (context, payload) {
      getAuth().signOut()

      // clear user
      return context.dispatch(SET_USER, { user: null })
    },
  },
}
