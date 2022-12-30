import { useStore } from 'vuex'
import type Doc from '/src/models/doc'

export const useDocs = () => {
  const store = useStore()
  const route = useRoute()
  const docs = computed(() => store.getters.decrypted)
  const doc = computed(() => docs.value.find((doc: Doc) => doc.id === route.params.docId))

  return {
    doc,
    docs,
  }
}
