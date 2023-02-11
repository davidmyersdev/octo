import localforage from 'localforage'
import Debouncer from '#root/src/common/debouncer'
import { unwrap } from '#root/src/common/vue'

import {
  LOAD_SETTINGS,
  SET_CRYPTO_ENABLED,
  SET_CRYPTO_KEYS,
  SET_EDITOR_IMAGES_ENABLED,
  SET_EDITOR_IMAGES_SHOW_CAPTIONS,
  SET_EDITOR_KEY_MAP,
  SET_EDITOR_LIGATURES,
  SET_EDITOR_LISTS_ENABLED,
  SET_EDITOR_READABILITY_ENABLED,
  SET_EDITOR_READABILITY_WORDS_PER_MINUTE,
  SET_EDITOR_SPELLCHECK,
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_TOOLBAR,
  SET_EXPERIMENTAL,
  SET_THEME,
  SETTINGS_LOADED,
} from '/src/store/modules/settings'

const CACHE_KEY = 'main'
const cache = localforage.createInstance({
  name: 'settings',
})

const debouncer = new Debouncer(20)

export default (store) => {
  cache.getItem(CACHE_KEY).then((settings) => {
    if (settings) {
      store.dispatch(LOAD_SETTINGS, settings).then(() => {
        store.dispatch(SETTINGS_LOADED)
      })
    } else {
      store.dispatch(SETTINGS_LOADED)
    }
  })

  store.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SET_CRYPTO_ENABLED:
      case SET_CRYPTO_KEYS:
      case SET_EDITOR_IMAGES_ENABLED:
      case SET_EDITOR_IMAGES_SHOW_CAPTIONS:
      case SET_EDITOR_KEY_MAP:
      case SET_EDITOR_LIGATURES:
      case SET_EDITOR_LISTS_ENABLED:
      case SET_EDITOR_READABILITY_ENABLED:
      case SET_EDITOR_READABILITY_WORDS_PER_MINUTE:
      case SET_EDITOR_SPELLCHECK:
      case SET_EDITOR_TAB_SIZE:
      case SET_EDITOR_TOOLBAR:
      case SET_EXPERIMENTAL:
      case SET_THEME:
        debouncer.debounce(CACHE_KEY, () => {
          cache.setItem(CACHE_KEY, unwrap(state.settings))
        })

        break
      default:
        break
    }
  })
}
