const valueToSystem = {
  auto: 'auto',
  custom: 'dark',
  dark: 'dark',
  light: 'light',
} as const

export type AppearanceValue = keyof typeof valueToSystem

const buildAppearance = () => {
  const storedValue = useLocalStorage<AppearanceValue>('vueuse-color-scheme', 'auto', {
    initOnMounted: true,
  })

  watch(storedValue, () => {
    if (!Object.keys(valueToSystem).includes(storedValue.value)) {
      storedValue.value = 'auto'
    }
  })

  useHead({
    htmlAttrs: {
      'data-appearance': storedValue,
    },
  })

  const system = computed(() => {
    // Todo: Remove this extra step by making the editor use CSS variables all the time.
    if (storedValue.value === 'custom') {
      return 'dark'
    }

    if (storedValue.value === 'dark') {
      return 'dark'
    }

    if (storedValue.value === 'light') {
      return 'light'
    }

    return 'auto'
  })

  const isAuto = computed(() => system.value === 'auto')
  const isDark = computed(() => system.value === 'dark')
  const isLight = computed(() => system.value === 'light')

  return {
    isAuto,
    isDark,
    isLight,
    storedValue,
    system,
  }
}

export type Appearance = ReturnType<typeof buildAppearance>
export type SystemAppearance = 'auto' | 'dark' | 'light'

export const appearanceKey = Symbol('appearance') as InjectionKey<Appearance>

export const useAppearance = () => {
  return injectOrProvide(appearanceKey, buildAppearance)
}
