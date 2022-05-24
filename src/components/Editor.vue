<template>
  <div @click="focusEditor" class="flex flex-col flex-grow">
    <div class="min-w-0 flex flex-grow p-4 md:px-16 md:py-0">
      <div class="editor flex flex-col flex-grow w-full mx-auto" :style="styles">
        <div class="gutter h-8" @click="focusEditorStart"></div>
        <Ink ref="editable" class="ink-editor" :options="options" v-model="doc" />
        <p v-if="showReadabilityBar" class="text-gray-400 dark:text-gray-600 text-right">{{ numberOfWords }} words | {{ readTimeDescription }}</p>
        <div class="gutter h-8 flex-grow" @click="focusEditorEnd"></div>
      </div>
    </div>
    <div v-if="!readonly && !showRightSidebar && text" class="fixed top-4 right-4 z-index-10 hidden md:block">
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

import { subscription } from '/src/common/account'
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
      default: () => ('auto'),
      validator: (value) => (
        ['auto', 'dark', 'light'].includes(value)
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
    styles() {
      return {
        maxWidth: `${this.maxWidthInChars}ch`,
      }
    },
    maxWidthInChars() {
      return this.settings.readability.maxWidthInChars
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
          clipboard: this.pro,
          dragAndDrop: this.pro,
          handler: (files) => {
            return this.uploadFiles(files)
          },
          injectMarkup: false,
        },
        interface: {
          appearance: this.appearance,
          attribution: false,
          images: this.settings.images.enabled,
          readonly: this.readonly,
          spellcheck: this.settings.spellcheck,
          toolbar: this.settings.toolbar,
        },
        selections: this.initialSelections || [],
        toolbar: {
          upload: this.pro,
        },
        vim: this.settings.keyMap === 'vim',
      }
    },
    pro() {
      return subscription.value.pro
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
    async input(text) {
      this.$emit('input', text)
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.showRightSidebar)
    },
    uploadFiles(files) {
      return Promise.all(
        Array.from(files).map(async (file) => {
          return addFile(file).then((uploadedFile) => {
            // Todo: Handle non-image files
            if (/^image\/.*/.test(uploadedFile.mimeType)) {
              this.$refs.editable.instance.insert(`![](${uploadedFile.url})`)
            }
          })
        })
      )
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
    --ink-flex-direction: column-reverse;
    --ink-font-family: 'Inter', helvetica, sans-serif;
    --ink-code-font-family: 'Fira Code', monospace;
    --ink-editor-padding: 0;
    --ink-syntax-heading-color: #e06c75;
  }

  @media (min-width: 768px) {
    .editor {
      --ink-flex-direction: column;
    }
  }

  .editor .editable {
    white-space: pre-wrap;
  }

  .editor .gutter {
    cursor: text;
    min-height: 1rem;
    width: 100%;
  }

  .ink-editor {
    height: 100%;
  }

  :deep(.ink-editor > div:first-child), :deep(.ink-editor .cm-editor) {
    height: 100%;
  }

  .ink-editor :deep(.cm-editor.cm-focused) {
    outline: none;
  }
</style>
