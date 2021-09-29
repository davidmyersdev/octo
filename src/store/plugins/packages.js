import PackageManager from '/src/packages/manager'

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENTS,
  RESTORE_DOCUMENT,
  TOUCH_DOCUMENT,
} from '/src/store/actions';

export default (store) => {
  store.subscribe(({ type, payload: { id } }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
      case TOUCH_DOCUMENT:
      case DOCUMENTS_LOADED:
        // find the affected document when possible
        const doc = state.documents.all.find(d => d.id === id)

        // emit allowed events
        PackageManager.emit(type, { doc })

        break
      default:
        break
    }
  });
};
