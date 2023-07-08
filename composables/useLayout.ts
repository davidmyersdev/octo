import { useStorage } from '@vueuse/core'

export const useLayout = () => {
  const { lazyComputed } = useHooks()

  const showMenuCache = useStorage<boolean>('showMenu', false)
  const showMetaCache = useStorage<boolean>('showMeta', false)
  const showMenu = lazyComputed(() => showMenuCache.value)
  const showMeta = lazyComputed(() => showMetaCache.value)

  const toggleMenu = () => showMenuCache.value = !showMenu.value
  const toggleMeta = () => showMetaCache.value = !showMeta.value

  return {
    showMenu,
    showMeta,
    toggleMenu,
    toggleMeta,
  }
}
