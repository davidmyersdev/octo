import { navigator } from '#helpers/globals'

export const useDevice = () => {
  const { lazyComputed, lazyRef } = useHooks()
  const mq = useMq()

  const isApple = lazyRef(/mac|ipod|iphone|ipad/i.test(navigator?.platform || navigator?.userAgentData?.platform!), true)
  const isMobile = lazyComputed(() => ['xs', 'sm', 'md'].includes(mq.current), true)
  const isDesktop = computed(() => !isMobile.value)
  const modKey = computed(() => isApple.value ? '⌘' : '⌃')

  return {
    isApple,
    isDesktop,
    isMobile,
    modKey,
  }
}
