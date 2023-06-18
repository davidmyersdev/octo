import { type RouterLinkProps } from 'vue-router'

export const queryCounterKey = Symbol('queryCounter') as InjectionKey<Ref<number>>

export const useQueryCounter = (to: Ref<RouterLinkProps['to']>) => {
  const router = useRouter()
  const counter = inject(queryCounterKey)
  const toWithCounter = computed(() => {
    const resolved = router.resolve(to.value)

    return {
      ...resolved,
      query: {
        ...resolved.query,
        l: counter?.value,
      },
    }
  })

  return {
    toWithCounter,
  }
}

export const useSoftNavigation = () => {
  const router = useRouter()
  const previousCounter = computed(() => router.currentRoute.value.query.l as string)
  const counter = computed(() => previousCounter.value ? parseInt(previousCounter.value) + 1 : 0)

  provide(queryCounterKey, counter)

  return {
    pushRoute: (to: RouterLinkProps['to']) => {
      const resolved = router.resolve(to)

      // This will prevent components from reloading (the behavior of router.push).
      window.history.pushState(window.history.state, '', resolved.fullPath)
    },
    replaceRoute: (to: RouterLinkProps['to']) => {
      const resolved = router.resolve(to)

      // This will prevent components from reloading (the behavior of router.push).
      window.history.replaceState(window.history.state, '', resolved.fullPath)
    },
  }
}
