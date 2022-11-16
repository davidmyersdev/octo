import { useColorMode } from '@vueuse/core'

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
