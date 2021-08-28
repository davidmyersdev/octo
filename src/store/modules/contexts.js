export const ADD_CONTEXT = 'ADD_CONTEXT'
export const LOAD_CONTEXT = 'LOAD_CONTEXT'
export const LOAD_CONTEXTS = 'LOAD_CONTEXTS'
export const REMOVE_CONTEXT = 'REMOVE_CONTEXT'

export default {
  state: () => ({
    all: [],
  }),
  getters: {
    sortedContexts(state, _getters) {
      return state.all.sort((a, b) => {
        if (a.name === b.name) return 0

        return a.name < b.name ? -1 : 1
      })
    },
  },
  mutations: {
    [ADD_CONTEXT] (state, context) {
      state.all.push(context)
    },
    [LOAD_CONTEXT] (state, context) {
      state.all.push(context)
    },
    [REMOVE_CONTEXT] (state, context) {
      state.all = state.all.filter(c => c.id !== context.id)
    },
  },
  actions: {
    [LOAD_CONTEXTS] ({ commit }, contexts) {
      contexts.forEach((context) => {
        commit(LOAD_CONTEXT, context)
      })
    },
  },
}
