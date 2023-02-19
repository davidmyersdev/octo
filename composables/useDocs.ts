import { useStore } from 'vuex'
import type Doc from '#root/src/models/doc'

export const useDocs = () => {
  const store = useStore()
  const router = useRouter()
  const docs = computed<Doc[]>(() => store.getters.decrypted)
  const doc = computed<Doc | undefined>(() => docs.value.find((doc: Doc) => doc.id === router.currentRoute.value.params.docId))

  return {
    doc,
    docs,
  }
}
