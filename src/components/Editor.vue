<template>
  <div @click="focusEditor" class="flex flex-col flex-grow">
    <div class="md:container md:mx-auto flex flex-grow">
      <div class="editor flex flex-col flex-grow min-w-0 p-4 md:px-16 md:py-0">
        <div class="gutter h-8" @click="focusEditorStart"></div>
        <Ink v-if="ink" ref="editable" class="ink" :appearance="appearance" :images="settings.images.enabled" :initialSelection="initialSelection" :spellcheck="spellcheck" :value="text" @input="input" />
        <LegacyEditor v-else ref="editable" class="editable" :theme="appearance" :initialCursor="initialCursor" :initialVimMode="initialVimMode" :settings="settings" :value="text" @input="input" @ready="onReady" />
        <p v-if="showReadabilityBar" class="text-gray-400 dark:text-gray-600 text-right">{{ numberOfWords }} words | {{ readTimeDescription }}</p>
        <div class="gutter h-8 flex-grow" @click="focusEditorEnd"></div>
      </div>
    </div>
    <div v-if="!showRightSidebar && text" class="fixed top-4 right-4 z-index-10 hidden md:block">
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
import Ink from '@writewithocto/vue-ink'
import LegacyEditor from '@voraciousdev/vue-markdown-editor'

import { readTime, wordCount } from '/src/common/readability.ts'

import {
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '/src/store/actions.js'

export default {
  name: 'Editor',
  components: {
    Ink,
    LegacyEditor,
  },
  props: {
    appearance: {
      type: String,
      default: () => ('dark'),
      validator: (value) => (
        ['dark', 'light'].includes(value)
      ),
    },
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
    readonly: {
      type: Boolean,
    },
    settings: {
      type: Object,
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  computed: {
    ink() {
      return this.settings.version === 'ink'
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.$mq)
    },
    numberOfWords() {
      return wordCount(this.text)
    },
    readTime() {
      return readTime(this.text, this.wordsPerMinute)
    },
    readTimeDescription() {
      if (this.readTimeMinutes === 0) return `${this.readTimeSeconds}s to read`

      return `${this.readTimeMinutes}m ${this.readTimeSeconds}s to read`
    },
    readTimeMinutes() {
      return Math.floor(this.readTime)
    },
    readTimeSeconds() {
      return Math.floor((this.readTime % 1) * 60)
    },
    showReadabilityBar() {
      return this.settings.readability.enabled
    },
    showRightSidebar() {
      return this.$store.state.showRightSidebar
    },
    spellcheck() {
      return this.settings.spellcheck
    },
    wordsPerMinute() {
      return this.settings.readability.wordsPerMinute
    },
  },
  methods: {
    clearHistory() {
      if (this.ink) {
        this.$refs.editable.instance.load(this.text)
      } else {
        const listener = () => {
          if (this.text === this.editor.getValue()) {
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
      if (this.ink) {
        this.$refs.editable.focus()
      } else {
        this.$refs.editable.focusEnd()
      }
    },
    async focusEditorStart() {
      if (this.ink) {
        this.$refs.editable.focus()
      } else {
        this.$refs.editable.focusStart()
      }
    },
    getCursor() {
      return this.editor.getCursor()
    },
    getKeyMap() {
      return this.editor.getOption('keyMap')
    },
    getSelection() {
      return this.$refs.editable.selection()
    },
    async input(text) {
      this.$emit('input', text)
    },
    async onReady(instance) {
      this.editor = instance

      this.focusInitial()
      this.clearHistory()
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.showRightSidebar)
    },
  },
  async mounted() {
    // this will ensure the cursor is properly aligned on font changes
    document.fonts.ready.then(() => {
      if (this.$refs.editable && !this.ink) {
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

  .ink >>> .cm-editor.cm-focused {
    outline: none;
  }
</style>
