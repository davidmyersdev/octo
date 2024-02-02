import { useStorage } from '@vueuse/core'

export const useLayout = () => {
  const showMenu = useStorage<boolean>('showMenu', false, undefined, {
    initOnMounted: true,
  })
  const showMeta = useStorage<boolean>('showMeta', false, undefined, {
    initOnMounted: true,
  })

  const toggleMenu = () => showMenu.value = !showMenu.value
  const toggleMeta = () => showMeta.value = !showMeta.value

  return {
    showMenu,
    showMeta,
    toggleMenu,
    toggleMeta,
  }
}
