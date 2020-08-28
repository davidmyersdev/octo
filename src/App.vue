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
          <div class="dropdown">
            <div @click="hideMenu" class="backdrop" :class="{ hide: !showMenu }">
              <h3 class="message d-none d-md-block">try pressing <span class="shortcut btn">cmd + k</span> to toggle the shortcut menu</h3>
            </div>
            <div class="btn btn-menu btn-primary d-flex justify-space-between align-items-center" @click.stop="toggleMenu" role="button" aria-haspopup="true" aria-expanded="false">
              <svg width="0.75em" height="0.75em" viewBox="0 0 16 16" class="bi bi-lightning-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
              </svg>
              <span>actions</span>
              <small class="action-shortcut d-none d-md-block">cmd + k</small>
            </div>
            <div class="dropdown-menu dropdown-menu-right" :class="{ show: showMenu }">
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'dashboard' }">
                <svg class="bi bi-file-earmark-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
                  <path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                </svg>
                <span class="action">new note <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>n</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'context' }">
                <svg class="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"/>
                  <path fill-rule="evenodd" d="M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"/>
                </svg>
                <span class="action">change context <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>c</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'documents' }">
                <div class="d-flex justify-content-between w-100">
                  <SearchLabel>search</SearchLabel>
                  <small class="action-shortcut d-none d-md-flex">
                    <span>cmd + shift + f</span>
                  </small>
                </div>
              </router-link>
              <h6 class="dropdown-header">filters</h6>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'actionable' }">
                <div class="d-flex justify-content-between w-100">
                  <TaskLabel>actionable</TaskLabel>
                  <small class="action-shortcut d-none d-md-flex">
                    <span>cmd + k</span>
                    <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <span>a</span>
                  </small>
                </div>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'recent' }">
                <div class="d-flex justify-content-between w-100">
                  <TimelyLabel>recent</TimelyLabel>
                  <small class="action-shortcut d-none d-md-flex">
                    <span>cmd + k</span>
                    <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <span>r</span>
                  </small>
                </div>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'untagged' }">
                <div class="d-flex justify-content-between w-100">
                  <DocumentLabel>untagged</DocumentLabel>
                  <small class="action-shortcut d-none d-md-flex">
                    <span>cmd + k</span>
                    <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <span>u</span>
                  </small>
                </div>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'discarded' }">
                <div class="d-flex justify-content-between w-100">
                  <DiscardLabel>discarded</DiscardLabel>
                  <small class="action-shortcut d-none d-md-flex">
                    <span>cmd + k</span>
                    <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <span>d</span>
                  </small>
                </div>
              </router-link>
              <h6 class="dropdown-header">other</h6>
              <a @click="hideMenu" class="dropdown-item" target="_blank" href="https://github.com/voraciousdev/octo/issues">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6H4a3.99 3.99 0 0 1 1.333-2.982A3.983 3.983 0 0 1 8 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0 1 12 6z"/>
                </svg>
                <span class="action">report issue <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>i</span>
                </small></span>
              </a>
            </div>
          </div>
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

import DiscardLabel from '@/components/labels/Discard';
import DocumentLabel from '@/components/labels/Document';
import SearchLabel from '@/components/labels/Search';
import Tag from '@/components/Tag';
import TaskLabel from '@/components/labels/Task';
import TheLogo from '@/components/TheLogo';
import TimelyLabel from '@/components/labels/Timely';

import {
  BLUR_EDITOR,
  DEACTIVATE_CONTEXT,
  FOCUS_EDITOR,
} from '@/store/actions';

export default {
  name: 'app',
  components: {
    DiscardLabel,
    DocumentLabel,
    SearchLabel,
    Tag,
    TaskLabel,
    TheLogo,
    TimelyLabel,
  },
  data() {
    return {
      activeElement: null,
      showMenu: false,
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
        this.triggerNewNote();
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
      this.showMenu = true;
      this.activeElement = document.activeElement;

      this.activeElement.blur();
      this.bindShortcuts();
    },
    hideMenu() {
      if (this.activeElement) {
        this.activeElement.focus();
        this.activeElement = null;
      }

      this.showMenu = false;
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
    triggerNewNote() {
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
      this.toggleMenu();
    });

    Mousetrap.bindGlobal('mod+shift+f', (e, keys) => {
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
  margin-left: 0.5rem;
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

svg:not(.close-context) {
  flex-shrink: 0;
  margin-right: 0.5em;
}
</style>
