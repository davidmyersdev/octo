import { injectOr } from '#composables/injectOr'
import { describe, expect, it, shallowMount, vi } from '#test-utils'

describe('injectOr', () => {
  it('returns the injected value', () => {
    const injectionKey = 'test-key'
    const injectedValue = 'injected-value'
    const fallbackValue = 'fallback-value'
    const config = { global: { provide: { [injectionKey]: injectedValue } } }

    shallowMount({
      setup: () => {
        const result = injectOr(injectionKey, () => fallbackValue)

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
        const result = injectOr(injectionKey, () => fallbackValue)

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
        const result = injectOr('fake-key', () => fallbackValue)

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
        injectOr(injectionKey, fallbackFactory)

        expect(fallbackFactory).not.toHaveBeenCalled()
      },
      render: () => {},
    }, config)
  })
})
