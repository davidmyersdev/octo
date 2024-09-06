export const buildSettings = () => {
  const { store } = useVuex()
  const legacySettings = computed(() => store.state.settings)

  return {
    legacySettings,
  }
}

export const useSettings = () => injectOrProvide('settings', buildSettings)
