import Debouncer from '@/common/debouncer';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SET_ONLINE,
  SET_USER,
  SHARE_DOCUMENT,
  SYNC,
  TOUCH_DOCUMENT,
} from '@/store/actions';

const debouncer = new Debouncer(1500);

export default (store) => {
  store.subscribe(async ({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case DOCUMENTS_LOADED:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
      case RESTRICT_DOCUMENT:
      case SET_ONLINE:
      case SET_USER:
      case SHARE_DOCUMENT:
      case TOUCH_DOCUMENT:
        // sync documents if online
        if (store.state.online && store.state.auth.user) {
          debouncer.debounce('sync', () => {
            store.dispatch(SYNC);
          });
        }

        break;
      default:
        break;
    }
  });
};
