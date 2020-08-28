/* eslint no-param-reassign: [
  "error", { "props": true, "ignorePropertyModificationsFor": ["state"] }
] */

import Vue from 'vue';
import Vuex from 'vuex';

import documents from '@/store/modules/documents';
import cachePlugin from '@/store/plugins/cache';
import router from '@/router';

import {
  ACTIVATE_CONTEXT,
  BLUR_EDITOR,
  CLEAR_EDITOR,
  DEACTIVATE_CONTEXT,
  FOCUS_EDITOR,
  HIDE_MENU,
  LOADED,
  SET_CONTEXT_TAGS,
  SET_EDITOR,
  SET_EDITOR_CONTEXT,
  SET_EDITOR_DOCUMENT,
  SET_OFFLINE,
  SET_ONLINE,
  SHOW_MENU,
} from '@/store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    context: {
      active: false,
      editing: false,
      tags: [],
    },
    editor: null,
    menu: {
      show: false,
    },
    loaded: false,
    online: true,
  },
  getters: {
    allTags(state, getters) {
      return Array.from(
        getters.allKept.reduce((set, doc) => {
          for (let tag of doc.tags) {
            set.add(tag);
          }

          return set;
        }, new Set())
      ).sort();
    },
    contextTags(state) {
      return state.context.tags.sort();
    },
    tags(state, getters) {
      return Array.from(
        getters.kept.reduce((set, doc) => {
          for (let tag of doc.tags) {
            set.add(tag);
          }

          return set;
        }, new Set())
      ).sort();
    },
  },
  mutations: {
    [ACTIVATE_CONTEXT] (state, payload) {
      state.context.active = true;
    },
    [CLEAR_EDITOR] (state, payload) {
      state.editor.setValue('');
    },
    [DEACTIVATE_CONTEXT] (state, payload) {
      state.context.active = false;
      state.context.tags = [];
    },
    [HIDE_MENU] (state, payload) {
      state.menu.show = false;
    },
    [LOADED] (state, payload) {
      state.loaded = true;
    },
    [SET_CONTEXT_TAGS] (state, payload) {
      state.context.tags = payload.context.tags;
    },
    [SET_EDITOR] (state, payload) {
      state.editor = payload.editor;
    },
    [SET_EDITOR_CONTEXT] (state, payload) {
      state.editor.setValue(
        state.context.tags.map(tag => `#${tag}`).join(' ')
      );
    },
    [SET_EDITOR_DOCUMENT] (state, payload) {
      const document = state.documents.all.find(doc => doc.clientId === payload.document.clientId);

      state.editor.setValue(document.text);
    },
    [SET_OFFLINE] (state) {
      state.online = false;
    },
    [SET_ONLINE] (state) {
      state.online = true;
    },
    [SHOW_MENU] (state) {
      state.menu.show = true;
    },
  },
  actions: {
    async [ACTIVATE_CONTEXT] (context) {
      context.commit(ACTIVATE_CONTEXT);
    },
    async [BLUR_EDITOR] (context) {
      if (context.state.editor) {
        context.state.editor.getInputField().blur();
      }
    },
    async [CLEAR_EDITOR] (context) {
      context.commit(CLEAR_EDITOR);
    },
    async [DEACTIVATE_CONTEXT] (context) {
      context.commit(DEACTIVATE_CONTEXT);
    },
    async [FOCUS_EDITOR] (context) {
      if (context.state.editor) {
        context.state.editor.focus();
      }
    },
    async [HIDE_MENU] (context) {
      context.commit(HIDE_MENU);
    },
    async [LOADED] (context) {
      context.commit(LOADED);
    },
    async [SET_CONTEXT_TAGS] (context, payload) {
      context.commit(SET_CONTEXT_TAGS, payload);

      // automatically activate and deactivate context when modifying context tags
      if (payload.context.tags.length > 0) {
        if (!context.state.context.active) {
          return context.dispatch(ACTIVATE_CONTEXT);
        }
      } else {
        if (context.state.context.active) {
          return context.dispatch(DEACTIVATE_CONTEXT);
        }
      }
    },
    async [SET_EDITOR] (context, payload) {
      context.commit(SET_EDITOR, payload);
    },
    async [SET_EDITOR_CONTEXT] (context, payload) {
      context.commit(SET_EDITOR_CONTEXT, payload);
    },
    async [SET_EDITOR_DOCUMENT] (context, payload) {
      context.commit(SET_EDITOR_DOCUMENT, payload);
    },
    async [SET_OFFLINE] (context) {
      context.commit(SET_OFFLINE);
    },
    async [SET_ONLINE] (context) {
      context.commit(SET_ONLINE);
    },
    async [SHOW_MENU] (context) {
      context.commit(SHOW_MENU);
    },
  },
  modules: {
    documents,
  },
  plugins: [
    cachePlugin,
  ],
});
