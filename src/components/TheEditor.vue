<template>
  <div class="container-fluid container-xl d-flex">
    <div class="editor d-flex flex-column flex-grow-1" @click="focusEditor">
      <div class="gutter gutter-start" :class="{ 'md-plus': mediumPlus }" @click="focusEditorStart"></div>
      <MarkdownEditor ref="editable" class="editable" :initialCursor="initialCursor" :settings="settings" :value="document.text" @input="input" @ready="onReady" />
      <div class="gutter gutter-end flex-grow-1" :class="{ 'md-plus': mediumPlus }" @click="focusEditorEnd"></div>
      <div class="document-actions">
        <DiscardableAction v-if="document.id" :discardedAt="document.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="destroy"></DiscardableAction>
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
import Doc from '@/models/doc';

import DiscardableAction from '@/components/DiscardableAction';
import MarkdownEditor from '@/components/MarkdownEditor';

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  SET_EDITOR,
} from '@/store/actions';

export default {
  name: 'TheEditor',
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
    savedAt() {
      if (this.$route.params.id) {
        if (this.now.diff(this.document.updatedAt, 'seconds') < 5) {
          return 'Saved just now';
        }
        else {
          return `Saved ${moment(this.document.updatedAt).from(this.now, true)} ago`;
        }
      }

      return 'Not yet saved';
    },
  },
  methods: {
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.document.id });

      this.$router.push({ name: 'dashboard' });
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
