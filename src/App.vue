<template>
  <div id="app" class="flex flex-col flex-grow flex-shrink text-gray-900 dark:text-gray-400 bg-white dark:bg-gray-900" :class="sizes">
    <simplebar v-if="context.active || context.editing" class="context-banner bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 relative-fixed">
      <div class="flex items-center text-center">
        <div v-if="contextTags.length" class="context-tags">
          <Tag v-for="tag in contextTags" :key="tag" :tag="tag" class="button button-size-small button-color-gray ml-1" />
        </div>
        <div v-else class="context-placeholder">no active tags</div>
        <div @click="deactivateContext" class="context-close">
          <svg class="bi bi-x-square-fill m-0" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </div>
      </div>
    </simplebar>
    <div class="flex flex-col flex-grow flex-shrink relative min-h-0">
      <router-view class="flex-grow flex-shrink min-h-0"></router-view>
      <div class="flex flex-col min-w-0 max-w-full rounded break-words bg-white notification fixed top-0 right-0 m-4 md:m-2 dark:bg-gray-800" :class="{ 'hidden': !showModal }">
        <div class="flex-auto p-4 notification-body">
          <p class="mb-6">An update is available. Refresh the app to apply.</p>
          <button type="button" class="button button-size-small button-color-blue text-gray-900 dark:text-gray-200" @click="refreshPage">Refresh Now</button>
          <button type="button" class="button button-size-small button-color-gray ml-2" @click="hideModal">Later</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';

import 'simplebar/dist/simplebar.min.css';

import Tag from '@/components/Tag';

import {
  DEACTIVATE_CONTEXT,
} from '@/store/actions';

export default {
  name: 'App',
  components: {
    simplebar,
    Tag,
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    theme(value) {
      document.body.classList.remove('dark', 'light')
      document.body.classList.add(value)
    },
  },
  computed: {
    context() {
      return this.$store.state.context;
    },
    contextTags() {
      return this.context.tags.sort();
    },
    sizes() {
      if (this.$mq === 'xs') return ['xs xs-plus'];
      if (this.$mq === 'sm') return ['sm xs-plus sm-plus'];
      if (this.$mq === 'md') return ['md xs-plus sm-plus md-plus'];
      if (this.$mq === 'lg') return ['lg xs-plus sm-plus md-plus lg-plus'];
      if (this.$mq === 'xl') return ['xl xs-plus sm-plus md-plus lg-plus xl-plus'];
    },
    theme() {
      return this.$store.state.settings.theme
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
}

body {
  font-family: 'Inter', arial !important;
  margin: 0;
}

body, pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: 'Fira Code', monospace !important;
  margin: 0;
}

.context-banner {
  border-bottom: 0.125rem solid;
  flex-shrink: 0;
  flex-wrap: nowrap;
  padding: 0.25rem;
  line-height: normal;
  white-space: nowrap;
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
  border-radius: 0.125rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.0675rem;
  position: fixed;
  right: 1rem;
  z-index: 20;
}

.CodeMirror .cm-m-markdown:not(.cm-comment) {
  font-family: 'Inter', helvetica, sans-serif !important;
}

.monospace {
  font-family: 'Fira Code', monospace !important;
}

.sans-serif {
  font-family: 'Inter', helvetica, sans-serif !important;
}

.notification {
  width: 20rem;
  z-index: 90;
}

.notification .notification-body {
  padding: 1rem;
}

hr {
  margin-top: 0.5rem;
}

svg {
  flex-shrink: 0;
}

.border-transparent {
  border-color: transparent !important;
}

.cursor-pointer {
  cursor: pointer;
}

.relative-fixed {
  /* this is a hack to position fixed elements relative to this container instead of the viewport */
  transform: translateZ(0);
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-3 {
  bottom: 1rem !important;
}

.left-0 {
  left: 0 !important;
}

.right-0 {
  right: 0 !important;
}

.right-2 {
  right: 0.5rem !important;
}

.right-3 {
  right: 1rem !important;
}

.top-0 {
  top: 0 !important;
}

.top-2 {
  top: 0.5rem !important;
}

.top-3 {
  top: 1rem !important;
}

.z-index-10 {
  z-index: 10;
}

.z-index-1 {
  z-index: 1;
}

.min-h-0 {
  min-height: 0 !important;
}

.min-w-0 {
  min-width: 0 !important;
}

.simplebar-scrollbar::before {
  bottom: 0.25rem !important;
  top: 0.25rem !important;
}

.simplebar-content {
  display: flex;
  flex-direction: column;
  min-height: 100% !important;
}

/* theming */

.dark .context-tag {
  background-color: #1a1a1a;
}

.light .context-tag {
  background-color: #ddd;
}

.dark .context-close {
  background-color: #aaa;
  color: #111;
}

.light .context-close {
  background-color: #444;
  color: #eee;
}

.dark .notification {
  box-shadow: 0 0 0 0.125rem #111 !important;
}

.light .notification {
  box-shadow: 0 0 0 0.125rem #eee !important;
}

hr {
  background-color: #aaa;
}

.dark .simplebar-scrollbar::before {
  background-color: rgba(255, 255, 255, 0.25);
}

.light .simplebar-scrollbar::before {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
