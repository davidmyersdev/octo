import localforage from 'localforage'

import Debouncer from '/src/common/debouncer'

import { pack, unpack } from '/src/models/doc'
import { unwrap } from '/src/common/vue'

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

const find = (state, id) => {
  return state.documents.all.find(doc => doc.id === id)
}

export default (store) => {
  const debouncer = new Debouncer(800)
  const cache = localforage.createInstance({
    name: 'firebase/documents',
  })

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
        const found = find(state, payload.id)

        if (found) {
          debouncer.debounce(found.id, async () => {
            const doc = await pack(found, {
              preferEncryption: state.settings.crypto.enabled,
              publicKey: state.settings.crypto.publicKey,
            })

            cache.setItem(found.id, doc)
          })
        }

        break
      case SETTINGS_LOADED:
        // load all documents from the cache after settings are loaded
        cache.keys()
          .then(ids => Promise.all(ids.map(id => cache.getItem(id))))
          .then((docs) => {
            // unpack cached data
            return Promise.all(
              docs.map((doc) => {
                const packed = Object.assign({}, doc, { id: (doc.id || doc.clientId), textKey: (doc.textKey || doc.dataKey) })

                return unpack(packed, { privateKey: state.settings.crypto.privateKey })
              })
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
