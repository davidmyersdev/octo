<template>
  <div id="app" class="flex flex-col flex-grow flex-shrink" :class="sizes.concat([(!ligatures && 'ligatures-none')])">
    <div v-if="showStripeModal" class="flex items-center justify-center fixed top-0 left-0 h-full w-full z-50 bg-darkest">
      <div class="flex flex-col items-center justify-center gap-8 text-center text-2xl">
        <svg class="animate-spin mr-3 h-10 w-10 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Redirecting you to Stripe for checkout</span>
      </div>
    </div>
    <simplebar v-if="context.active || context.editing" class="context-banner bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 relative-fixed">
      <div class="flex items-center text-center">
        <div v-if="contextTags.length" class="context-tags">
          <Tag v-for="tag in contextTags" :key="tag" :tag="tag" class="button button-size-small button-color-gray ml-1" />
        </div>
        <div v-else class="context-placeholder">no active tags</div>
        <div @click="deactivateContext" class="button button-size-small button-color-gray">
          <svg width="1.25em" height="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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

import Tag from '/src/components/Tag.vue';

import {
  DEACTIVATE_CONTEXT,
} from '/src/store/actions.js';

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
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(value)
    },
  },
  computed: {
    context() {
      return this.$store.state.context;
    },
    contextTags() {
      return this.context.tags.sort();
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures
    },
    sizes() {
      if (this.$mq === 'xs') return ['xs xs-plus'];
      if (this.$mq === 'sm') return ['sm xs-plus sm-plus'];
      if (this.$mq === 'md') return ['md xs-plus sm-plus md-plus'];
      if (this.$mq === 'lg') return ['lg xs-plus sm-plus md-plus lg-plus'];
      if (this.$mq === 'xl') return ['xl xs-plus sm-plus md-plus lg-plus xl-plus'];
    },
    showStripeModal() {
      return this.$store.state.showStripeModal
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

.ligatures-none * {
  font-variant-ligatures: none;
}

body {
  font-family: 'Inter', helvetica, sans-serif !important;
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

.text-brand {
  color: #e06c75 !important;
}

.border-brand {
  border-color: #e06c75 !important;
}

.bg-brand {
  background-color: #e06c75 !important;
}
</style>
