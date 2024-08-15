import { debouncedRef } from '@vueuse/core'
import Fuse from 'fuse.js'

const regexSearchShape = /^\/(?<regex>.+)\/(?<flags>[a-z]*)$/s

const fuzzy = <T>(list: Ref<T[]>, keys: string[]) => {
  return new Fuse(list.value, { includeScore: true, keys })
}

export const useSearch = <T extends Record<string, any>>(list: Ref<T[]>, { keys, searchQuery = ref('') }: { keys: string[], searchQuery?: Ref<string> }) => {
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
            return searchRegex.test(item[key])
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
        return item[key].toLowerCase().includes(searchQueryDebounced.value.toLowerCase())
      })
    })
  })

  return {
    searchQuery,
    searchResults,
  }
}
