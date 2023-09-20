import { type InjectionKey, provide } from 'vue'
import { injectOr } from './injectOr'

/**
 * This utility uses the `injectOr` function to _provide and return_ a value if one is not injected. The traditional
 * inject/provide mechanism will override injected values with provided values, but this utility will only provide a
 * value if one is not injected. This aligns better with typical dependency injection approaches. Multiple components
 * can define default values for the same key, but the value provided furthest up the component tree will be used by
 * all descendants.
 *
 * @example
 *
 * const counter = injectOrProvide('counter', () => ({ count: 0 }))
 *
 * @param key The injection key.
 * @param factoryFn The factory function that will be used to create the fallback value if nothing is injected.
 * @returns The injected value or the fallback value if nothing is injected.
 */
export const injectOrProvide = <ReturnValue>(
  key: string | InjectionKey<ReturnValue>,
  factoryFn: () => ReturnValue,
): ReturnValue => {
  return injectOr(key, () => {
    const provided = factoryFn()

    provide(key, provided)

    return provided
  })
}
