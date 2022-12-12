<template>
  <div @click="focusEditor" class="flex flex-col flex-grow relative">
    <div class="editor flex flex-col flex-grow flex-shrink min-h-0 min-w-0 w-full">
      <Ink ref="editable" class="ink-editor flex flex-col flex-grow flex-shrink min-h-0" :options="options" v-model="text" />
    </div>
  </div>
</template>

<script>
import Ink from 'ink-mde/vue'
import { OverlayScrollbars } from 'overlayscrollbars'
import { defineComponent } from 'vue'
import { subscription } from '/src/common/account'
import { addFile } from '/src/firebase/storage'
import { mermaid, plugins } from '/src/vendor/plugins'

import {
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '/src/store/actions.js'

export default defineComponent({
  emits: ['input'],
  components: {
    Ink,
  },
  inject: ['mq'],
  props: {
    appearance: {
      type: String,
      default: () => ('auto'),
      validator: (value) => (
        ['auto', 'dark', 'light'].includes(value)
      ),
    },
    doc: {
      type: Object,
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
    ro: {
      type: Boolean,
    },
    settings: {
      type: Object,
    },
  },
  watch: {
    text(value) {
      // If a text value is being passed in that doesn't match the editor, then we likely need to load a new doc.
      if (value !== this.editor.getDoc()) {
        this.editor.load(value)
      }
    },
  },
  data() {
    return {
      lazyPlugins: [],
    }
  },
  computed: {
    cssMaxWidth() {
      return `${this.maxWidthInChars}ch`
    },
    docs() {
      return this.$store.getters.kept.reduce((docs, doc) => {
        if (doc.id && doc.id !== this.doc.id && doc.headers.length > 0) {
          docs.push({
            id: doc.id,
            title: doc.headers[0],
          })
        }

        return docs
      }, [])
    },
    editor() {
      return this.$refs.editable?.instance
    },
    maxWidthInChars() {
      return this.settings.readability.maxWidthInChars
    },
    options() {
      const isExperimentalEnabled = this.$store.state.settings.experimental
      const hasLazyPlugins = this.lazyPlugins.length > 0

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
          autocomplete: true,
          images: this.settings.images.enabled,
          lists: this.settings.lists.enabled,
          readonly: this.ro,
          spellcheck: this.settings.spellcheck,
          toolbar: this.settings.toolbar,
        },
        // Todo: Make these configurable.
        plugins: [
          ...this.plugins,
          ...(isExperimentalEnabled && hasLazyPlugins ? this.lazyPlugins : []),
        ],
        readability: this.settings.readability.enabled,
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
    pro() {
      return subscription.value.pro
    },
    showRightSidebar() {
      return this.$store.state.showRightSidebar
    },
    spellcheck() {
      return this.settings.spellcheck
    },
    tags() {
      return this.$store.getters.allTags.filter((tag) => {
        return !this.doc.tags.includes(tag)
      });
    },
    text: {
      get() {
        return this.doc.text
      },
      set(value) {
        this.input(value)
      },
    },
  },
  methods: {
    focusEditor() {
      this.editor.focus()
    },
    focusInitial() {
      this.focusEditor()

      if (this.initialFocus === 'start') {
        this.focusEditorStart()
      } else if (this.initialFocus === 'end') {
        this.focusEditorEnd()
      }
    },
    focusEditorEnd() {
      this.focusEditor()
      this.editor.select({ at: 'end' })
    },
    focusEditorStart() {
      this.focusEditor()
      this.editor.select({ at: 'start' })
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
              this.editor.insert(`![](${uploadedFile.url})`)
            }
          })
        })
      )
    },
  },
  beforeMount() {
    mermaid().then((plugins) => {
      this.lazyPlugins.push(...plugins)
    }).catch((error) => {
      console.log('[mermaid]', error)
    })
  },
  mounted() {
    const editorContent = document.querySelector('.ink-mde-editor')
    const editorToolbar = document.querySelector('.ink-mde-toolbar')

    if (editorContent) {
      OverlayScrollbars(editorContent, {
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 200,
        },
      })
    }

    if (editorToolbar) {
      OverlayScrollbars(editorToolbar, {
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 200,
        },
      })
    }

    this.focusInitial()
  }
})
</script>

<style scoped>
  .md-plus .editable {
    font-size: 1.1em;
  }

  .editor {
    --ink-font-family: 'Inter', helvetica, sans-serif;
    --ink-code-font-family: 'Fira Code', monospace;
  }

  @media (max-width: 767px) {
    :deep(.ink-mde-toolbar) {
      order: 1;
    }

    :deep(.ink-mde .ink-mde-toolbar .ink-mde-container) {
      gap: 0;
    }

    :deep(.ink-mde .ink-mde-editor) {
      padding-top: 2rem;
    }

    :deep(.ink-mde .ink-mde-details) {
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }

  @media (min-width: 768px) {
    :deep(.ink-mde .ink-mde-toolbar) {
      background-color: transparent;
      background: repeating-linear-gradient(135deg, transparent, transparent 10px, var(--colors-layer-1) 10px, var(--colors-layer-1) 11px);
      border-bottom: 2px solid var(--colors-layer-1);
      padding-bottom: calc(0.25rem + 2px);
    }

    :deep(.ink-mde .ink-mde-toolbar .ink-mde-container) {
      background-color: var(--colors-layer-1);
      border-radius: 0.25rem;
      padding: 0.25rem;
    }
  }

  :deep(.ink-mde) {
    border: none;
    border-radius: 0;
  }

  :deep(.ink-mde .ink-mde-container) {
    max-width: v-bind('cssMaxWidth');
  }

  :deep(.ink-editor .ink-mde-widget svg) {
    margin: auto;
  }

  .ink-editor :deep(.cm-editor.cm-focused) {
    outline: none;
  }
</style>
