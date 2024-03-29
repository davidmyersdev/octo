import { computed } from 'vue'
import { useStore } from 'vuex'
import type { Doc } from '#root/src/models/doc'
import { useRecentDocs } from '#root/src/stores/useRecentDocs'

export const usePinnedDocs = () => {
  const store = useStore()
  const recentDocs = useRecentDocs()
  const pinnedDocs = computed(() => {
    return recentDocs.ids.reduce<Doc[]>((docs, id) => {
      const doc: Doc = store.getters.decrypted.find((doc: Doc) => doc.id === id)

      if (doc) {
        docs.push(doc)
      }

      return docs
    }, [])
  })

  const pinDoc = (id: string) => {
    recentDocs.add(id)
  }

  const unpinDoc = (id: string) => {
    recentDocs.remove(id)
  }

  return {
    pinDoc,
    pinnedDocs,
    unpinDoc,
  }
}
