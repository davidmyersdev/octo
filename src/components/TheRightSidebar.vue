<template>
  <simplebar class="meta p-6 md:p-2">
    <div class="flex flex-col flex-grow">
      <div class="hidden mb-4 md:flex justify-end">
        <button @click="toggleMeta" class="sidebar-button">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-x-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          <span class="ml-3">Hide</span>
        </button>
      </div>
      <div v-if="document" class="flex flex-col flex-grow">
        <div>
          <DiscardableAction v-if="document.id" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="sidebar-button w-full"></DiscardableAction>
          <button @click.stop="duplicateDocument" class="sidebar-button w-full">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-file-earmark-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Duplicate</span>
          </button>
          <button v-if="hasCodeblocks" @click="openSandbox" class="sidebar-button w-full">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" aria-hidden="true" focusable="false" width="1.25em" height="1.25em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 296">
              <path d="M115.498 261.088v-106.61L23.814 101.73v60.773l41.996 24.347v45.7l49.688 28.54zm23.814.627l50.605-29.151V185.78l42.269-24.495v-60.011l-92.874 53.621v106.82zm80.66-180.887l-48.817-28.289l-42.863 24.872l-43.188-24.897l-49.252 28.667l91.914 52.882l92.206-53.235zM0 222.212V74.495L127.987 0L256 74.182v147.797l-128.016 73.744L0 222.212z"/>
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Create Sandbox</span>
          </button>
        </div>
        <div class="mt-4">
          <Tag v-for="tag in document.tags" :key="tag" :tag="tag" class="sidebar-link"></Tag>
        </div>
        <div class="mt-4">
          <div v-for="task in document.tasks" class="flex items-center px-3 py-2 my-1 md:px-2 md:py-1">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
            </svg>
            <span class="flex-grow overflow-hidden truncate ml-3">{{ task }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1">
          <div v-if="document.updatedAt">
            <small class="text-gray-700">Last Saved</small>
            <div class="capitalize pt-2 md:pt-1">{{ savedAt }}</div>
          </div>
          <div v-if="document.createdAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Created</small>
            <div class="pt-2 md:pt-1">{{ createdAt }}</div>
          </div>
          <div v-if="document.updatedAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Updated</small>
            <div class="pt-2 md:pt-1">{{ updatedAt }}</div>
          </div>
          <div v-if="document.discardedAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Discarded</small>
            <div class="pt-2 md:pt-1">{{ discardedAt }}</div>
          </div>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue';

import DiscardableAction from '@/components/DiscardableAction';
import CodeLabel from '@/components/labels/Code';
import DuplicateLabel from '@/components/labels/Duplicate';
import InfoLabel from '@/components/labels/Info';
import TaskLabel from '@/components/labels/Task';
import Tag from '@/components/Tag';

import CodeSandbox from '@/common/code_sandbox';
import { parseCodeblocks } from '@/common/parsers';

import {
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  RESTORE_DOCUMENT,
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '@/store/actions';

export default {
  name: 'TheRightSidebar',
  components: {
    CodeLabel,
    DiscardableAction,
    DuplicateLabel,
    InfoLabel,
    simplebar,
    Tag,
    TaskLabel,
  },
  data() {
    return {
      now: moment(),
      ticker: null,
    };
  },
  computed: {
    codeblocks() {
      return parseCodeblocks(this.document.text);
    },
    document() {
      return this.$store.getters.currentDoc;
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0;
    },
    savedAt() {
      if (this.$route.params.id) {
        if (this.now.diff(this.document.updatedAt, 'seconds') < 5) {
          return 'just now';
        }
        else {
          return `${moment(this.document.updatedAt).from(this.now, true)} ago`;
        }
      }

      return 'Not yet saved';
    },
    createdAt() {
      if (this.$route.params.id) {
        return moment(this.document.createdAt).format('ddd, MMM Do, YYYY [at] h:mm A');
      }

      return 'Not yet created'
    },
    discardedAt() {
      return moment(this.document.discardedAt).format('ddd, MMM Do, YYYY [at] h:mm A');
    },
    updatedAt() {
      if (this.$route.params.id) {
        return moment(this.document.updatedAt).format('ddd, MMM Do, YYYY [at] h:mm A');
      }

      return 'Not yet updated'
    },
  },
  methods: {
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.document.id });

      this.$router.push({ name: 'dashboard' });
    },
    async duplicateDocument() {
      const newDocId = await this.$store.dispatch(DUPLICATE_DOCUMENT, { id: this.document.id });

      this.$router.push({ name: 'document', params: { id: newDocId } });
    },
    async openSandbox() {
      const files = this.codeblocks.reduce((agg, codeblock, index) => {
        const filename = codeblock.filename || [index, (codeblock.language || 'txt')].join('.');

        return {
          ...agg,
          [filename]: {
            content: codeblock.code,
          },
        };
      }, {});

      CodeSandbox.create(files).then(sandbox_id => CodeSandbox.open(sandbox_id));
    },
    async restoreDocument() {
      this.$store.dispatch(RESTORE_DOCUMENT, { id: this.document.id });
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.$store.state.showRightSidebar);
    },
  },
  async beforeDestroy() {
    clearInterval(this.ticker);
  },
  async mounted() {
    this.mounted = true;

    this.ticker = setInterval(() => {
      this.now = moment();
    }, 5000);
  },
};
</script>
