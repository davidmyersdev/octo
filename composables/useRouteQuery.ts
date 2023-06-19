import { isClient } from '#helpers/environment'

export const useRouteQuery = () => {
  const route = useRoute()
  const router = useRouter()
  const query = ref(route.query.q as string)

  const stopWatching = watch(query, (value) => {
    const resolved = router.resolve({
      ...route,
      query: {
        ...route.query,
        q: value,
      },
    })

    if (isClient) {
      // This will replace the browser history's current state with the new query.
      // This is necessary to prevent the entire component from reloading (the behavior of router.replace).
      window.history.replaceState(window.history.state, '', resolved.fullPath)
    }
  })

  onBeforeUnmount(() => {
    stopWatching()
  })

  return {
    query,
  }
}
