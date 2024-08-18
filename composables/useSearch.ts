import { debouncedRef } from '@vueuse/core'
import Fuse from 'fuse.js'

type Key<T extends string> = T | { name: T, weight: number }

const fuzzy = <T extends string, Item extends Record<T, unknown> = Record<T, unknown>>(list: Ref<Item[]>, keys: Key<T>[]): Fuse<Item> => {
  return new Fuse(list.value, { includeScore: true, keys })
}

const regexSearchShape = /^\/(?<regex>.+)\/(?<flags>[a-z]*)$/s

const toKeyName = <T extends string>(key: Key<T>): T => {
  if (typeof key === 'object') {
    return key.name
  }

  return key
}

export const useSearch = <T extends string, Item extends Record<T, unknown> = Record<T, unknown>>(list: Ref<Item[]>, { keys, searchQuery = ref('') }: { keys: Key<T>[], searchQuery?: Ref<string> }) => {
  const filterer = computed(() => fuzzy(list, keys))
  const searchQueryDebounced = debouncedRef(searchQuery, 50)
  const searchResults = computed(() => {
    // 1. If there is no search query, return the entire list.
    if (!searchQueryDebounced.value) {
      return list.value
    }

    // 2. If the search query is a regex, attempt to regex-match entries in the list.
    if (regexSearchShape.test(searchQueryDebounced.value)) {
      try {
        // @ts-expect-error Throwing an error is fine, because we handle it below.
        const { groups: { flags, regex } } = regexSearchShape.exec(searchQueryDebounced.value)
        const searchRegex = new RegExp(regex, flags)

        return list.value.filter((item) => {
          return keys.some((key) => {
            const k = toKeyName(key)
            const v = item[k]

            if (typeof v === 'string') {
              return searchRegex.test(v)
            }

            return false
          })
        })
      } catch (error) {
        console.error(error)
      }
    }

    // 3. If the search query is not a regex, attempt to fuzzy-find entries in the list.
    try {
      const fuzzyResults = filterer.value.search(searchQueryDebounced.value)

      return fuzzyResults.map((result) => result.item)
    } catch (error) {
      console.error(error)
    }

    // 4. If all else fails, do a case-insensitive full-text match.
    return list.value.filter((item) => {
      return keys.some((key) => {
        const k = toKeyName(key)
        const v = item[k]

        if (typeof v === 'string') {
          return v.toLowerCase().includes(searchQueryDebounced.value.toLowerCase())
        }

        return false
      })
    })
  })

  return {
    searchQuery,
    searchResults,
  }
}
