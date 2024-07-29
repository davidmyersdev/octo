import { useLocalStorage } from '@vueuse/core'
import { useToggle } from './useToggle'

export const useZen = () => {
  const isZen = useLocalStorage('isZen', false, { initOnMounted: true })
  const { toggle: toggleZen } = useToggle({ state: isZen })

  return {
    isZen,
    toggleZen,
  }
}
