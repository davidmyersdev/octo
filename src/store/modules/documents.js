import localforage from 'localforage';
import { parseTags } from '@/common/parsers';
import { v4 as uuid } from 'uuid';

import { decrypt } from '@/common/crypto/crypto';

import {
  ADD_DOCUMENT,
  CREATE_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  LOAD_DOCUMENT,
  LOAD_DOCUMENTS,
  RESTORE_DOCUMENT,
} from '@/store/actions';

const cache = localforage.createInstance({
  name: 'documents',
});

const findDoc = (state, clientId) => {
  return state.all.find((doc) => {
    return doc.clientId === clientId;
  });
};

export default {
  state: () => ({
    all: [],
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
    sorted(state, _getters) {
      return state.all.sort((a, b) => {
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
    [EDIT_DOCUMENT] (state, payload) {
      const now = new Date();
      const document = findDoc(state, payload.document.clientId);

      Object.assign(document, {
        text: payload.document.text,
        tags: parseTags(payload.document.text),
        updatedAt: now,
      });
    },
    [LOAD_DOCUMENT] (state, payload) {
      state.all.push(payload.document);
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
    async [EDIT_DOCUMENT] (context, payload) {
      context.commit(EDIT_DOCUMENT, payload);
    },
    async [LOAD_DOCUMENT] (context, payload) {
      if (payload.document.encrypted) {
        if (context.rootState.settings.crypto.privateKey) {
          return decrypt(payload.document.text, context.rootState.settings.crypto.privateKey, payload.document.dataKey, payload.document.iv)
            .then((data) => {
              context.commit(LOAD_DOCUMENT, {
                document: Object.assign({}, payload.document, {
                  tags: parseTags(data),
                  text: data,
                }),
              });
            })
            .catch((error) => {
              // error - invalid key maybe?
              console.log('there was an error decrypting a document');
            });
        } else {
          console.log('privateKey missing - cannot load document');
        }
      }

      context.commit(LOAD_DOCUMENT, payload);
    },
    async [LOAD_DOCUMENTS] (context, payload) {
      const ids = await cache.keys();
      const docs = await Promise.all(ids.map(id => cache.getItem(id)));

      return Promise.all(
        docs.map(doc => context.dispatch(LOAD_DOCUMENT, {
          document: doc,
        }))
      );
    },
    async [RESTORE_DOCUMENT] (context, payload) {
      context.commit(RESTORE_DOCUMENT, payload);
    },
  },
};
