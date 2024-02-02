import { isClient } from '#helpers/environment'

export const useRouteQuery = () => {
  const router = useRouter()
  const query = computed({
    get: () => router.currentRoute.value.query.q as string,
    set: (value: string) => {
      const resolved = router.resolve({
        ...router.currentRoute.value,
        query: {
          ...router.currentRoute.value.query,
          q: value,
        },
      })

      if (isClient) {
        // This will replace the browser history's current state with the new query.
        // This is necessary to prevent the entire component from reloading (the behavior of router.replace).
        window.history.replaceState(window.history.state, '', resolved.fullPath)
      }
    },
  })

  return {
    query,
  }
}
