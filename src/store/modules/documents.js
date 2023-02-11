import Doc from '#root/src/models/doc'
import { useRecentDocs } from '#root/src/stores/useRecentDocs'

import {
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENT,
  LOAD_DOCUMENTS,
  MERGE_DOCUMENT,
  MERGE_DOCUMENTS,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SET_DOCUMENT,
  SHARE_DOCUMENT,
  TOUCH_DOCUMENT,
} from '/src/store/actions'

const findDoc = (state, id) => {
  // only return docs that are decrypted
  return state.all.filter(doc => !doc.encrypted).find(doc => doc.id === id)
}

export default {
  state: () => ({
    all: [],
    currentId: null,
    loaded: false,
  }),
  getters: {
    allKept(_state, getters) {
      return getters.sorted.filter(doc => doc.discardedAt === null)
    },
    daily(_state, getters) {
      return getters.sortedByCreated.find(doc => doc.daily)
    },
    decrypted(state) {
      return state.all.filter(doc => !doc.encrypted)
    },
    discarded(_state, getters) {
      return getters.sorted.filter(doc => doc.discardedAt !== null)
    },
    filtered(state, getters, globalState) {
      if (globalState.context.active) {
        return getters.sorted.filter((doc) => {
          return globalState.context.tags.some(t => doc.tags.includes(t))
        })
      }

      return getters.sorted
    },
    kept(_state, getters) {
      return getters.filtered.filter(doc => doc.discardedAt === null)
    },
    sorted(_state, getters) {
      return getters.decrypted.sort((a, b) => {
        // reverse sort
        return b.updatedAt - a.updatedAt
      })
    },
    sortedByCreated(_state, getters) {
      return getters.decrypted.sort((a, b) => {
        // reverse sort by created at
        return b.createdAt - a.createdAt
      })
    },
    tasks(_state, getters, _globalState, _globalGetters) {
      return getters.kept.filter(doc => doc.tasks.length > 0)
    },
    untagged(_state, getters) {
      return getters.allKept.filter(doc => doc.tags.length == 0)
    },
    withTag(_state, getters) {
      return (tag) => {
        return getters.kept.filter(doc => !!doc.tags.find(t => t === tag))
      }
    },
  },
  mutations: {
    [DISCARD_DOCUMENT] (state, { id }) {
      findDoc(state, id).discard()
    },
    [DOCUMENTS_LOADED] (state) {
      state.loaded = true
    },
    [EDIT_DOCUMENT] (state, doc) {
      const found = findDoc(state, doc.id)

      if (found) {
        found.update({ text: doc.text })
      } else {
        state.all.push(doc)
      }

    },
    [LOAD_DOCUMENT] (state, doc) {
      state.all.push(doc)
    },
    [MERGE_DOCUMENT] (state, doc) {
      findDoc(state, doc.id).merge(doc);
    },
    [RESTORE_DOCUMENT] (state, { id }) {
      findDoc(state, id).restore()
    },
    [RESTRICT_DOCUMENT] (state, { id }) {
      findDoc(state, id).restrict();
    },
    [SET_DOCUMENT] (state, { id }) {
      state.currentId = id

      if (id) {
        const recentDocs = useRecentDocs()

        recentDocs.add(id)
      }
    },
    [SHARE_DOCUMENT] (state, { id }) {
      findDoc(state, id).share();
    },
    [TOUCH_DOCUMENT] (state, { id }) {
      findDoc(state, id).touch()
    },
  },
  actions: {
    async [DISCARD_DOCUMENT] (context, doc) {
      context.commit(DISCARD_DOCUMENT, doc)
    },
    async [DOCUMENTS_LOADED] (context) {
      context.commit(DOCUMENTS_LOADED)
    },
    async [DUPLICATE_DOCUMENT] (context, { id }) {
      const newDoc = findDoc(context.state, id).duplicate()

      context.commit(EDIT_DOCUMENT, newDoc)

      return newDoc.id
    },
    async [EDIT_DOCUMENT] (context, doc) {
      context.commit(EDIT_DOCUMENT, doc)
    },
    async [LOAD_DOCUMENT] (context, doc) {
      context.commit(LOAD_DOCUMENT, doc)
    },
    async [LOAD_DOCUMENTS] (context, docs) {
      return Promise.all(
        docs.map(doc => context.dispatch(LOAD_DOCUMENT, doc))
      )
    },
    async [MERGE_DOCUMENT] (context, doc) {
      context.commit(MERGE_DOCUMENT, doc);
    },
    async [MERGE_DOCUMENTS] (context, docs) {
      const originalDocs = docs.map(doc => findDoc(context.state, doc.id))
      const newDoc = new Doc({
        text: originalDocs.map(doc => doc.text).join("\n\n"),
      })

      context.commit(EDIT_DOCUMENT, newDoc)

      return originalDocs.map((doc) => context.dispatch(DISCARD_DOCUMENT, doc))
    },
    async [RESTORE_DOCUMENT] (context, doc) {
      context.commit(RESTORE_DOCUMENT, doc)
    },
    async [RESTRICT_DOCUMENT] (context, doc) {
      context.commit(RESTRICT_DOCUMENT, doc);
    },
    async [SET_DOCUMENT] (context, { id }) {
      context.commit(SET_DOCUMENT, { id })
    },
    async [SHARE_DOCUMENT] (context, doc) {
      context.commit(SHARE_DOCUMENT, doc);
    },
    async [TOUCH_DOCUMENT] (context, doc) {
      context.commit(TOUCH_DOCUMENT, doc)
    },
  },
}
