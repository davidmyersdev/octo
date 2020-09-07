export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const SET_EDITOR_TAB_SIZE = 'SET_EDITOR_TAB_SIZE';

export default {
  state: () => ({
    editor: {
      tabSize: 2,
    },
  }),
  getters: {
    // nothing yet
  },
  mutations: {
    [LOAD_SETTINGS] (state, settings) {
      // shallow merge
      Object.assign(state, settings);
    },
    [SET_EDITOR_TAB_SIZE] (state, tabSize) {
      state.editor.tabSize = tabSize;
    },
  },
  actions: {
    async [LOAD_SETTINGS] (context, settings) {
      context.commit(LOAD_SETTINGS, settings);
    },
    async [SET_EDITOR_TAB_SIZE] (context, tabSize) {
      context.commit(SET_EDITOR_TAB_SIZE, tabSize);
    },
  },
};
