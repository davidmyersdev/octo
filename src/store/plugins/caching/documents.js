import localforage from 'localforage'
import moment from 'moment'
import { useDatabase } from '#root/composables/useDatabase'
import Debouncer from '#root/src/common/debouncer'
import Doc, { pack, unpack } from '#root/src/models/doc'
import { SETTINGS_LOADED } from '#root/src/store/modules/settings'
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
} from '#root/src/store/actions'

const name = 'firebase/documents'

export const mainStore = localforage.createInstance({ name })

const debouncer = new Debouncer(800)

const find = (state, id) => {
  return state.documents.all.find(doc => doc.id === id)
}

export default (store) => {
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
            // Keep docs versioned on the client (maybe under a config option).
            try {
              // fetch the original doc
              const original = await mainStore.getItem(found.id)

              if (original) {
                // unpack the original doc
                const originalUnpacked = await unpack(original, { privateKey: state.settings.crypto.privateKey })
                // store the duplicate in historyStore
                const { db } = useDatabase()
                // find latest version
                const [latestVersion, ..._otherVersions] = await db.docs.where({ parentId: originalUnpacked.id }).reverse().sortBy('touchedAt')
                const unpackedLatestVersion = latestVersion && await unpack(latestVersion, { privateKey: state.settings.crypto.privateKey })
                const comparisonTime = unpackedLatestVersion?.touchedAt || originalUnpacked.createdAt
                const isAfterVersionThreshold = moment(found.touchedAt).isAfter(moment(comparisonTime).add(5, 'minutes'))
                const isSync = found.syncedAt && (!originalUnpacked.syncedAt || moment(originalUnpacked.syncedAt).isBefore(moment(found.syncedAt)))

                if (isAfterVersionThreshold || isSync) {
                  // create a copy of the original with a new id
                  const backup = new Doc({ ...originalUnpacked, id: undefined })

                  // create the relation (e.g. parentId, originalId, etc)
                  backup.parentId = found.id
                  backup.touch()

                  // pack the backup
                  const docVersion = await pack(backup, {
                    preferEncryption: state.settings.crypto.enabled,
                    publicKey: state.settings.crypto.publicKey,
                  })

                  await db.docs.add(docVersion, [docVersion.id])

                  console.log('done adding version...')
                }
              }
            } catch (error) {
              // Todo: Show a prompt to the user.
              console.error(error)
            }

            const doc = await pack(found, {
              preferEncryption: state.settings.crypto.enabled,
              publicKey: state.settings.crypto.publicKey,
            })

            // store the new version
            await mainStore.setItem(found.id, doc)

            console.log('done updating doc...')
          })
        }

        break
      case SETTINGS_LOADED:
        // load all documents from the cache after settings are loaded
        mainStore.keys()
          .then(ids => Promise.all(ids.map(id => mainStore.getItem(id))))
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
