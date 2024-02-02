const buildAppearance = () => {
  const { store, system: resolved } = useColorMode({
    initOnMounted: true,
    modes: {
      auto: 'auto',
      october: 'dark october',
      custom: 'custom',
    },
  })

  const system = computed(() => {
    if (store.value === 'custom') {
      // Todo: Remove this extra step by making the editor use CSS variables all the time.
      return 'dark'
    }

    if (store.value === 'october') {
      return 'dark'
    }

    return store.value
  })
  const isAuto = computed(() => system.value === 'auto')
  const isDark = computed(() => system.value === 'dark')
  const isLight = computed(() => system.value === 'light')

  return {
    isAuto,
    isDark,
    isLight,
    resolved,
    store,
    system,
  }
}

export type Appearance = ReturnType<typeof buildAppearance>
export type SystemAppearance = 'auto' | 'dark' | 'light'

export const appearanceKey = Symbol('appearance') as InjectionKey<Appearance>

export const useAppearance = () => {
  const injected = inject(appearanceKey, undefined)

  if (injected) {
    return injected
  }

  const appearance = buildAppearance()

  provide(appearanceKey, appearance)

  return appearance
}
