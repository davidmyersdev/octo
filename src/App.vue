<template>
  <div id="app">
    <main class="main">
      <nav class="navbar">
        <router-link class="navbar-brand" :to="{ name: 'dashboard' }">
          <TheLogo/>
        </router-link>
        <div class="buttons d-flex">
          <div v-if="offline" class="btn btn-link disabled">
            offline
          </div>
          <router-link @click.native="hideMenu" class="btn btn-secondary d-md-none" :to="{ name: 'tags' }">
            <span class="action">tags</span>
          </router-link>
          <div class="btn btn-menu btn-primary d-flex justify-content-between align-items-center ml-2" @click.stop="toggleMenu" role="button" aria-haspopup="true" aria-expanded="false">
            <svg width="0.75em" height="0.75em" viewBox="0 0 16 16" class="bi bi-lightning-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg>
            <span>actions</span>
            <small class="action-shortcut d-none d-md-block">cmd + k</small>
          </div>
          <router-link :to="{ name: 'settings' }" class="btn btn-settings pr-2 pl-2 d-flex align-items-center justify-content-center ml-2">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-person-lines-fill mr-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </router-link>
          <Menu :class="{ hide: !showMenu }" />
        </div>
      </nav>
      <div v-if="context.active || context.editing" class="context-banner text-center">
        <div v-if="contextTags.length" class="context-tags">
          <Tag v-for="tag in contextTags" :key="tag" :tag="tag" class="context-tag d-inline-flex" />
        </div>
        <div v-else  class="context-placeholder">no active tags</div>
        <div @click="deactivateContext" class="context-close">
          <svg class="close-context bi bi-x-square-fill" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </div>
      </div>
      <div class="content">
        <router-view class="router"></router-view>
        <div class="card notification" :class="{ hide: !showModal }">
          <div class="card-body notification-body">
            <p>An update is available. Refresh the page to apply.</p>
            <button type="button" class="btn btn-sm btn-primary" @click="refreshPage">Refresh Now</button>
            <button type="button" class="btn btn-sm btn-secondary" @click="hideModal">Later</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind.min.js';

import Menu from '@/components/Menu';
import Tag from '@/components/Tag';
import TheLogo from '@/components/TheLogo';

import {
  BLUR_EDITOR,
  DEACTIVATE_CONTEXT,
  HIDE_MENU,
  SHOW_MENU,
} from '@/store/actions';

export default {
  name: 'App',
  components: {
    Menu,
    Tag,
    TheLogo,
  },
  data() {
    return {
      activeElement: null,
      showModal: false,
    };
  },
  computed: {
    context() {
      return this.$store.state.context;
    },
    contextTags() {
      return this.context.tags.sort();
    },
    offline() {
      return !this.$store.state.online;
    },
    showMenu() {
      return this.$store.state.menu.show;
    },
  },
  methods: {
    bindShortcuts() {
      Mousetrap.bind('a', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerActionable();
      });
      Mousetrap.bind('c', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();

        this.$router.push({ name: 'context' });
      });
      Mousetrap.bind('d', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerDiscarded();
      });
      Mousetrap.bind('esc', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();
      });
      Mousetrap.bind('i', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();

        window.open('https://github.com/voraciousdev/octo/issues', '_blank');
      });
      Mousetrap.bind('n', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerNewDocument();
      });
      Mousetrap.bind('r', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerRecent();
      });
      Mousetrap.bind('u', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerUntagged();
      });
    },
    deactivateContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT);
    },
    displayMenu() {
      this.$store.dispatch(SHOW_MENU);
      this.activeElement = document.activeElement;

      this.activeElement.blur();
      this.bindShortcuts();
    },
    hideMenu() {
      if (this.activeElement) {
        this.activeElement.focus();
        this.activeElement = null;
      }

      this.$store.dispatch(HIDE_MENU);
      this.unbindShortcuts();
    },
    hideModal() {
      this.showModal = false;
    },
    refreshPage() {
      window.location.reload(true);
    },
    triggerActionable() {
      this.hideMenu();

      if (this.$route.name !== 'actionable') {
        this.$router.push({ name: 'actionable' });
      }
    },
    triggerDiscarded() {
      this.hideMenu();

      if (this.$route.name !== 'discarded') {
        this.$router.push({ name: 'discarded' });
      }
    },
    triggerNewDocument() {
      this.hideMenu();

      if (this.$route.name !== 'dashboard') {
        this.$router.push({ name: 'dashboard' });
      }
    },
    triggerRecent() {
      this.hideMenu();

      if (this.$route.name !== 'recent') {
        this.$router.push({ name: 'recent' });
      }
    },
    triggerUntagged() {
      this.hideMenu();

      if (this.$route.name !== 'untagged') {
        this.$router.push({ name: 'untagged' });
      }
    },
    toggleMenu() {
      this.showMenu ? this.hideMenu() : this.displayMenu();
    },
    unbindShortcuts() {
      Mousetrap.unbind([
        'a',
        'c',
        'd',
        'esc',
        'i',
        'n',
        'r',
        'u',
      ]);
    },
  },
  created() {
    window.addEventListener('swupdated', (event) => {
      this.showModal = true;
    });

    Mousetrap.bindGlobal('mod+k', (e, keys) => {
      e.preventDefault();

      this.toggleMenu();
    });

    Mousetrap.bindGlobal('mod+s', (e, keys) => {
      // the editor autosaves, so there is no need to do anything but prevent the browser prompt
      e.preventDefault();
    });

    Mousetrap.bindGlobal('mod+shift+f', (e, keys) => {
      e.preventDefault();

      this.hideMenu();
      this.$router.push({ name: 'documents' });
    });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  letter-spacing: 0.05em;
}

