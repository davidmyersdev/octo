import { computed } from 'vue'
import { useStore } from 'vuex'

import type { User } from 'firebase/auth'
import type { Subscription } from '#root/types/types'

export const subscription = computed<Subscription>(() => {
  return useStore().state.auth.subscription
})

export const user = computed<User>(() => {
  return useStore().state.auth.user
})
