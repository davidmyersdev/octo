import { isClient } from '#helpers/environment'

export const useHooks = () => {
  const nuxtApp = useNuxtApp()
  const isHydrated = ref(false)
  const isHydrating = computed(() => nuxtApp.isHydrating)
  const isMounted = ref(false)

  const onHydratedCallbacks = ref<Array<() => void>>([])
  const onMountedCallbacks = ref<Array<() => void>>([])

  /**
   * Behaves like `onNuxtReady` except you can call it asynchronously. If `onNuxtReady` has already been triggered, the callback will run immediately.
   *
   * @param callback The function you want to run when `onNuxtReady` is triggered.
   */
  const runOnHydrated = (callback: () => void) => {
    if (isHydrated.value) {
      callback()
    } else {
      onHydratedCallbacks.value.push(callback)
    }
  }

  /**
   * Behaves like `onMounted` except you can call it asynchronously. If `onMounted` has already been triggered, the callback will run immediately.
   *
   * @param callback The function you want to run when `onMounted` is triggered.
   */
  const runOnMounted = (callback: () => void) => {
    if (isMounted.value) {
      callback()
    } else {
      onMountedCallbacks.value.push(callback)
    }
  }

  onMounted(() => {
    isMounted.value = true

    for (const callback of onMountedCallbacks.value) try {
      callback()
    } catch (error) {
      console.error(error)
    }
  })

  onNuxtReady(() => {
    if (isClient) {
      isHydrated.value = true

      for (const callback of onHydratedCallbacks.value) try {
        callback()
      } catch (error) {
        console.error(error)
      }
    }
  })

  return {
    isMounted,
    isHydrated,
    isHydrating,
    runOnHydrated,
    runOnMounted,
  }
}
