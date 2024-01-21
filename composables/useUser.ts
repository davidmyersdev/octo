import { useStorage } from '@vueuse/core'
import { type User } from '#composables/useAuth'

export const useUser = () => {
  const email = useStorage<string>('email', '', undefined, { initOnMounted: true })
  const user = useStorage<User>('user', {
    id: undefined,
    providers: [],
    roles: [],
  }, undefined, { initOnMounted: true, mergeDefaults: true })

  return {
    email,
    user,
  }
}
