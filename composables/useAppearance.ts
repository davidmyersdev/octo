export type Appearance = BaseAppearance | 'october'
export type BaseAppearance = 'auto' | 'dark' | 'light'

export const useAppearance = () => {
  const appearance = useColorMode({
    emitAuto: true,
    modes: {
      october: 'dark october',
    },
  })
  const baseAppearance = computed(() => appearance.value === 'october' ? 'dark' : appearance.value)
  const isAuto = computed(() => baseAppearance.value === 'auto')
  const isDark = computed(() => baseAppearance.value === 'dark')
  const isLight = computed(() => baseAppearance.value === 'light')

  return {
    appearance,
    baseAppearance,
    isAuto,
    isDark,
    isLight,
  }
}
