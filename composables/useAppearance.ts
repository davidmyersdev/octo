const buildAppearance = () => {
  const { runOnHydrated } = useHooks()
  const rootElement = ref<HTMLElement>()
  const handler = ref<(mode: typeof store.value) => void>()
  const { store, system: resolved } = useColorMode({
    modes: {
      auto: 'auto',
      october: 'dark october',
    },
    onChanged: (mode, defaultHandler) => {
      handler.value = (mode) => {
        runOnHydrated(() => {
          defaultHandler(mode)
        })
      }

      handler.value(mode)
    },
  })

  const system = computed(() => store.value === 'auto' ? store.value : resolved.value)
  const isAuto = computed(() => system.value === 'auto')
  const isDark = computed(() => system.value === 'dark')
  const isLight = computed(() => system.value === 'light')

  useMutationObserver(rootElement, (entries) => {
    entries.forEach((entry) => {
      if (entry.type === 'attributes') {
        if (rootElement.value?.classList.contains('auto') && store.value !== 'auto') {
          handler.value?.(store.value)
        }
      }
    })
  }, { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] })

  runOnHydrated(() => {
    rootElement.value = document.documentElement

    handler.value?.(store.value)
  })

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
