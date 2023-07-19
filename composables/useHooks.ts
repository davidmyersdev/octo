import { type ComputedGetter, type ComputedSetter } from 'vue'
import { isClient } from '#helpers/environment'

export const useHooks = () => {
  const nuxtApp = useNuxtApp()
  const isHydrated = ref(false)
  const isHydrating = computed(() => nuxtApp.isHydrating)
  const isMounted = ref(false)

  const onHydratedCallbacks = ref<Array<() => void>>([])
  const onMountedCallbacks = ref<Array<() => void>>([])

  const lazyRef = <T = unknown>(value: T, initialValue?: T) => {
    const lazy = ref(initialValue) as Ref<T>

    runOnHydrated(() => lazy.value = value)

    return lazy
  }

  const lazyComputed = <T = unknown>(callback: ComputedGetter<T>, initialValue?: T) => {
    const actual = computed(callback)
    const lazy = ref(initialValue) as Ref<T>

    watch(actual, () => {
      runOnHydrated(() => lazy.value = actual.value)
    }, { immediate: true })

    return lazy
  }

  const lazyWritableComputed = <T = unknown>(getter: ComputedGetter<T>, setter: ComputedSetter<T>, initialValue?: T) => {
    const actual = computed(getter)
    const lazy = ref(initialValue) as Ref<T>
    const lazyWritable = computed({ get: () => lazy.value, set: setter })

    watch(actual, () => {
      runOnHydrated(() => lazy.value = actual.value)
    }, { immediate: true })

    return lazyWritable
  }

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
    lazyComputed,
    lazyRef,
    lazyWritableComputed,
    runOnHydrated,
    runOnMounted,
  }
}
