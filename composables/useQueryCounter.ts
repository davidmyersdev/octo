import { type RouterLinkProps } from 'vue-router'

export const queryCounterKey = Symbol('queryCounter') as InjectionKey<Ref<number>>

export const useQueryCounter = (to: Ref<RouterLinkProps['to']>) => {
  const router = useRouter()
  const counter = inject(queryCounterKey, ref(0))
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
