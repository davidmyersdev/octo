/* eslint no-param-reassign: [
  "error", { "props": true, "ignorePropertyModificationsFor": ["state"] }
] */

import Vue from 'vue';
import Vuex from 'vuex';

// modules
import authModule from '@/store/modules/auth'
import contextsModule from '@/store/modules/contexts'
import documentsModule from '@/store/modules/documents';
import keybindingsModule from '@/store/modules/keybindings';
import settingsModule from '@/store/modules/settings';
import syncModule from '@/store/modules/sync';

// plugins
import contextsCachingPlugin from '@/store/plugins/caching/contexts'
import documentsCachingPlugin from '@/store/plugins/caching/documents';
import keybindingsPlugin from '@/store/plugins/keybindings';
import settingsCachingPlugin from '@/store/plugins/caching/settings';
import syncPlugin from '@/store/plugins/sync';

export const SET_STRIPE_MODAL_VISIBILITY = 'SET_STRIPE_MODAL_VISIBILITY'

import {
  ACTIVATE_CONTEXT,
  BLUR_EDITOR,
  DEACTIVATE_CONTEXT,
  FOCUS_EDITOR,
  HIDE_MENU,
  SET_CONTEXT_TAGS,
  SET_EDITOR,
  SET_MOD_KEY,
  SET_OFFLINE,
  SET_ONLINE,
  SET_RIGHT_SIDEBAR_VISIBILITY,
  SET_SHOW_WELCOME,
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
    modKey: '⌃ ctrl',
    online: true,
    showLeftSidebar: true,
    showRightSidebar: false,
    showStripeModal: false,
    showWelcome: false,
    vimLoaded: false,
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
    [DEACTIVATE_CONTEXT] (state, payload) {
      state.context.active = false;
      state.context.tags = [];
    },
    [HIDE_MENU] (state, payload) {
      state.menu.show = false;
    },
    [SET_CONTEXT_TAGS] (state, payload) {
      state.context.tags = payload.context.tags;
    },
    [SET_EDITOR] (state, payload) {
      state.editor = payload.editor;
    },
    [SET_MOD_KEY] (state, payload) {
      state.modKey = payload;
    },
    [SET_OFFLINE] (state) {
      state.online = false;
    },
    [SET_ONLINE] (state) {
      state.online = true;
    },
    [SET_RIGHT_SIDEBAR_VISIBILITY] (state, isVisible) {
      state.showRightSidebar = isVisible;
    },
    [SET_STRIPE_MODAL_VISIBILITY] (state, isVisible) {
      state.showStripeModal = isVisible
    },
    ['SET_VIM_LOADED'] (state, isVimLoaded) {
      state.vimLoaded = isVimLoaded;
    },
    [SHOW_MENU] (state) {
      state.menu.show = true;
    },
    [SET_SHOW_WELCOME] (state, shouldShowWelcome) {
      state.showWelcome = shouldShowWelcome;
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
    async [SET_MOD_KEY] (context, payload) {
      context.commit(SET_MOD_KEY, payload);
    },
    async [SET_OFFLINE] (context) {
      context.commit(SET_OFFLINE);
    },
    async [SET_ONLINE] (context) {
      context.commit(SET_ONLINE);
    },
    async [SET_RIGHT_SIDEBAR_VISIBILITY] (context, isVisible) {
      context.commit(SET_RIGHT_SIDEBAR_VISIBILITY, isVisible);
    },
    async [SET_SHOW_WELCOME] (context, shouldShowWelcome) {
      context.commit(SET_SHOW_WELCOME, shouldShowWelcome);
    },
    async [SET_STRIPE_MODAL_VISIBILITY] (context, isVisible) {
      context.commit(SET_STRIPE_MODAL_VISIBILITY, isVisible)

      if (isVisible) {
        setTimeout(() => {
          if (context.state.showStripeModal) {
            context.commit(SET_STRIPE_MODAL_VISIBILITY, false)
          }
        }, 15000)
      }
    },
    async [SHOW_MENU] (context) {
      context.commit(SHOW_MENU);
    },
  },
  modules: {
    auth: authModule,
    contexts: contextsModule,
    documents: documentsModule,
    keybindings: keybindingsModule,
    settings: settingsModule,
    sync: syncModule,
  },
  plugins: [
    contextsCachingPlugin,
    documentsCachingPlugin,
    keybindingsPlugin,
    settingsCachingPlugin,
    syncPlugin,
  ],
});
