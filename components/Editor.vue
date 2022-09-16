<template>
  <div @click="focusEditor" class="flex flex-col flex-grow">
    <div class="min-w-0 flex flex-grow p-4 md:px-16 md:py-0">
      <div class="editor flex flex-col flex-grow w-full mx-auto" :style="styles">
        <div class="gutter h-8" @click="focusEditorStart"></div>
        <InkEditor ref="editable" class="ink-editor" :options="options" v-model="text" />
        <p v-if="showReadabilityBar" class="text-gray-400 dark:text-gray-600 text-right">{{ numberOfWords }} words | {{ readTimeDescription }}</p>
        <div class="gutter h-8 flex-grow" @click="focusEditorEnd"></div>
      </div>
    </div>
    <div v-if="!disabled && !showRightSidebar && text" class="fixed top-4 right-4 z-index-10 hidden md:block">
      <button @click="toggleMeta" class="button button-size-medium button-color-gray">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-3">Info</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSubscription } from '/src/common/account.ts'
import { readTime, wordCount } from '/src/common/readability.ts'
import { addFile } from '/src/firebase/storage.ts'
import { plugins } from '/src/vendor/plugins/index.ts'

import {
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '/src/store/actions.js'

import { defaultSettings } from '/src/store/modules/settings.js'
import Doc from '/src/models/doc.js'
import type * as Ink from 'ink-mde'

export default defineComponent({
  emits: ['input'],
  props: {
    appearance: {
      type: String,
      default: () => ('auto'),
      validator: (value: string) => (
        ['auto', 'dark', 'light'].includes(value)
      ),
    },
    doc: {
      default: () => new Doc(),
      type: Object,
    },
    initialFocus: {
      type: String,
      default: () => ('any'),
      validator: (position: string) => (
        ['any', 'start', 'end'].includes(position)
      ),
    },
    initialSelections: {
      type: Array,
    },
    initialVimMode: {
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    settings: {
      default: () => defaultSettings.editor,
      type: Object,
    },
  },
  data() {
    return {
      editor: null,
      pro: false,
    }
  },
  watch: {
    text(value) {
      // If a text value is being passed in that doesn't match the editor, then we likely need to load a new doc.
      // @ts-ignore
      if (value !== this.$refs.editable.instance.doc()) {
        // @ts-ignore
        this.$refs.editable.instance.load(value)
      }
    },
  },
  computed: {
    docs() {
      // @ts-ignore
      return this.$store.getters.kept.reduce((docs, doc) => {
        if (doc.id && doc.id !== this.doc.id && doc.headers.length > 0) {
          docs.push({
            id: doc.id,
            title: doc.headers[0],
          })
        }

        return docs
      }, []) || []
    },
    maxWidthInChars() {
      return this.settings.readability.maxWidthInChars
    },
    numberOfWords() {
      return wordCount(this.text)
    },
    options(): Ink.Options {
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
          // @ts-ignore
          appearance: this.appearance,
          attribution: false,
          // Todo: Figure out why this is causing an error.
          // autocomplete: true,
          images: this.settings.images.enabled,
          readonly: this.disabled,
          spellcheck: this.settings.spellcheck,
          toolbar: this.settings.toolbar,
        },
        // Todo: Make these configurable.
        // @ts-ignore
        plugins: this.plugins,
        // @ts-ignore
        selections: this.initialSelections || [],
        toolbar: {
          upload: this.pro,
        },
        vim: this.settings.keyMap === 'vim',
      }
    },
    plugins() {
      // For now, passing the current context in allows us to not recalculate the plugins on every doc change. Since the
      // object we're passing in is a reference, the editor automatically gets access to the live lists of docs and tags
      // without needing to recalculate.
      return plugins(this)
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
      return this.settings.readability.enabled ?? true
    },
    showRightSidebar() {
      // @ts-ignore
      return this?.$store?.state.showRightSidebar || false
    },
    spellcheck() {
      return this.settings.spellcheck
    },
    styles() {
      return {
        maxWidth: `${this.maxWidthInChars}ch`,
      }
    },
    tags() {
      // @ts-ignore
      return this?.$store?.getters.allTags.filter((tag) => {
        return !this.doc.tags.includes(tag)
      }) || []
    },
    text: {
      get() {
        return this.doc.text
      },
      set(value: string) {
        this.input(value)
      },
    },
    wordsPerMinute() {
      return this.settings.readability.wordsPerMinute
    },
  },
  methods: {
    focusEditor() {
      // @ts-ignore
      this.$refs.editable?.focus()
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
      // @ts-ignore
      this.$refs.editable.focus()
    },
    async focusEditorStart() {
      // @ts-ignore
      this.$refs.editable.focus()
    },
    async input(text: string) {
      this.$emit('input', text)
    },
    async toggleMeta() {
      // @ts-ignore
      this?.$store?.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.showRightSidebar)
    },
    uploadFiles(files: FileList) {
      return Promise.all(
        Array.from(files).map(async (file) => {
          return addFile(file).then((uploadedFile) => {
            // Todo: Handle non-image files
            // @ts-ignore
            if (/^image\/.*/.test(uploadedFile.mimeType)) {
              // @ts-ignore
              this.$refs.editable.instance.insert(`![](${uploadedFile.url})`)
            }
          })
        })
      )
    },
  },
  mounted() {
    this.pro = useSubscription().value.pro
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

  /* .ink-editor {
    height: 100%;
  } */

  /* :deep(.ink-editor > div:first-child), :deep(.ink-editor .cm-editor) {
    height: 100%;
  } */

  :deep(.ink-editor .cm-content) {
    padding: 4px 0;
  }

  :deep(.ink-editor .cm-editor.cm-focused) {
    outline: none;
  }
</style>
