import localforage from 'localforage';
import Debouncer from '@/common/debouncer';

import { encrypt } from '@/common/crypto/crypto';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
} from '@/store/actions';

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
            if (state.settings.crypto.enabled || found.encrypted) {
              if (state.settings.crypto.publicKey) {
                encrypt(found.text, state.settings.crypto.publicKey).then((encrypted) => {
                  const secureDoc = Object.assign({}, found, {
                    dataKey: encrypted.encryptedKey,
                    encrypted: true,
                    iv: encrypted.iv,
                    tags: [], // tags will be restored upon decryption
                    text: encrypted.cipher,
                  });

                  cache.setItem(found.clientId, secureDoc);
                });
              } else {
                console.log('publicKey missing - cannot store document');
              }
            } else {
              cache.setItem(found.clientId, found);
            }
          });
        }

        break;
      default:
        break;
    }
  });
};
