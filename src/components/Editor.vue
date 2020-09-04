<template>
  <div class="container-lg">
    <div class="editor" @click="focusEditor">
      <div class="gutter gutter-start" :class="{ 'md-plus': mediumPlus }" @click="focusEditorStart"></div>
      <MarkdownEditor ref="editable" class="editable" :initialCursor="initialCursor" :value="document.text" @input="input" @ready="onReady" />
      <div class="gutter gutter-end expand" :class="{ 'md-plus': mediumPlus }" @click="focusEditorEnd"></div>
      <div class="document-actions">
        <DiscardableAction v-if="document.clientId" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="destroy"></DiscardableAction>
        <button v-if="hasCodeblocks" @click="openSandbox" class="btn btn-secondary btn-sm">
          <CodeLabel>sandbox</CodeLabel>
        </button>
      </div>
      <div class="saved-at">{{ savedAt }}</div>
    </div>
  </div>
</template>

<script>
import CodeLabel from '@/components/labels/Code';
import CodeSandbox from '@/common/code_sandbox';
import DiscardableAction from '@/components/DiscardableAction';
import MarkdownEditor from '@/components/MarkdownEditor';

import {
  ADD_DOCUMENT,
  CREATE_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  SET_EDITOR,
} from '@/store/actions';

export default {
  name: 'Editor',
  components: {
    CodeLabel,
    DiscardableAction,
    MarkdownEditor,
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
      placeholder: {
        clientId: null,
        createdAt: null,
        text: '',
        discardedAt: null,
        tags: [],
        updatedAt: null,
      },
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
      return this.$store.state.documents.all.find(doc => doc.clientId === this.$route.params.documentId) || this.placeholder;
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0;
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.$mq);
    },
    savedAt() {
      if (this.document.updatedAt) {
        if (this.now.diff(this.document.updatedAt, 'seconds') < 5) {
          return 'Saved just now';
        }
        else {
          return `Saved ${moment(this.document.updatedAt).from(this.now, true)} ago`;
        }
      }
      else {
        return 'Not yet saved';
      }
    },
  },
  methods: {
    async createDocument(value) {
      const document = await this.$store.dispatch(CREATE_DOCUMENT, {
        document: {
          text: value,
        },
      });
      const cursor = this.editor.getCursor();

      this.$router.push({
        name: 'document',
        params: {
          documentId: document.clientId,
          initialCursor: {
            character: cursor.ch,
            line: cursor.line,
          },
        },
      });
    },
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, {
        document: {
          clientId: this.document.clientId,
        },
      });

      this.$router.push({ name: 'dashboard' });
    },
    async editDocument(clientId, value) {
      this.$store.dispatch(EDIT_DOCUMENT, {
        document: {
          clientId: clientId,
          text: value,
        },
      });
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
      this.$store.dispatch(RESTORE_DOCUMENT, {
        document: {
          clientId: this.document.clientId,
        },
      });
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
    async input(value) {
      if (this.document.clientId) {
        this.editDocument(this.document.clientId, value);
      } else {
        this.createDocument(value);
      }
    },
    async onReady(instance) {
      this.editor = instance;

      this.$store.dispatch(SET_EDITOR, {
        editor: this.editor,
      });
    },
  },
  async beforeDestroy() {
    clearInterval(this.ticker);
  },
  async mounted() {
    this.mounted = true;
    this.focusEditor();

    this.ticker = setInterval(() => {
      this.now = moment();
    }, 5000);
  },
};
</script>

<style scoped>
  .editor {
    background: url('~@/assets/octopus-transparent.svg') center center no-repeat;
    background-size: 50% 50%;
    display: block;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    margin: auto;
    /* need to automatically fill remaining height for editor */
    min-height: 30rem;
  }

  .editor .editable {
    outline: none;
    white-space: pre-wrap;
  }

  .editor .saved-at {
    bottom: 0;
    color: #aaa;
    margin: 1rem;
    position: fixed;
    right: 0;
  }

  .editor .tag {
    padding: 0.25em 1em;
  }

  .editor .gutter {
    cusor: text;
    min-height: 1rem;
    width: 100%;
  }

  .editor .gutter.gutter-end {
    flex-grow: 1;
    min-height: 2rem;
  }

  .document-actions {
    color: #aaa;
    position: fixed;
    margin-right: 1rem;
    margin-top: 1rem;
    right: 0;
    z-index: 10;
  }

  .document-actions > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  svg {
    margin-right: 0.25rem;
  }
</style>
