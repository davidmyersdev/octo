export const ADD_CONTEXT = 'ADD_CONTEXT'
export const LOAD_CONTEXT = 'LOAD_CONTEXT'
export const LOAD_CONTEXTS = 'LOAD_CONTEXTS'
export const REMOVE_CONTEXT = 'REMOVE_CONTEXT'

export default {
  state: () => ({
    all: [],
  }),
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
