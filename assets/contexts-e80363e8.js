const ADD_CONTEXT = "ADD_CONTEXT";
const LOAD_CONTEXT = "LOAD_CONTEXT";
const LOAD_CONTEXTS = "LOAD_CONTEXTS";
const REMOVE_CONTEXT = "REMOVE_CONTEXT";
const contextsModule = {
  state: () => ({
    all: []
  }),
  getters: {
    sortedContexts(state, _getters) {
      return state.all.sort((a, b) => {
        if (a.name === b.name)
          return 0;
        return a.name < b.name ? -1 : 1;
      });
    }
  },
  mutations: {
    [ADD_CONTEXT](state, context) {
      state.all.push(context);
    },
    [LOAD_CONTEXT](state, context) {
      state.all.push(context);
    },
    [REMOVE_CONTEXT](state, context) {
      state.all = state.all.filter((c) => c.id !== context.id);
    }
  },
  actions: {
    [LOAD_CONTEXTS]({ commit }, contexts) {
      contexts.forEach((context) => {
        commit(LOAD_CONTEXT, context);
      });
    }
  }
};
export {
  ADD_CONTEXT as A,
  LOAD_CONTEXTS as L,
  REMOVE_CONTEXT as R,
  contextsModule as c
};
//# sourceMappingURL=contexts-e80363e8.js.map
