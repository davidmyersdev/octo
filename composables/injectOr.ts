import { type InjectionKey, inject } from 'vue'

/**
 * This utility wraps the Vue `inject` function to allow a fallback value even when the key is set.
 *
 * Fallback values are only used by `inject` when the _key_ is not set, so it is possible for an ancestor to provide
 * the key with `undefined` as its value. With this utility, the fallback value is used if the key is not set _or_ if
 * the key is set to `undefined`.
 *
 * @example
 *
 * const counter = injectOr('counter', () => ({ count: 0 }))
 *
 * @param key The injection key.
 * @param factoryFn The factory function that will be used to create the fallback value if nothing is injected.
 * @returns The injected value or the fallback value if nothing is injected.
 */
export const injectOr = <ReturnValue>(key: string | InjectionKey<ReturnValue>, factoryFn: () => ReturnValue) => {
  const injected = inject(key, undefined)

  if (typeof injected === 'undefined') {
    return factoryFn()
  }

  return injected
}
