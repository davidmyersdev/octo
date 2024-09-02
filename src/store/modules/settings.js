import deepmerge from 'deepmerge'
import { appEventTypes, logEvent } from '#helpers/app'

export const LOAD_SETTINGS = 'LOAD_SETTINGS'
export const SET_CRYPTO_ENABLED = 'SET_CRYPTO_ENABLED'
export const SET_CRYPTO_KEYS = 'SET_CRYPTO_KEYS'
export const SET_EDITOR_IMAGES_ENABLED = 'SET_EDITOR_IMAGES_ENABLED'
export const SET_EDITOR_IMAGES_SHOW_CAPTIONS = 'SET_EDITOR_IMAGES_SHOW_CAPTIONS'
export const SET_EDITOR_KEY_MAP = 'SET_EDITOR_KEY_MAP'
export const SET_EDITOR_LIGATURES = 'SET_EDITOR_LIGATURES'
export const SET_EDITOR_LISTS_ENABLED = 'SET_EDITOR_LISTS_ENABLED'
export const SET_EDITOR_READABILITY_ENABLED = 'SET_EDITOR_READABILITY_ENABLED'
export const SET_EDITOR_READABILITY_MAX_WIDTH = 'SET_EDITOR_READABILITY_MAX_WIDTH'
export const SET_EDITOR_READABILITY_WORDS_PER_MINUTE = 'SET_EDITOR_READABILITY_WORDS_PER_MINUTE'
export const SET_EDITOR_SPELLCHECK = 'SET_EDITOR_SPELLCHECK'
export const SET_EDITOR_TAB_SIZE = 'SET_EDITOR_TAB_SIZE'
export const SET_EDITOR_TOOLBAR = 'SET_EDITOR_TOOLBAR'
export const SET_EXPERIMENTAL = 'SET_EXPERIMENTAL'
export const SET_THEME = 'SET_THEME'

export default {
  state: () => ({
    id: 'main',
    crypto: {
      enabled: false,
      privateKey: null,
      publicKey: null,
    },
    editor: {
      images: {
        enabled: true,
        showCaptions: true,
      },
      keyMap: 'default',
      ligatures: true,
      lists: {
        enabled: true,
      },
      readability: {
        enabled: true,
        maxWidthInChars: 100,
        wordsPerMinute: 225,
      },
      spellcheck: true,
      tabSize: 2,
      toolbar: true,
    },
    experimental: false,
    loaded: false,
    theme: 'auto',
  }),
  getters: {
    // nothing yet
  },
  mutations: {
    [LOAD_SETTINGS](state, settings) {
      Object.assign(state, deepmerge(state, settings))

      state.loaded = true

      logEvent(appEventTypes.appSettingsLoaded)
    },
    [SET_CRYPTO_ENABLED](state, enabled) {
      state.crypto.enabled = enabled
    },
    [SET_CRYPTO_KEYS](state, keys) {
      if (keys.privateKey) {
        state.crypto.privateKey = keys.privateKey
      }

      if (keys.publicKey) {
        state.crypto.publicKey = keys.publicKey
      }
    },
    [SET_EDITOR_IMAGES_ENABLED](state, isEnabled) {
      state.editor.images.enabled = isEnabled
    },
    [SET_EDITOR_IMAGES_SHOW_CAPTIONS](state, showCaptions) {
      state.editor.images.showCaptions = showCaptions
    },
    [SET_EDITOR_KEY_MAP](state, keyMap) {
      state.editor.keyMap = keyMap
    },
    [SET_EDITOR_LIGATURES](state, isEnabled) {
      state.editor.ligatures = isEnabled
    },
    [SET_EDITOR_LISTS_ENABLED](state, isEnabled) {
      state.editor.lists.enabled = isEnabled
    },
    [SET_EDITOR_READABILITY_ENABLED](state, isEnabled) {
      state.editor.readability.enabled = isEnabled
    },
    [SET_EDITOR_READABILITY_MAX_WIDTH](state, maxWidthInChars) {
      state.editor.readability.maxWidthInChars = maxWidthInChars
    },
    [SET_EDITOR_READABILITY_WORDS_PER_MINUTE](state, wordsPerMinute) {
      state.editor.readability.wordsPerMinute = wordsPerMinute
    },
    [SET_EDITOR_SPELLCHECK](state, spellcheck) {
      state.editor.spellcheck = spellcheck
    },
    [SET_EDITOR_TAB_SIZE](state, tabSize) {
      state.editor.tabSize = tabSize
    },
    [SET_EDITOR_TOOLBAR](state, isEnabled) {
      state.editor.toolbar = isEnabled
    },
    [SET_EXPERIMENTAL](state, isEnabled) {
      state.experimental = isEnabled
    },
    [SET_THEME](state, theme) {
      state.theme = theme
    },
  },
  actions: {
    async [LOAD_SETTINGS](context, settings) {
      context.commit(LOAD_SETTINGS, settings)
    },
    async [SET_CRYPTO_ENABLED](context, enabled) {
      context.commit(SET_CRYPTO_ENABLED, enabled)
    },
    async [SET_CRYPTO_KEYS](context, keys) {
      context.commit(SET_CRYPTO_KEYS, keys)
    },
    async [SET_EDITOR_IMAGES_ENABLED](context, isEnabled) {
      context.commit(SET_EDITOR_IMAGES_ENABLED, isEnabled)
    },
    async [SET_EDITOR_IMAGES_SHOW_CAPTIONS](context, showCaptions) {
      context.commit(SET_EDITOR_IMAGES_SHOW_CAPTIONS, showCaptions)
    },
    async [SET_EDITOR_KEY_MAP](context, keyMap) {
      context.commit(SET_EDITOR_KEY_MAP, keyMap)
    },
    async [SET_EDITOR_TAB_SIZE](context, tabSize) {
      context.commit(SET_EDITOR_TAB_SIZE, tabSize)
    },
    async [SET_THEME](context, theme) {
      context.commit(SET_THEME, theme)
    },
  },
}
