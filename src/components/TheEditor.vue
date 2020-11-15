<template>
  <div class="d-flex flex-grow-1 flex-column flex-lg-row-reverse">
    <div v-if="showMeta" class="meta p-3">
      <div class="mb-4">
        <DiscardableAction v-if="document.id" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="w-100 mb-2"></DiscardableAction>
        <button @click.stop="duplicateDocument" class="btn btn-secondary btn-sm d-flex align-items-center w-100 mb-2">
          <DuplicateLabel>duplicate</DuplicateLabel>
        </button>
        <button v-if="hasCodeblocks" @click="openSandbox" class="btn btn-secondary btn-sm d-flex w-100 mb-2">
          <CodeLabel>sandbox</CodeLabel>
        </button>
      </div>
      <div class="mb-4">
        <Tag class="item" v-for="tag in document.tags" :key="tag" :tag="tag"></Tag>
      </div>
      <div class="mb-4">
        <TaskLabel v-for="task in document.tasks">{{ task }}</TaskLabel>
      </div>
      <div>
        <div v-if="document.updatedAt" class="mb-1">
          <small class="text-muted">Last Saved</small>
          <div>{{ savedAt }}</div>
        </div>
        <div v-if="document.createdAt" class="mb-1">
          <small class="text-muted">Created</small>
          <div>{{ createdAt }}</div>
        </div>
        <div v-if="document.updatedAt" class="mb-1">
          <small class="text-muted">Updated</small>
          <div>{{ updatedAt }}</div>
        </div>
        <div v-if="document.discardedAt" class="mb-1">
          <small class="text-muted">Discarded</small>
          <div>{{ discardedAt }}</div>
        </div>
      </div>
    </div>
    <div class="editor-container d-flex flex-grow-1 position-relative" :class="{ 'overflow-auto': mediumPlus }">
      <div class="container-fluid container-xl d-flex">
        <div class="editor d-flex flex-column flex-grow-1" @click="focusEditor">
          <div class="gutter gutter-start" :class="{ 'md-plus': mediumPlus }" @click="focusEditorStart"></div>
          <MarkdownEditor ref="editable" class="editable" :initialCursor="initialCursor" :settings="settings" :value="document.text" @input="input" @ready="onReady" />
          <div class="gutter gutter-end flex-grow-1" :class="{ 'md-plus': mediumPlus }" @click="focusEditorEnd"></div>
        </div>
      </div>
      <button @click="toggleMeta" class="btn btn-sm btn-secondary position-absolute top-3 right-3 z-index-10">
        <InfoLabel>info</InfoLabel>
      </button>
    </div>
  </div>
</template>

<script>
import CodeLabel from '@/components/labels/Code';
import DuplicateLabel from '@/components/labels/Duplicate';
import InfoLabel from '@/components/labels/Info';
import TaskLabel from '@/components/labels/Task';

import CodeSandbox from '@/common/code_sandbox';
import Doc from '@/models/doc';

import DiscardableAction from '@/components/DiscardableAction';
import MarkdownEditor from '@/components/MarkdownEditor';
import Tag from '@/components/Tag';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  SET_EDITOR,
  TOGGLE_META,
} from '@/store/actions';

export default {
  name: 'TheEditor',
  components: {
    CodeLabel,
    DiscardableAction,
    DuplicateLabel,
    InfoLabel,
    MarkdownEditor,
    Tag,
    TaskLabel,
  },
  props: {
    initialCursor: {
      type: Object,
      default: () => ({
        character: 0,
        line: 0,
      }),
      validator: (cursor) => (
        cursor.hasOwnProperty('character') && cursor.hasOwnProperty('line')
      ),
    },
  },
  data() {
    return {
      editor: null,
      mounted: false,
      now: moment(),
      placeholder: new Doc(),
      ticker: null,
    };
  },
  computed: {
    codeblocks() {
      // refs are not available until the component is mounted
      // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
      return this.mounted ? this.$refs.editable.codeblocks : [];
    },
    document() {
      return this.$store.getters.decrypted.find(doc => doc.id === this.$route.params.id) || this.placeholder;
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0;
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.$mq);
    },
    settings() {
      return this.$store.state.settings.editor;
    },
    showMeta() {
      return this.$store.state.showMeta;
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
    async focusEditor() {
      this.$refs.editable.focus();
    },
    async focusEditorEnd() {
      this.$refs.editable.focusEnd();
    },
    async focusEditorStart() {
      this.$refs.editable.focusStart();
    },
    async input(text) {
      if (this.$route.params.id) {
        this.$store.dispatch(EDIT_DOCUMENT, { id: this.document.id, text });
      } else {
        this.$store.dispatch(ADD_DOCUMENT, new Doc({ id: this.document.id, text }));

        this.$router.push({
          name: 'document',
          params: {
            id: this.document.id,
            initialCursor: {
              character: this.editor.getCursor().ch,
              line: this.editor.getCursor().line,
            },
          },
        });
      }
    },
    async onReady(instance) {
      this.editor = instance;

      this.focusEditor();
      this.$store.dispatch(SET_EDITOR, this.editor);
    },
    async toggleMeta() {
      this.$store.dispatch(TOGGLE_META);
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
  .editor-container {
    background: url('~@/assets/octopus-transparent.svg') center center no-repeat;
    background-size: 50% 50%;
  }

  .editor .editable {
    outline: none;
    white-space: pre-wrap;
  }

  .editor .gutter {
    cusor: text;
    min-height: 1rem;
    width: 100%;
  }

  .meta {
    background-color: #050505;
    color: #aaa;
    width: 17rem;
  }
</style>
