const buildAppearance = () => {
  const { store, system: resolved } = useColorMode({
    initOnMounted: true,
    modes: {
      auto: 'auto',
      october: 'dark october',
    },
  })

  const system = computed(() => store.value === 'october' ? 'dark' : store.value)
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
