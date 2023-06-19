import { type RouterLinkProps } from 'vue-router'
import { isClient } from '#helpers/environment'
import { queryCounterKey } from './useQueryCounter'

export const useSoftNavigation = () => {
  const router = useRouter()
  const previousCounter = computed(() => router.currentRoute.value.query.l as string)
  const counter = computed(() => previousCounter.value ? parseInt(previousCounter.value) + 1 : 0)

  provide(queryCounterKey, counter)

  return {
    pushRoute: (to: RouterLinkProps['to']) => {
      const resolved = router.resolve(to)

      if (isClient) {
        // This will prevent components from reloading (the behavior of router.push).
        window.history.pushState(window.history.state, '', resolved.fullPath)
      }
    },
    replaceRoute: (to: RouterLinkProps['to']) => {
      const resolved = router.resolve(to)

      if (isClient) {
        // This will prevent components from reloading (the behavior of router.push).
        window.history.replaceState(window.history.state, '', resolved.fullPath)
      }
    },
  }
}
