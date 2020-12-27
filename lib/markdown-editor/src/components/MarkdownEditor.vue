<template>
  <codemirror :options="options" :value="value" @input="onInput" @ready="onReady" />
</template>

<script>
import deepmerge from 'deepmerge'
import Vue from 'vue'
import { codemirror } from 'vue-codemirror'

// import codemirror dependencies
import 'codemirror/addon/mode/overlay'
import 'codemirror/addon/mode/simple'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/yeti.css'

import { isVimLoaded, loadMode, loadVim } from '@/common/codemirror/codemirror'
import Markdown from '@/common/markdown/markdown'
import MarkdownEditorImage from '@/components/MarkdownEditorImage'

const GenerateImage = () => (Vue.extend(MarkdownEditorImage))

export default {
  name: 'MarkdownEditor',
  components: {
    codemirror,
  },
  props: {
    initialCursor: {
      type: Object,
      default: () => ({
        character: 0,
        line: 0,
      }),
      validator: (cursor) => (
        Object.prototype.hasOwnProperty.call(cursor, 'character') && Object.prototype.hasOwnProperty.call(cursor, 'line')
      ),
    },
    initialVimMode: {
      type: String,
    },
    settings: {
      type: Object,
      default: () => ({
        // nothing yet
      }),
    },
    value: String,
  },
  data() {
    return {
      defaultConfig: {
        images: {
          enabled: false,
          showCaptions: false,
        },
        keyMap: 'default',
        mode: 'gfm',
        tabSize: 2,
      },
      editor: null,
      isInitialVimModeSet: false,
      isVimLoaded: false,
      text: '',
      widgets: [],
    }
  },
  watch: {
    settings() {
      this.maybeLoadVim()
    },
  },
  computed: {
    codeblocks() {
      return this.markdown.codeblocks()
    },
    config() {
      return deepmerge(this.defaultConfig, this.settings)
    },
    images() {
      return this.markdown.images()
    },
    keyMap() {
      if (this.config.keyMap === 'vim' && !this.isVimLoaded) return 'default'

      return this.config.keyMap
    },
    markdown() {
      return new Markdown(this.text)
    },
    options() {
      return {
        addModeClass: true,
        extraKeys: {
          // use spaces instead of tabs
          // https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785
          'Shift-Tab': (instance) => {
            instance.indentSelection('subtract')
          },
          Tab: (instance) => {
            if (instance.somethingSelected()) {
              instance.indentSelection('add')
            } else {
              instance.replaceSelection(Array(instance.getOption('tabSize') + 1).join(' '), 'end', '+input')
            }
          },
        },
        indentUnit: this.config.tabSize,
        indentWithTabs: false,
        keyMap: this.keyMap,
        lineWrapping: true,
        mode: {
          name: this.config.mode,
          highlightFormatting: true,
        },
        singleCursorHeightPerLine: true,
        tabSize: this.config.tabSize,
        theme: 'yeti',
      }
    },
  },
  methods: {
    focus() {
      this.editor.focus()
    },
    focusEnd() {
      this.editor.setCursor({ line: this.editor.lineCount(), ch: 0 })
    },
    focusStart() {
      this.editor.setCursor({ line: 0, ch: 0 })
    },
    loadImages() {
      // clear all line widgets
      // TODO: only clear the ones that change
      this.widgets.forEach((widget) => this.editor.removeLineWidget(widget))

      if (this.config.images.enabled) {
        this.images.forEach((image) => {
          let lineWidget

          const ImageInstance = GenerateImage()

          const component = new ImageInstance({
            propsData: {
              alt: image.alt,
              onError: () => lineWidget.changed(),
              onLoad: () => lineWidget.changed(),
              showCaptions: this.config.images.showCaptions,
              source: image.url,
            },
          })

          lineWidget = this.editor.addLineWidget(image.line, component.$mount().$el, { above: true })

          this.widgets.push(lineWidget)
        })
      }
    },
    loadModes() {
      this.codeblocks.forEach((codeblock) => {
        if (codeblock.language) {
          // language specified
          loadMode(codeblock.language, {
            onload: this.refresh,
          })
        }
      })
    },
    maybeLoadVim() {
      if (this.settings.keyMap === 'vim' && !this.isVimLoaded) {
        loadVim({
          onload: () => { this.isVimLoaded = true },
        })
      }
    },
    maybeSetVimMode() {
      if (this.initialVimMode && !this.isInitialVimModeSet && this.keyMap === 'vim') {
        this.editor.setOption('keyMap', this.initialVimMode || this.keyMap)

        if (this.initialVimMode === 'vim-insert') {
          this.editor.state.vim.insertMode = true
          this.editor.setOption('disableInput', false)
          window.CodeMirror.signal(this.editor, 'vim-mode-change', { mode: 'insert' })
        }

        this.isInitialVimModeSet = true
      }
    },
    onInput(text) {
      this.text = text

      if (text !== this.value) {
        // prevent CM input events on :value changes
        this.$emit('input', text)
      }

      this.loadImages()
      this.loadModes()
    },
    onReady(instance) {
      this.editor = instance
      this.text = this.editor.getValue()

      this.maybeLoadVim()
      this.maybeSetVimMode()

      this.editor.setCursor({
        ch: this.initialCursor.character,
        line: this.initialCursor.line,
      })

      this.$emit('ready', instance)
      this.loadImages()
      this.loadModes()
    },
    refresh() {
      // get current cursor position
      const cursor = this.editor.getCursor()

      // refresh editor
      this.editor.setValue(this.editor.getValue())

      // set cursor position back to where it was
      this.editor.setCursor(cursor)
    },
  },
  created() {
    this.isVimLoaded = isVimLoaded()
  },
}
</script>

