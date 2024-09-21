import { type Plugin, type Store } from 'vuex'
import { debouncer } from '/src/common/debouncer'

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SET_ONLINE,
  SHARE_DOCUMENT,
  SYNC,
  TOUCH_DOCUMENT,
} from '/src/store/actions'

import { SET_USER } from '/src/store/modules/auth'

const { debounce } = debouncer(1500)

const syncPlugin: Plugin<any> = (store) => {
  store.subscribe(async ({ type }) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
      case RESTRICT_DOCUMENT:
      case SET_ONLINE:
      case SET_USER:
      case SHARE_DOCUMENT:
      case TOUCH_DOCUMENT:
        syncDocs(store)

        break
      default:
        break
    }
  })
}

export const syncDocs = (store: Store<any>) => {
  // sync documents if online
  if (store.state.online && store.state.auth.user) {
    debounce('sync', () => {
      store.dispatch(SYNC)
    })
  }
}

export default syncPlugin
