<template>
  <div id="app">
    <main class="main">
      <TheNavbar/>
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
import Tag from '@/components/Tag';
import TheNavbar from '@/components/TheNavbar';

import {
  DEACTIVATE_CONTEXT,
} from '@/store/actions';

export default {
  name: 'App',
  components: {
    Tag,
    TheNavbar,
  },
  data() {
    return {
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
  },
  methods: {
    deactivateContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT);
    },
    hideModal() {
      this.showModal = false;
    },
    refreshPage() {
      window.location.reload(true);
    },
  },
  created() {
    window.addEventListener('swupdated', (event) => {
      this.showModal = true;
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

hr {
  background-color: #aaa;
  margin-top: 0.5rem;
}

svg:not(.close-context) {
  flex-shrink: 0;
  margin-right: 0.5em;
}

.btn-toggle, .btn-toggle:hover, .btn-toggle:active, .btn-toggle:focus {
  background-color: #1a1a1a !important;
  border: 0.0675rem solid #1a1a1a;
  margin-bottom: 0;
}

.btn-toggle .custom-checkbox .custom-control-input ~ .custom-control-label::before {
  background-color: #999;
  border-color: #888;
}

.btn-toggle .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%231a1a1a' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

.border-transparent {
  border-color: transparent !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
