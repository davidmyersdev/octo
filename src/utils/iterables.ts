import { defineProperties } from '#root/src/utils/objects'

type Predicate<T> = (item: T, index: number, items: T[]) => Promise<boolean>

interface AIterable<T> extends AsyncIterable<T> {
  any: (predicate: Predicate<T>) => Promise<T>
  first: (predicate: Predicate<T>) => Promise<T | void>
}

export const AsyncIterable = <T>(iterable: T[]): AIterable<T> => {
  const asyncIterable = [...iterable]

  defineProperties(asyncIterable, {
    [Symbol.asyncIterator]: {
      value: () => {
        let index = 0

        return {
          next: async (): Promise<IteratorResult<T, T>> => {
            const done = index === asyncIterable.length
            const value = asyncIterable[index++]

            return Promise.resolve({ done, value })
          },
          return: async (): Promise<IteratorReturnResult<void>> => {
            return Promise.resolve({ done: true, value: undefined })
          },
        }
      },
    },
    any: {
      value: async (predicate: Predicate<T>) => {
        return anyAsync(asyncIterable, predicate)
      },
    },
    first: {
      value: async (predicate: Predicate<T>) => {
        return firstAsync(asyncIterable, predicate)
      },
    },
  })

  return asyncIterable
}

export const anyAsync = async <T>(iterable: T[], predicate: Predicate<T>): Promise<T> => {
  return Promise.any(
    iterable.map(async (item, index, items) => {
      if (await predicate(item, index, items)) {
        return item
      }

      throw new Error()
    })
  ).catch()
}

export const firstAsync = async <T>(iterable: T[], predicate: Predicate<T>): Promise<T | void> => {
  for (const [index, item] of iterable.entries()) {
    if (await predicate(item, index, iterable)) {
      return item
    }
  }
}
