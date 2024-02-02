import { useMq as useVendorMq } from 'vue3-mq'
import { useVue } from '#shared/composables'

export const useMq = () => {
  const { isMounted } = useVue()
  const vendorMq = useVendorMq()
  const placeholder = ref<typeof vendorMq>({
    current: 'xs',
    isDark: true,
    isLandscape: false,
    isLight: false,
    isPortrait: false,
    lg: false,
    lgMinus: true,
    lgPlus: false,
    md: false,
    mdMinus: true,
    mdPlus: false,
    orientation: 'portrait',
    sm: false,
    smMinus: true,
    smPlus: false,
    theme: 'dark',
    xl: false,
    xlMinus: true,
    xlPlus: false,
    xs: true,
    xxl: false,
  })

  const mq = computed(() => {
    if (isMounted.value) {
      return vendorMq
    }

    return placeholder.value
  })

  return mq
}
