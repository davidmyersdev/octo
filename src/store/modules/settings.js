import deepmerge from 'deepmerge';

export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const SET_CRYPTO_ENABLED = 'SET_CRYPTO_ENABLED';
export const SET_CRYPTO_KEYS = 'SET_CRYPTO_KEYS';
export const SET_EDITOR_IMAGES_ENABLED = 'SET_EDITOR_IMAGES_ENABLED';
export const SET_EDITOR_IMAGES_SHOW_CAPTIONS = 'SET_EDITOR_IMAGES_SHOW_CAPTIONS';
export const SET_EDITOR_KEY_MAP = 'SET_EDITOR_KEY_MAP';
export const SET_EDITOR_LIGATURES = 'SET_EDITOR_LIGATURES';
export const SET_EDITOR_TAB_SIZE = 'SET_EDITOR_TAB_SIZE';
export const SET_THEME = 'SET_THEME'
export const SETTINGS_LOADED = 'SETTINGS_LOADED';

export default {
  state: () => ({
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
      tabSize: 2,
    },
    loaded: false,
    theme: 'dark',
  }),
  getters: {
    // nothing yet
  },
  mutations: {
    [LOAD_SETTINGS] (state, settings) {
      Object.assign(state, deepmerge(state, settings));
    },
    [SET_CRYPTO_ENABLED] (state, enabled) {
      state.crypto.enabled = enabled;
    },
    [SET_CRYPTO_KEYS] (state, keys) {
      if (keys.privateKey) {
        state.crypto.privateKey = keys.privateKey;
      }

      if (keys.publicKey) {
        state.crypto.publicKey = keys.publicKey;
      }
    },
    [SET_EDITOR_IMAGES_ENABLED] (state, isEnabled) {
      state.editor.images.enabled = isEnabled;
    },
    [SET_EDITOR_IMAGES_SHOW_CAPTIONS] (state, showCaptions) {
      state.editor.images.showCaptions = showCaptions;
    },
    [SET_EDITOR_KEY_MAP] (state, keyMap) {
      state.editor.keyMap = keyMap;
    },
    [SET_EDITOR_LIGATURES] (state, isEnabled) {
      state.editor.ligatures = isEnabled;
    },
    [SET_EDITOR_TAB_SIZE] (state, tabSize) {
      state.editor.tabSize = tabSize;
    },
    [SET_THEME] (state, theme) {
      state.theme = theme
    },
    [SETTINGS_LOADED] (state) {
      state.loaded = true;
    },
  },
  actions: {
    async [LOAD_SETTINGS] (context, settings) {
      context.commit(LOAD_SETTINGS, settings);
    },
    async [SET_CRYPTO_ENABLED] (context, enabled) {
      context.commit(SET_CRYPTO_ENABLED, enabled);
    },
    async [SET_CRYPTO_KEYS] (context, keys) {
      context.commit(SET_CRYPTO_KEYS, keys);
    },
    async [SET_EDITOR_IMAGES_ENABLED] (context, isEnabled) {
      context.commit(SET_EDITOR_IMAGES_ENABLED, isEnabled);
    },
    async [SET_EDITOR_IMAGES_SHOW_CAPTIONS] (context, showCaptions) {
      context.commit(SET_EDITOR_IMAGES_SHOW_CAPTIONS, showCaptions);
    },
    async [SET_EDITOR_KEY_MAP] (context, keyMap) {
      context.commit(SET_EDITOR_KEY_MAP, keyMap);
    },
    async [SET_EDITOR_TAB_SIZE] (context, tabSize) {
      context.commit(SET_EDITOR_TAB_SIZE, tabSize);
    },
    async [SET_THEME] (context, theme) {
      context.commit(SET_THEME, theme)
    },
    async [SETTINGS_LOADED] (context) {
      context.commit(SETTINGS_LOADED);
    },
  },
};
