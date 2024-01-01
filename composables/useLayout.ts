import { useStorage } from '@vueuse/core'

export const useLayout = () => {
  const { lazyComputed } = useHooks()

  const showMenuCache = useStorage<boolean>('showMenu', false, undefined, { initOnMounted: true })
  const showMetaCache = useStorage<boolean>('showMeta', false, undefined, { initOnMounted: true })
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
