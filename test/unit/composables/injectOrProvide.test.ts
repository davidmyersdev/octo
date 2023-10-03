import { h, inject } from 'vue'
import { injectOrProvide } from '#composables/injectOrProvide'
import { describe, expect, it, shallowMount, vi } from '#test-utils'

describe('injectOrProvide', () => {
  it('returns the injected value', () => {
    const injectionKey = 'test-key'
    const injectedValue = 'injected-value'
    const fallbackValue = 'fallback-value'
    const config = { global: { provide: { [injectionKey]: injectedValue } } }

    shallowMount({
      setup: () => {
        const result = injectOrProvide(injectionKey, () => fallbackValue)

        expect(result).toEqual(injectedValue)
      },
      render: () => {},
    }, config)
  })

  it('returns the fallback value if the injected value is undefined', () => {
    const injectionKey = 'test-key'
    const fallbackValue = 'fallback-value'
    const config = { global: { provide: { [injectionKey]: undefined } } }

    shallowMount({
      setup: () => {
        const result = injectOrProvide(injectionKey, () => fallbackValue)

        expect(result).toEqual(fallbackValue)
      },
      render: () => {},
    }, config)
  })

  it('returns the fallback value if the injection key is not present', () => {
    const injectionKey = 'test-key'
    const injectedValue = 'injected-value'
    const fallbackValue = 'fallback-value'
    const config = { global: { provide: { [injectionKey]: injectedValue } } }

    shallowMount({
      setup: () => {
        const result = injectOrProvide('fake-key', () => fallbackValue)

        expect(result).toEqual(fallbackValue)
      },
      render: () => {},
    }, config)
  })

  it('does not invoke the fallback factory function when a value is injected', () => {
    const injectionKey = 'test-key'
    const injectedValue = 'injected-value'
    const fallbackFactory = vi.fn()
    const config = { global: { provide: { [injectionKey]: injectedValue } } }

    shallowMount({
      setup: () => {
        injectOrProvide(injectionKey, fallbackFactory)

        expect(fallbackFactory).not.toHaveBeenCalled()
      },
      render: () => {},
    }, config)
  })

  it('provides the fallback value to descendants if nothing is injected', () => {
    const injectionKey = 'test-key'
    const fallbackValue = 'fallback-value'

    shallowMount({
      setup: () => {
        injectOrProvide(injectionKey, () => fallbackValue)

        return () => {
          return h({
            setup() {
              const result = inject(injectionKey)

              expect(result).toEqual(fallbackValue)
            },
            render: () => {},
          })
        }
      },
      render: () => {},
    })
  })
})
