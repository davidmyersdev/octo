import { navigator } from '#helpers/globals'

export const useDevice = () => {
  const mq = useMq()

  const isApple = ref(true)
  const isMobile = computed(() => ['xs', 'sm', 'md'].includes(mq.value.current))
  const isDesktop = computed(() => !isMobile.value)
  const modKey = computed(() => isApple.value ? '⌘' : '⌃')

  onMounted(() => {
    isApple.value = /mac|ipod|iphone|ipad/i.test(navigator?.platform || navigator?.userAgentData?.platform || '')
  })

  return {
    isApple,
    isDesktop,
    isMobile,
    modKey,
  }
}
