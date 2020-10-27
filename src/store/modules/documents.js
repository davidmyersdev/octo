import { parseTags } from '@/common/parsers';
import { v4 as uuid } from 'uuid';

import { decrypt } from '@/common/crypto/crypto';

import Doc from '@/models/doc';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENT,
  LOAD_DOCUMENTS,
  RESTORE_DOCUMENT,
  TOUCH_DOCUMENT,
} from '@/store/actions';

const findDoc = (state, id) => {
  return state.all.find((doc) => {
    return doc.id === id;
  });
};

export default {
  state: () => ({
    all: [],
    loaded: false,
  }),
  getters: {
    actionable(_state, getters, globalState, globalGetters) {
      // be careful about using the global flag when using .test
      // https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results
      return getters.kept.filter(doc => /\-\ \[\ \]/.test(doc.text));
    },
    allKept(_state, getters) {
      return getters.sorted.filter(doc => doc.discardedAt === null);
    },
    decrypted(state) {
      return state.all.filter(doc => !doc.encrypted);
    },
    discarded(_state, getters) {
      return getters.sorted.filter(doc => doc.discardedAt !== null);
    },
    filtered(state, getters, globalState) {
      if (globalState.context.active) {
        return getters.sorted.filter((doc) => {
          return globalState.context.tags.filter(t => doc.tags.includes(t)).length > 0;
        });
      }

      return getters.sorted;
    },
    kept(_state, getters) {
      return getters.filtered.filter(doc => doc.discardedAt === null);
    },
    sorted(_state, getters) {
      return getters.decrypted.sort((a, b) => {
        // reverse sort
        return b.updatedAt - a.updatedAt;
      });
    },
    untagged(_state, getters) {
      return getters.allKept.filter(doc => doc.tags.length == 0);
    },
    withTag(_state, getters) {
      return (tag) => {
        return getters.kept.filter(doc => !!doc.tags.find(t => t === tag));
      };
    },
  },
  mutations: {
    [ADD_DOCUMENT] (state, doc) {
      state.all.push(doc);
    },
    [DISCARD_DOCUMENT] (state, { id }) {
      findDoc(state, id).discard();
    },
    [DOCUMENTS_LOADED] (state) {
      state.loaded = true;
    },
    [EDIT_DOCUMENT] (state, { id, text }) {
      findDoc(state, id).update({ text });
    },
    [LOAD_DOCUMENT] (state, doc) {
      state.all.push(doc);
    },
    [RESTORE_DOCUMENT] (state, { id }) {
      findDoc(state, id).restore();
    },
    [TOUCH_DOCUMENT] (state, { id }) {
      findDoc(state, id).touch();
    },
  },
  actions: {
    async [ADD_DOCUMENT] (context, doc) {
      context.commit(ADD_DOCUMENT, doc);
    },
    async [DISCARD_DOCUMENT] (context, doc) {
      context.commit(DISCARD_DOCUMENT, doc);
    },
    async [DOCUMENTS_LOADED] (context) {
      context.commit(DOCUMENTS_LOADED);
    },
    async [DUPLICATE_DOCUMENT] (context, { id }) {
      const newDoc = findDoc(context.state, id).duplicate();

      context.commit(ADD_DOCUMENT, newDoc);

      return newDoc.id;
    },
    async [EDIT_DOCUMENT] (context, doc) {
      context.commit(EDIT_DOCUMENT, doc);
    },
    async [LOAD_DOCUMENT] (context, doc) {
      context.commit(LOAD_DOCUMENT, doc);
    },
    async [LOAD_DOCUMENTS] (context, docs) {
      return Promise.all(
        docs.map(doc => context.dispatch(LOAD_DOCUMENT, doc))
      );
    },
    async [RESTORE_DOCUMENT] (context, doc) {
      context.commit(RESTORE_DOCUMENT, doc);
    },
    async [TOUCH_DOCUMENT] (context, doc) {
      context.commit(TOUCH_DOCUMENT, doc);
    },
  },
};
