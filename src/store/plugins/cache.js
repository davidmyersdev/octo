import localforage from 'localforage';
import Debouncer from '@/common/debouncer';

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
            cache.setItem(found.clientId, found);
          });
        }

        break;
      default:
        break;
    }
  });
};
