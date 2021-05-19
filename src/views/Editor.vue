<template>
  <div @click="focusEditor" class="flex flex-col flex-grow">
    <div class="md:container md:mx-auto flex flex-grow">
      <div class="editor flex flex-col flex-grow min-w-0 p-4 md:px-16 md:py-0">
        <div class="gutter h-8" @click="focusEditorStart"></div>
        <InkEditor v-if="ink" ref="editable" class="editable" :appearance="appearance" :images="settings.images.enabled" :initialSelection="initialSelection" :spellcheck="spellcheck" :value="document.text" @input="input" />
        <MarkdownEditor v-else ref="editable" class="editable" :theme="appearance" :initialCursor="initialCursor" :initialVimMode="initialVimMode" :settings="settings" :value="document.text" @input="input" @ready="onReady" />
        <div class="gutter h-8 flex-grow" @click="focusEditorEnd"></div>
      </div>
    </div>
    <div v-if="!showRightSidebar && currentDoc" class="fixed top-4 right-4 z-index-10 hidden md:block">
      <button @click="toggleMeta" class="button button-size-medium button-color-gray">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-3">Info</span>
      </button>
    </div>
  </div>
</template>

<script>
import InkEditor from '@/../lib/vue-ink/src/Ink.vue'
import MarkdownEditor from '@voraciousdev/vue-markdown-editor'

import Doc from '@/models/doc'
import { open } from '@/router'

import {
  ADD_DOCUMENT,
  EDIT_DOCUMENT,
  SET_DOCUMENT,
  SET_EDITOR,
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '@/store/actions'

export default {
  name: 'Editor',
  components: {
    InkEditor,
    MarkdownEditor,
  },
  props: {
    id: String,
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
    initialFocus: {
      type: String,
      default: () => ('any'),
      validator: (position) => (
        ['any', 'start', 'end'].includes(position)
      ),
    },
    initialSelection: {
      type: Object,
    },
    initialVimMode: {
      type: String
    },
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc(),
    }
  },
  watch: {
    document() {
      this.clearHistory()
      this.focusEditor()
    },
  },
  computed: {
    appearance() {
      return this.$store.state.settings.theme
    },
    currentDoc() {
      return this.$store.getters.currentDoc
    },
    document() {
      return this.$store.getters.decrypted.find(doc => doc.id === this.id) || this.placeholder
    },
    ink() {
      return this.settings.version === 'ink'
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.$mq)
    },
    settings() {
      return this.$store.state.settings.editor
    },
    showRightSidebar() {
      return this.$store.state.showRightSidebar
    },
    spellcheck() {
      return this.$store.state.settings.editor.spellcheck
    },
  },
  methods: {
    clearHistory() {
      if (this.ink) {
        const listener = () => {
          if (this.document.text === this.editor.getValue()) {
            this.editor.off('change', listener)
            this.editor.clearHistory()
          }
        }

        this.editor.on('change', listener)
      }
    },
    focusEditor() {
      this.$refs.editable.focus()
    },
    focusInitial() {
      this.focusEditor()

      if (this.initialFocus === 'start') {
        this.focusEditorStart()
      } else if (this.initialFocus === 'end') {
        this.focusEditorEnd()
      }
    },
    async focusEditorEnd() {
      this.$refs.editable.focusEnd()
    },
    async focusEditorStart() {
      this.$refs.editable.focusStart()
    },
    async input(text) {
      if (this.id) {
        this.$store.dispatch(EDIT_DOCUMENT, { id: this.document.id, text })
      } else {
        this.$store.dispatch(ADD_DOCUMENT, new Doc({ id: this.document.id, text }))

        if (this.ink) {
          open({
            name: 'document',
            params: {
              id: this.document.id,
              initialSelection: this.$refs.editable.selection(),
            },
          })
        } else {
          open({
            name: 'document',
            params: {
              id: this.document.id,
              initialCursor: {
                character: this.editor.getCursor().ch,
                line: this.editor.getCursor().line,
              },
              initialVimMode: this.editor.getOption('keyMap'),
            },
          })
        }
      }
    },
    async onReady(instance) {
      this.editor = instance

      this.focusInitial()
      this.clearHistory()

      this.$store.dispatch(SET_EDITOR, this.editor)
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.showRightSidebar)
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'document') {
      this.$store.dispatch(SET_DOCUMENT, { id: to.params.id })
    }

    next()
  },
  mounted() {
    // this will ensure the cursor is properly aligned on font changes
    document.fonts.ready.then(() => {
      if (this.$refs.editable) {
        this.$refs.editable.refresh()
      }
    })

    this.focusEditor()
  },
}
</script>

<style scoped>
  .md-plus .editable {
    font-size: 1.1em;
  }

  .editor {
    --ink-font-family: 'Inter', helvetica, sans-serif;
    --ink-font-family-mono: 'Fira Code', monospace;
  }

  .editor .editable {
    white-space: pre-wrap;
  }

  .editor .gutter {
    cursor: text;
    min-height: 1rem;
    width: 100%;
  }
</style>
