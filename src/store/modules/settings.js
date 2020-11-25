export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const SET_CRYPTO_ENABLED = 'SET_CRYPTO_ENABLED';
export const SET_CRYPTO_KEYS = 'SET_CRYPTO_KEYS';
export const SET_EDITOR_KEY_MAP = 'SET_EDITOR_KEY_MAP';
export const SET_EDITOR_TAB_SIZE = 'SET_EDITOR_TAB_SIZE';
export const SETTINGS_LOADED = 'SETTINGS_LOADED';

export default {
  state: () => ({
    crypto: {
      enabled: false,
      privateKey: null,
      publicKey: null,
    },
    editor: {
      tabSize: 2,
      keyMap: 'default',
    },
    loaded: false,
  }),
  getters: {
    // nothing yet
  },
  mutations: {
    [LOAD_SETTINGS] (state, settings) {
      // shallow merge
      Object.assign(state, settings);
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
    [SET_EDITOR_KEY_MAP] (state, keyMap) {
      state.editor.keyMap = keyMap;
    },
    [SET_EDITOR_TAB_SIZE] (state, tabSize) {
      state.editor.tabSize = tabSize;
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
    async [SET_EDITOR_KEY_MAP] (context, keyMap) {
      context.commit(SET_EDITOR_KEY_MAP, keyMap);
    },
    async [SET_EDITOR_TAB_SIZE] (context, tabSize) {
      context.commit(SET_EDITOR_TAB_SIZE, tabSize);
    },
    async [SETTINGS_LOADED] (context) {
      context.commit(SETTINGS_LOADED);
    },
  },
};
