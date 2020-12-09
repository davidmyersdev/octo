<template>
  <simplebar class="meta p-3 p-md-2">
    <div class="d-flex flex-column flex-grow-1">
      <div class="d-none mb-4 d-md-flex justify-content-end">
        <button @click="toggleMeta" class="btn btn-secondary d-flex align-items-center">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          <span class="ml-2">Hide</span>
        </button>
      </div>
      <div v-if="document" class="d-flex flex-column flex-grow-1">
        <div>
          <DiscardableAction v-if="document.id" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="w-100 btn btn-secondary p-3 p-md-2"></DiscardableAction>
          <button @click.stop="duplicateDocument" class="btn btn-secondary p-3 p-md-2 d-flex align-items-center w-100 mt-2">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-file-earmark-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span class="ml-3">Duplicate</span>
          </button>
          <button v-if="hasCodeblocks" @click="openSandbox" class="btn btn-secondary p-3 p-md-2 d-flex align-items-center w-100 mt-2">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-journal-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
              <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
            </svg>
            <span class="ml-3">Open Sandbox</span>
          </button>
        </div>
        <div class="mt-4">
          <Tag v-for="tag in document.tags" :key="tag" :tag="tag" class="item rounded p-3 my-1 px-md-2 py-md-1"></Tag>
        </div>
        <div class="mt-4">
          <div v-for="task in document.tasks" class="d-flex align-items-center px-3 py-2 my-1 px-md-2 py-md-1">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
            </svg>
            <span class="flex-grow-1 overflow-hidden text-truncate ml-3">{{ task }}</span>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-end flex-grow-1 px-3 p-md-2 mt-4 mb-3 mb-md-1">
          <div v-if="document.updatedAt">
            <small class="text-muted">Last Saved</small>
            <div class="text-capitalize pt-2 pt-md-1">{{ savedAt }}</div>
          </div>
          <div v-if="document.createdAt" class="mt-3 mt-md-2">
            <small class="text-muted">Created</small>
            <div class="pt-2 pt-md-1">{{ createdAt }}</div>
          </div>
          <div v-if="document.updatedAt" class="mt-3 mt-md-2">
            <small class="text-muted">Updated</small>
            <div class="pt-2 pt-md-1">{{ updatedAt }}</div>
          </div>
          <div v-if="document.discardedAt" class="mt-3 mt-md-2">
            <small class="text-muted">Discarded</small>
            <div class="pt-2 pt-md-1">{{ discardedAt }}</div>
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

<style scoped>
  svg {
    margin: 0;
  }

  .meta {
    color: #aaa;
  }
</style>
