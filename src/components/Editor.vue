<template>
  <div class="container-lg">
    <div class="editor" @click="focusEditor">
      <div class="gutter" :class="{ 'md-plus': mediumPlus }" @click="focusEditorStart"></div>
      <Editable ref="editable" class="editable" @input="input" />
      <div class="gutter expand" @click="focusEditorEnd"></div>
      <div class="saved-at">{{ savedAt }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import Editable from '@/components/Editable';

import {
  ADD_DOCUMENT,
  CLEAR_EDITOR,
  CREATE_DOCUMENT,
  EDIT_DOCUMENT,
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
    Editable,
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

    // gracefully handle the route change when adding a new note
    if (!this.adding) {
      await this.$store.dispatch(CLEAR_EDITOR);
    }

    next();
  },
};
</script>

<style scoped>
  .editor {
    display: block;
    display: flex;
    flex-direction: column;
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
    height: 1rem;
    width: 100%;
  }

  .editor .gutter.md-plus {
    height: 3.25rem;
  }

  .editor .gutter.expand {
    flex-grow: 1;
  }
</style>
