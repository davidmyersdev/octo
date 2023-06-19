import { storage } from '#helpers/storage'
import { debouncer } from '#root/src/common/debouncer'
import { unwrap } from '#root/src/common/vue'

import {
  ADD_CONTEXT,
  LOAD_CONTEXTS,
  REMOVE_CONTEXT,
} from '#root/src/store/modules/contexts'

import { SETTINGS_LOADED } from '#root/src/store/modules/settings'

const cache = storage().instance({ name: 'contexts' })

const { debounce } = debouncer(800)

const find = (state, id) => {
  return state.contexts.all.find(context => context.id === id)
}

export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_CONTEXT:
        const found = find(state, payload.id)

        if (found) {
          debounce(found.id, async () => {
            cache.setItem(found.id, unwrap(found))
          })
        }

        break
      case REMOVE_CONTEXT:
        cache.removeItem(payload.id)
        break
      case SETTINGS_LOADED:
        // load all contexts from the cache after settings are loaded
        cache.keys()
          .then(ids => Promise.all(ids.map(id => cache.getItem(id))))
          .then(contexts => store.dispatch(LOAD_CONTEXTS, contexts))
        break
      default:
        break
    }
  })
}