<style>
.CodeMirror.cm-s-yeti {
  background-color: transparent !important;
}

.CodeMirror.cm-s-yeti .cm-comment {
  color: #9e9e9e;
}

.CodeMirror.cm-s-yeti .cm-formatting-em, .CodeMirror.cm-s-yeti .cm-formatting-strong, .CodeMirror.cm-s-yeti .cm-formatting-strikethrough {
  color: #444;
}

.CodeMirror.CodeMirror-focused.cm-s-yeti .CodeMirror-selected, .CodeMirror.cm-s-yeti .CodeMirror-selected {
  background: #555;
}

.CodeMirror.cm-s-yeti.cm-fat-cursor .CodeMirror-cursor {
  background: #557bab;
}

.CodeMirror.cm-s-yeti .cm-animate-fat-cursor {
  background-color: #557bab;
}

.CodeMirror.cm-s-yeti .cm-m-markdown.cm-variable-2:not(.cm-comment),
.CodeMirror.cm-s-yeti .cm-m-markdown.cm-variable-3:not(.cm-comment),
.CodeMirror.cm-s-yeti .cm-m-markdown.cm-keyword:not(.cm-comment) {
  color: #d1c9c0;
}

.CodeMirror.cm-s-yeti .cm-m-markdown.cm-formatting-list {
  color: #96c0d8 !important;
}

.CodeMirror .cm-m-markdown:not(.cm-comment) {
  font-family: 'Fira Sans', arial !important;
}

.CodeMirror {
  color: #fff;
  min-height: 100%;
  height: auto;
}

.CodeMirror {
  position: relative;
  font-size: 1em;
  line-height: 2.25em;
}

.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0;
}

.CodeMirror .cm-header-1 {
  font-size: 1.6em;
}

.CodeMirror .cm-header-2 {
  font-size: 1.5em;
}

.CodeMirror .cm-header-3 {
  font-size: 1.4em;
}

.CodeMirror .cm-header-4 {
  font-size: 1.3em;
}

.CodeMirror .cm-header-5 {
  font-size: 1.2em;
}

.CodeMirror .cm-header-6 {
  font-size: 1.1em;
}

.CodeMirror-scroll {
  overflow-y: hidden !important;
}
</style>
