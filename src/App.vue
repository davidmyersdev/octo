<template>
  <div id="app" class="d-flex flex-column flex-grow-1 flex-shrink-1" :class="sizes">
    <simplebar v-if="context.active || context.editing" class="context-banner relative-fixed">
      <div class="d-flex align-items-center text-center">
        <div v-if="contextTags.length" class="context-tags">
          <Tag v-for="tag in contextTags" :key="tag" :tag="tag" class="context-tag d-inline-flex" />
        </div>
        <div v-else class="context-placeholder">no active tags</div>
        <div @click="deactivateContext" class="context-close">
          <svg class="bi bi-x-square-fill m-0" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </div>
      </div>
    </simplebar>
    <div class="d-flex flex-column flex-grow-1 flex-shrink-1 position-relative min-h-0">
      <router-view class="flex-grow-1 flex-shrink-1 min-h-0"></router-view>
      <div class="card notification position-fixed top-0 right-0 m-3 m-md-2" :class="{ 'd-none': !showModal }">
        <div class="card-body notification-body">
          <p>An update is available. Refresh the app to apply.</p>
          <button type="button" class="btn btn-sm btn-primary" @click="refreshPage">Refresh Now</button>
          <button type="button" class="btn btn-sm btn-secondary" @click="hideModal">Later</button>
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
  font-family: 'Fira Sans', arial !important;
  margin: 0;
}

body, pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: 'Fira Mono', monospace !important;
  margin: 0;
}

a,
a:hover {
  text-decoration: none;
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

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
  border: none;
}

.btn-secondary, .btn-secondary:hover, .btn-secondary:active, .btn-secondary:focus {
  border: none;
  box-shadow: none !important;
}

.btn-toggle, .btn-toggle:hover, .btn-toggle:active, .btn-toggle:focus {
  border: none;
  margin-bottom: 0;
}

.CodeMirror .cm-m-markdown:not(.cm-comment) {
  font-family: 'Fira Sans', helvetica, sans-serif !important;
}

.monospace {
  font-family: 'Fira Mono', monospace !important;
}

.sans-serif {
  font-family: 'Fira Sans', arial !important;
}

.card {
  margin-bottom: 1em;
  border: none;
}

.card .btn + .btn {
  margin-left: 0.5rem;
}

.icon-wrapper {
  height: 2em;
  width: 2em;
}

.item {
  align-items: center;
  display: flex;
}

.md-plus .icon-wrapper {
  background-color: inherit;
  color: inherit;
  height: auto;
  width: auto;
}

.md-plus .icon-wrapper svg {
  height: 1.25em;
  width: 1.25em;
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
  margin-right: 0.5em;
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

body.dark {
  background-color: #111;
}

body.light {
  background-color: #eee;
  color: #111;
}

.dark a,
.dark a:hover {
  color: #aaa;
}

.light a,
.light a:hover {
  color: #444;
}

.dark .context-banner {
  background-color: #111;
  border-bottom-color: #1a1a1a;
  color: #aaa;
}

.light .context-banner {
  background-color: #eee;
  border-bottom-color: #ddd;
  color: 444;
}

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

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
  background-color: #557bab !important;
  color: #fff !important;
}

.dark .btn-secondary,
.dark .btn-secondary:hover,
.dark .btn-secondary:active,
.dark .btn-secondary:focus {
  background-color: #1a1a1a !important;
  color: #aaa;
}

.light .btn-secondary,
.light .btn-secondary:hover,
.light .btn-secondary:active,
.light .btn-secondary:focus {
  background-color: #ccc !important;
  color: #444;
}

.dark .btn-toggle,
.dark .btn-toggle:hover,
.dark .btn-toggle:active,
.dark .btn-toggle:focus {
  background-color: #1a1a1a !important;
  border-color: #1a1a1a;
}

.light .btn-toggle,
.light .btn-toggle:hover,
.light .btn-toggle:active,
.light .btn-toggle:focus {
  background-color: #ccc !important;
  color: #444 !important;
}

.btn-toggle .custom-checkbox .custom-control-input ~ .custom-control-label::before {
  background-color: #999;
  border-color: #888;
}

.dark .btn-toggle .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: #444;
}

.light .btn-toggle .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: #aaa;
}

.btn-toggle .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%231a1a1a' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

.btn-toggle .custom-radio .custom-control-input ~ .custom-control-label::before {
  background-color: #999;
  border-color: #888;
}

.btn-toggle .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%231a1a1a'/%3e%3c/svg%3e");
}

.dark .card {
  background-color: #1a1a1a;
}

.light .card {
  background-color: #ddd;
  color: #444;
}

.dark .icon-wrapper {
  background-color: #aaa;
  color: #111;
}

.dark .md-plus .icon-wrapper {
  background-color: transparent;
  color: inherit;
}

.light .icon-wrapper {
  background-color: #ccc;
}

.light .md-plus .icon-wrapper {
  background-color: transparent;
  color: inherit;
}

.dark .item:hover,
.dark .item:active,
.dark .item:focus {
  background-color: #1f1f1f;
}

.light .item:hover,
.light .item:active,
.light .item:focus {
  background-color: #ccc;
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

.dark .bg-darker {
  background-color: #050505 !important;
}

.light .bg-darker {
  background-color: #ddd !important;
}

.dark .simplebar-scrollbar::before {
  background-color: rgba(255, 255, 255, 0.25);
}

.light .simplebar-scrollbar::before {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
