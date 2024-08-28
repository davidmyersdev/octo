import { type Plugin, type Store } from 'vuex'
import { debouncer } from '/src/common/debouncer'
import { db } from '/src/db'
import { type Doc, pack, unpack } from '/src/models/doc'
import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENTS,
  MERGE_DOCUMENT,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SHARE_DOCUMENT,
  TOUCH_DOCUMENT,
} from '/src/store/actions'

const { debounce } = debouncer(100)

const find = (state: Store<any>['state'], id: string) => {
  return state.documents.all.find((doc: Doc) => doc.id === id)
}

const docsPlugin: Plugin<any> = (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case MERGE_DOCUMENT:
      case RESTORE_DOCUMENT:
      case RESTRICT_DOCUMENT:
      case SHARE_DOCUMENT:
      case TOUCH_DOCUMENT:
        // eslint-disable-next-line no-case-declarations
        const found = find(state, payload.id)

        if (found) {
          debounce(found.id, async () => {
            const doc = await pack(found)

            await db.docs.put(doc, found.id)
          })
        }

        break
      default:
        break
    }
  })
}

export const loadDocs = async (store: Store<any>) => {
  const settings = await db.settings.get('main')
  const { privateKey } = settings?.crypto || {}
  const packedDocs = await db.docs.toArray()
  const docs = await Promise.all(
    packedDocs.map((doc) => {
      const packed = Object.assign({}, doc, { id: (doc!.id || doc!.clientId), textKey: (doc!.textKey || doc!.dataKey) })

      return unpack(packed, { privateKey })
    }),
  )

  await store.dispatch(LOAD_DOCUMENTS, docs)
  await store.dispatch(DOCUMENTS_LOADED)
}

export default docsPlugin
