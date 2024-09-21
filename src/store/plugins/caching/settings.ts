import { type Plugin, type Store } from 'vuex'
import { debouncer } from '/src/common/debouncer'
import { unwrap } from '/src/common/vue'
import { db } from '/src/db'
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
  SET_EDITOR_READABILITY_MAX_WIDTH,
  SET_EDITOR_READABILITY_WORDS_PER_MINUTE,
  SET_EDITOR_SPELLCHECK,
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_TOOLBAR,
  SET_EXPERIMENTAL,
  SET_THEME,
} from '/src/store/modules/settings'

export const loadSettings = async (store: Store<any>) => {
  const settings = await db.settings.get('main')

  await store.dispatch(LOAD_SETTINGS, settings || {})
}

const { debounce } = debouncer(20)

const settingsPlugin: Plugin<any> = (store) => {
  store.subscribe(({ type }, state) => {
    switch (type) {
      case SET_CRYPTO_ENABLED:
      case SET_CRYPTO_KEYS:
      case SET_EDITOR_IMAGES_ENABLED:
      case SET_EDITOR_IMAGES_SHOW_CAPTIONS:
      case SET_EDITOR_KEY_MAP:
      case SET_EDITOR_LIGATURES:
      case SET_EDITOR_LISTS_ENABLED:
      case SET_EDITOR_READABILITY_ENABLED:
      case SET_EDITOR_READABILITY_MAX_WIDTH:
      case SET_EDITOR_READABILITY_WORDS_PER_MINUTE:
      case SET_EDITOR_SPELLCHECK:
      case SET_EDITOR_TAB_SIZE:
      case SET_EDITOR_TOOLBAR:
      case SET_EXPERIMENTAL:
      case SET_THEME:
        // Prevent any writes until settings have been loaded.
        if (state.settings.loaded) {
          debounce('settings', async () => {
            await db.settings.put(unwrap(state.settings), 'main')
          })
        }

        break
      default:
        break
    }
  })
}

export default settingsPlugin
