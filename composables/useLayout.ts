import { useStorage } from '@vueuse/core'

export const useLayout = () => {
  const showMenu = ref(false)
  const showMeta = ref(false)

  const showMenuCache = useStorage<boolean>('showMenu', false)
  const showMetaCache = useStorage<boolean>('showMeta', true)

  onMounted(() => {
    showMenu.value = showMenuCache.value
    showMeta.value = showMetaCache.value
  })

  watch(showMenu, () => showMenuCache.value = showMenu.value)
  watch(showMeta, () => showMetaCache.value = showMeta.value)

  const toggleMenu = () => showMenu.value = !showMenu.value
  const toggleMeta = () => showMeta.value = !showMeta.value

  return {
    showMenu,
    showMeta,
    toggleMenu,
    toggleMeta,
  }
}
