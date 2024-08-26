import { type Plugin, type Store } from 'vuex'
import { storage } from '/helpers/storage'
import { debouncer } from '/src/common/debouncer'
import { type Doc, type PackedDoc, pack, unpack } from '/src/models/doc'
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
import { SETTINGS_LOADED } from '/src/store/modules/settings'

type LegacyPackedDoc = PackedDoc & {
  clientId?: string,
  dataKey?: string,
}

const cache = storage().instance({ name: 'firebase/documents' })

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

            cache.setItem(found.id, doc)
          })
        }

        break
      case SETTINGS_LOADED:
        // load all documents from the cache after settings are loaded
        cache.keys()
          .then(ids => Promise.all(ids.map(id => cache.getItem<LegacyPackedDoc>(id))))
          .then((docs) => {
            // unpack cached data
            return Promise.all(
              docs.map((doc) => {
                const packed = Object.assign({}, doc, { id: (doc!.id || doc!.clientId), textKey: (doc!.textKey || doc!.dataKey) })

                return unpack(packed, { privateKey: state.settings.crypto.privateKey })
              }),
            )
          })
          .then(docs => store.dispatch(LOAD_DOCUMENTS, docs))
          .then(() => store.dispatch(DOCUMENTS_LOADED))
        break
      default:
        break
    }
  })
}

export default docsPlugin
