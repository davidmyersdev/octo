export const useAppearance = () => {
  const appearance = useColorMode({
    emitAuto: true,
    modes: {
      october: 'dark october',
    },
  })

  return {
    appearance,
  }
}

export const useBaseAppearance = () => {
  const { appearance } = useAppearance()
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
