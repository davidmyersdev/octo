<template>
  <simplebar class="meta p-4 md:p-2">
    <div class="flex flex-col flex-grow">
      <div class="hidden mb-4 md:flex justify-end">
        <button @click="toggleMeta" class="sidebar-button">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="ml-3">Hide</span>
        </button>
      </div>
      <div v-if="document" class="flex flex-col flex-grow">
        <div>
          <DiscardableAction v-if="document.id" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="sidebar-button w-full"></DiscardableAction>
          <button @click.stop="duplicateDocument" class="sidebar-button w-full">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Duplicate</span>
          </button>
          <button v-if="hasCodeblocks" @click="openSandbox" class="sidebar-button w-full">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Create Sandbox</span>
          </button>
        </div>
        <div class="mt-4">
          <Tag v-for="tag in document.tags" :key="tag" :tag="tag" class="sidebar-link"></Tag>
        </div>
        <div class="mt-4">
          <div v-for="task in document.tasks" class="flex items-center px-3 py-2 my-1 md:px-2 md:py-1">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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
    DiscardableAction,
    simplebar,
    Tag,
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
