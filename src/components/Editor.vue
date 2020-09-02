<template>
  <div class="container-lg">
    <div class="editor" @click="focusEditor">
      <div class="gutter gutter-start" :class="{ 'md-plus': mediumPlus }" @click="focusEditorStart"></div>
      <MarkdownEditor ref="editable" class="editable" @input="input" />
      <div class="gutter gutter-end expand" :class="{ 'md-plus': mediumPlus }" @click="focusEditorEnd"></div>
      <div class="document-actions">
        <DiscardableAction v-if="document.clientId" :discardedAt="document.discardedAt" :onDiscard="discard" :onRestore="restore" class="destroy"></DiscardableAction>
        <button v-if="anyCodeblocks" @click="evaluate" class="btn btn-secondary btn-sm">
          <CodeLabel>sandbox</CodeLabel>
        </button>
      </div>
      <div class="saved-at">{{ savedAt }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { parseCodeblocks } from '@/common/parsers';

import CodeLabel from '@/components/labels/Code';
import CodeSandbox from '@/common/code_sandbox';
import DiscardableAction from '@/components/DiscardableAction';
import MarkdownEditor from '@/components/MarkdownEditor';

import {
  ADD_DOCUMENT,
  CLEAR_EDITOR,
  CREATE_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  SET_EDITOR_CONTEXT,
  SET_EDITOR_DOCUMENT,
} from '@/store/actions';

const slate = () => ({
  adding: false,
  adding_context: false,
  debounce: null,
  placeholder: {
    clientId: null,
    createdAt: null,
    text: '',
    discardedAt: null,
    tags: [],
    updatedAt: null,
  },
  now: moment(),
  ticker: null,
});

export default {
  name: 'editor',
  components: {
    CodeLabel,
    DiscardableAction,
    MarkdownEditor,
  },
  data() {
    return slate();
  },
  watch: {
    loaded(loaded) {
      if (loaded && this.$route.params.documentId) {
        this.$store.dispatch(SET_EDITOR_DOCUMENT, {
          document: {
            clientId: this.$route.params.documentId,
          }
        });
      }
    },
  },
  computed: {
    anyCodeblocks() {
      return parseCodeblocks(this.document.text).length > 0;
    },
    document() {
      return this.$store.state.documents.all.find(doc => doc.clientId === this.$route.params.documentId) || this.placeholder;
    },
    loaded() {
      return this.$store.state.loaded;
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
    async discard() {
      this.$store.dispatch(DISCARD_DOCUMENT, {
        document: {
          clientId: this.document.clientId,
        },
      });

      this.$router.push({ name: 'dashboard' });
    },
    async evaluate() {
      const files = parseCodeblocks(this.document.text).reduce((agg, codeblock, index) => {
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
    async restore() {
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
        if (this.debounce) {
          clearTimeout(this.debounce);
        }

        this.debounce = setTimeout(() => {
          if (this.document.text !== value) {
            this.$store.dispatch(EDIT_DOCUMENT, {
              document: {
                clientId: this.document.clientId,
                text: value,
              },
            });
          }
        }, 800);
      } else if (this.adding_context && value.length > 0) {
        this.adding_context = false;
      } else if (!this.adding && value.length > 0) {
        this.adding = true;

        const document = await this.$store.dispatch(CREATE_DOCUMENT, {
          document: {
            text: value,
          },
        });

        this.$router.push({ name: 'document', params: { documentId: document.clientId, skip_reset: true } });
      }
    },
  },
  async created() {
    this.ticker = setInterval(() => {
      this.now = moment();
    }, 5000);
  },
  async mounted() {
    this.focusEditor();
  },
  async beforeDestroy() {
    clearInterval(this.ticker);
  },
  async beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      Object.assign(vm.$data, slate());

      if (vm.loaded && to.params.documentId && !to.params.skip_reset) {
        await vm.$store.dispatch(SET_EDITOR_DOCUMENT, {
          document: {
            clientId: to.params.documentId,
          }
        });
      } else if (!to.params.documentId && vm.$store.state.context.active) {
        vm.adding_context = true;

        await vm.$store.dispatch(SET_EDITOR_CONTEXT);

        vm.focusEditorEnd();
      }
    });
  },
  async beforeRouteLeave(to, from, next) {
    clearInterval(this.ticker);

    // gracefully handle the route change when adding a new document
    if (!this.adding) {
      await this.$store.dispatch(CLEAR_EDITOR);
    }

    next();
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
