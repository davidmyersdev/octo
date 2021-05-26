import localforage from 'localforage'

import Debouncer from '@/common/debouncer'

import {
  ADD_CONTEXT,
  LOAD_CONTEXTS,
  REMOVE_CONTEXT,
} from '@/store/modules/contexts'

import { SETTINGS_LOADED } from '@/store/modules/settings'

const cache = localforage.createInstance({
  name: 'contexts',
})

const debouncer = new Debouncer(800)

const find = (state, id) => {
  return state.contexts.all.find(context => context.id === id)
}

export default (store) => {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_CONTEXT:
        const found = find(state, payload.id)

        if (found) {
          debouncer.debounce(found.id, async () => {
            cache.setItem(found.id, found)
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
