import { computed } from 'vue'
import { useStore } from 'vuex'

import type { User } from 'firebase/auth'
import type { Subscription } from '/types/types'

export const useSubscription = () => {
  return computed<Subscription>(() => {
    return useStore()?.state.auth.subscription || { pro: false }
  })
}

export const useUser = () => {
  return computed<User>(() => {
    return useStore()?.state.auth.user || {}
  })
}
