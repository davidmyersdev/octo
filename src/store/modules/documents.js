import { parseTags } from '@/common/parsers';
import { v4 as uuid } from 'uuid';

import { decrypt } from '@/common/crypto/crypto';

import {
  ADD_DOCUMENT,
  CREATE_DOCUMENT,
  DISCARD_DOCUMENT,
  DOCUMENTS_LOADED,
  EDIT_DOCUMENT,
  LOAD_DOCUMENT,
  LOAD_DOCUMENTS,
  RESTORE_DOCUMENT,
} from '@/store/actions';

const findDoc = (state, clientId) => {
  return state.all.find((doc) => {
    return doc.clientId === clientId;
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
    [ADD_DOCUMENT] (state, payload) {
      state.all.push(payload.document);
    },
    [DISCARD_DOCUMENT] (state, payload) {
      const document = findDoc(state, payload.document.clientId);
      const now = new Date();

      Object.assign(document, {
        discardedAt: now,
        updatedAt: now,
      });
    },
    [DOCUMENTS_LOADED] (state) {
      state.loaded = true;
    },
    [EDIT_DOCUMENT] (state, payload) {
      const now = new Date();
      const document = findDoc(state, payload.document.clientId);

      Object.assign(document, {
        text: payload.document.text,
        tags: parseTags(payload.document.text),
        updatedAt: now,
      });
    },
    [LOAD_DOCUMENT] (state, doc) {
      state.all.push(doc);
    },
    [RESTORE_DOCUMENT] (state, payload) {
      const document = findDoc(state, payload.document.clientId);

      Object.assign(document, {
        discardedAt: null,
        updatedAt: new Date(),
      });
    },
  },
  actions: {
    async [ADD_DOCUMENT] (context, payload) {
      context.commit(ADD_DOCUMENT, payload);
    },
    async [CREATE_DOCUMENT] (context, payload) {
      const now = new Date();
      const doc = {
        document: {
          clientId: uuid(),
          tags: parseTags(payload.document.text),
          text: payload.document.text,
          // timestamps
          createdAt: now,
          discardedAt: null,
          updatedAt: now,
        },
      };

      context.dispatch(ADD_DOCUMENT, doc);

      return doc.document;
    },
    async [DISCARD_DOCUMENT] (context, payload) {
      context.commit(DISCARD_DOCUMENT, payload);
    },
    async [DOCUMENTS_LOADED] (context) {
      context.commit(DOCUMENTS_LOADED);
    },
    async [EDIT_DOCUMENT] (context, payload) {
      context.commit(EDIT_DOCUMENT, payload);
    },
    async [LOAD_DOCUMENT] (context, doc) {
      if (doc.encrypted) {
        if (context.rootState.settings.crypto.privateKey) {
          return decrypt({
            cipher: doc.text,
            cipherKey: doc.dataKey,
            iv: doc.iv,
            privateKey: context.rootState.settings.crypto.privateKey,
          }).then((data) => {
            context.commit(LOAD_DOCUMENT, Object.assign({}, doc, {
              encrypted: false,
              tags: parseTags(data),
              text: data,
            }));
          })
          .catch((error) => {
            // can not decrypt
            context.commit(LOAD_DOCUMENT, doc);
          });
        } else {
          context.commit(LOAD_DOCUMENT, doc);
        }
      } else {
        context.commit(LOAD_DOCUMENT, doc);
      }
    },
    async [LOAD_DOCUMENTS] (context, documents) {
      return Promise.all(
        documents.map(doc => context.dispatch(LOAD_DOCUMENT, doc))
      );
    },
    async [RESTORE_DOCUMENT] (context, payload) {
      context.commit(RESTORE_DOCUMENT, payload);
    },
  },
};
