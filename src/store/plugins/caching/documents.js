import localforage from 'localforage';
import Debouncer from '@/common/debouncer';

import { encrypt } from '@/common/crypto/crypto';

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

const find = (state, clientId) => {
  return state.documents.all.find(doc => doc.clientId === clientId);
};

export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
        const found = find(state, payload.document.clientId);

        if (found) {
          debouncer.debounce(found.clientId, () => {
            if (state.settings.crypto.enabled && state.settings.crypto.publicKey && !found.encrypted) {
              encrypt({
                data: found.text,
                publicKey: state.settings.crypto.publicKey,
              }).then((encrypted) => {
                const secureDoc = Object.assign({}, found, {
                  dataKey: encrypted.cipherKey,
                  encrypted: true,
                  iv: encrypted.iv,
                  tags: [], // tags will be restored upon decryption
                  text: encrypted.cipher,
                });

                cache.setItem(found.clientId, secureDoc);
              });
            } else {
              cache.setItem(found.clientId, found);
            }
          });
        }

        break;
      case SETTINGS_LOADED:
        // load all documents from the cache after settings are loaded
        cache.keys()
          .then(ids => Promise.all(ids.map(id => cache.getItem(id))))
          .then(docs => store.dispatch(LOAD_DOCUMENTS, docs))
          .then(() => store.dispatch(DOCUMENTS_LOADED));
        break;
      default:
        break;
    }
  });
};