body {
  background-color: #111;
  font-family: 'Fira Sans', arial !important;
  margin: 0;
}

body, pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: 'Fira Mono', monospace !important;
}

a, a:hover {
  color: #aaa;
  text-decoration: none;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.content {
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

.router {
  height: 100%;
  overflow: auto;
  position: relative;
}

.navbar {
  background-color: #1a1a1a;
  padding: 0.5rem 1rem;
}

.navbar .navbar-brand {
  align-items: center;
  display: flex;
  font-size: 1.3em;
}

.navbar .navbar-brand svg {
  margin-right: 0.5rem;
}

.backdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
}

.backdrop .shortcut {
  border: 1px solid #fff;
}

.navbar .buttons .btn:not(.shortcut) {
  border: none;
}

.navbar .btn-menu {
  align-items: baseline;
  display: flex;
}

.action-shortcut {
  color: rgba(0, 0, 0, 0.75);
  font-family: 'Fira Mono', monospace !important;
  margin-left: 0.75rem;
}

.context-banner {
  align-items: center;
  background-color: #111;
  border-bottom: 0.125rem solid #1a1a1a;
  color: #aaa;
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  padding: 0.25rem;
  line-height: normal;
  overflow: auto;
  white-space: nowrap;
}

.context-description {
  margin-right: 1rem;
}

.context-tags {
  margin: auto;
  position: relative;
  z-index: 10;
}

.context-placeholder {
  line-height: 1.5em;
  margin: 0.25rem auto;
  padding: 0.125rem 0.5rem;
}

.context-tag {
  background-color: #1a1a1a;
  border-radius: 0.125rem;
  line-height: 1.5em;
  margin: 0.25rem;
  padding: 0.125rem 0.5rem;
  padding-left: 0.375rem; /* offset svg padding */
}

.context-tag > span {
  line-height: 1.5em;
}

.context-close {
  align-items: center;
  background-color: #aaa;
  border-radius: 0.125rem;
  color: #111;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.0675rem;
  position: absolute;
  right: 1rem;
  z-index: 20;
}

.dropdown-menu {
  margin-top: 1.25rem;
}

.dropdown-item {
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover, .dropdown-item:active, .dropdown-item.active {
  background-color: #333;
  border: none;
}

.dropdown-item svg {
  margin-right: 0.5rem;
}

.dropdown-item .action {
  align-items: baseline;
  display: inline-flex;
  flex-grow: 1;
  justify-content: space-between;
}

.dropdown-item .action-shortcut {
  align-items: center;
  color: #aaa;
  display: flex;
  font-family: 'Fira Mono', monospace !important;
  margin-left: 1rem;
}

.dropdown-item:hover .action-shortcut {
  color: rgba(0, 0, 0, 0.8);
}

.dropdown-item .action-shortcut svg {
  margin: 0 0.5rem;
}

.dropdown-header {
  padding: 0.5rem 1rem;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
  background-color: #557bab !important;
  border: none;
  color: #fff !important;
}

.btn-secondary, .btn-secondary:hover, .btn-secondary:active, .btn-secondary:focus {
  background-color: #1a1a1a !important;
  border: none;
  box-shadow: none !important;
  color: #aaa;
}

.btn-settings, .btn-settings:hover, .btn-settings:active, .btn-settings:focus {
  background-color: #222 !important;
  border: none;
  box-shadow: none !important;
  color: #aaa;
}

.monospace {
  font-family: 'Fira Mono', monospace !important;
}

.card {
  background-color: #1a1a1a;
  margin-bottom: 1em;
}

.card .btn + .btn {
  margin-left: 0.5rem;
}

pre {
  margin: 0;
}

.notification {
  margin: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 20rem;
  z-index: 90;
}

.notification .notification-body {
  padding: 1rem;
}

.hide {
  display: none !important;
}

hr {
  background-color: #aaa;
  margin-top: 0.5rem;
}

svg:not(.close-context) {
  flex-shrink: 0;
  margin-right: 0.5em;
}
</style>
