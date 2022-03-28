<template>
  <div @click="focusEditor" class="flex flex-col flex-grow">
    <div class="md:container md:mx-auto flex flex-grow">
      <div class="editor flex flex-col flex-grow min-w-0 p-4 md:px-16 md:py-0">
        <div class="gutter h-8" @click="focusEditorStart"></div>
        <Ink ref="editable" @paste="handlePaste" class="ink" :options="options" v-model="doc" />
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
import { defineComponent } from 'vue'

import { readTime, wordCount } from '/src/common/readability.ts'
import { addFile } from '/src/firebase/storage.ts'

import {
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '/src/store/actions.js'

export default defineComponent({
  name: 'Editor',
  components: {
    Ink,
  },
  inject: ["mq"],
  props: {
    appearance: {
      type: String,
      default: () => ('dark'),
      validator: (value) => (
        ['dark', 'light'].includes(value)
      ),
    },
    initialFocus: {
      type: String,
      default: () => ('any'),
      validator: (position) => (
        ['any', 'start', 'end'].includes(position)
      ),
    },
    initialSelections: {
      type: Array,
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
    doc: {
      get() {
        return this.text
      },
      set(value) {
        this.input(value)
      },
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.mq.current)
    },
    numberOfWords() {
      return wordCount(this.text)
    },
    options() {
      return {
        files: {
          dragAndDrop: true,
          handler: (files) => {
            this.uploadFiles(files)
          },
        },
        interface: {
          appearance: this.appearance,
          images: this.settings.images.enabled,
          spellcheck: this.settings.spellcheck,
        },
        selections: this.initialSelections || [],
        vim: this.settings.keyMap === 'vim',
      }
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
      this.$refs.editable.instance.load(this.text)
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
      this.$refs.editable.focus()
    },
    async focusEditorStart() {
      this.$refs.editable.focus()
    },
    getCursor() {
      return this.editor.getCursor()
    },
    getKeyMap() {
      return this.editor.getOption('keyMap')
    },
    getSelections() {
      return Array.from(this.$refs.editable.selections())
    },
    handlePaste(event) {
      this.uploadFiles(event.clipboardData.files)
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
    uploadFiles(files) {
      Array.from(files).forEach((file) => {
        addFile(file).then((url) => {
          this.$refs.editable.instance.insert(`![](${url})`)
        })
      })
    },
  },
  mounted() {
    this.focusEditor()
  },
})
</script>

<style scoped>
  .md-plus .editable {
    font-size: 1.1em;
  }

  .editor {
    --ink-all-font-family: 'Inter', helvetica, sans-serif;
    --ink-monospace-font-family: 'Fira Code', monospace;
    --ink-editor-padding: 0;
  }

  .editor .editable {
    white-space: pre-wrap;
  }

  .editor .gutter {
    cursor: text;
    min-height: 1rem;
    width: 100%;
  }

  .ink {
    height: 100%;
  }

  :deep(.ink > div:first-child), :deep(.ink .cm-editor) {
    height: 100%;
  }

  .ink :deep(.cm-editor.cm-focused) {
    outline: none;
  }
</style>
