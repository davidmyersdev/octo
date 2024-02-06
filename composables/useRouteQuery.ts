import { isClient } from '#helpers/environment'

export const useRouteQuery = () => {
  const router = useRouter()
  const query = ref(router.currentRoute.value.query.q as string || '')

  watch(query, () => {
    const resolved = router.resolve({
      ...router.currentRoute.value,
      query: {
        ...router.currentRoute.value.query,
        q: query.value,
      },
    })

    if (isClient) {
      // This will replace the browser history's current state with the new query.
      // This is necessary to prevent the entire component from reloading (the behavior of router.replace).
      window.history.replaceState(window.history.state, '', resolved.fullPath)
    }
  })

  return {
    query,
  }
}
