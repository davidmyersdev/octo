import Fuse from 'fuse.js'

const sortByScore = <T extends { score?: number }>(list: T[]) => {
  return list.sort((a, b) => {
    return (a.score ?? 1) - (b.score ?? 1)
  })
}

const fuzzy = <T>(list: Ref<T[]>, keys: string[]) => {
  return new Fuse(list.value, { includeScore: true, keys })
}

export const useSearch = <T>(list: Ref<T[]>, { keys }: { keys: string[] }) => {
  const filterer = computed(() => fuzzy(list, keys))
  const searchQuery = ref('')
  const searchResults = computed(() => sortByScore(filterer.value.search(searchQuery.value)))

  return {
    searchQuery,
    searchResults,
  }
}
