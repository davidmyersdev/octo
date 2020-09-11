import localforage from 'localforage';

import Debouncer from '@/common/debouncer';

import { pack, unpack } from '@/models/doc';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENTS,
  RESTORE_DOCUMENT,
} from '@/store/actions';

import { SETTINGS_LOADED } from '@/store/modules/settings';

const cache = localforage.createInstance({
  name: 'documents',
});

const debouncer = new Debouncer(800);

const find = (state, id) => {
  return state.documents.all.find(doc => doc.id === id);
};

export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
        const found = find(state, payload.id);

        if (found) {
          debouncer.debounce(found.id, async () => {
            if (state.settings.crypto.enabled && !found.encrypted) {
              var doc = await pack(found, { publicKey: state.settings.crypto.publicKey });
            } else {
              var doc = await pack(found, { secure: false });
            }

            cache.setItem(found.id, doc);
          });
        }

        break;
      case SETTINGS_LOADED:
        // load all documents from the cache after settings are loaded
        cache.keys()
          .then(ids => Promise.all(ids.map(id => cache.getItem(id))))
          .then((docs) => {
            // unpack cached data
            return Promise.all(
              docs.map((doc) => {
                const packed = Object.assign({}, doc, { id: (doc.id || doc.clientId), textKey: (doc.textKey || doc.dataKey) });

                return unpack(packed, { privateKey: state.settings.crypto.privateKey });
              })
            );
          })
          .then(docs => store.dispatch(LOAD_DOCUMENTS, docs))
          .then(() => store.dispatch(DOCUMENTS_LOADED));
        break;
      default:
        break;
    }
  });
};
