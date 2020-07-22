import localforage from 'localforage';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
} from '@/store/actions';

const cache = localforage.createInstance({
  name: 'documents',
});

const find = (state, clientId) => {
  return state.documents.all.find(doc => doc.clientId === clientId);
};

export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
        const found = find(state, payload.document.clientId);

        if (found) {
          cache.setItem(payload.document.clientId, found);
        }

        break;
      default:
        break;
    }
  });
};
