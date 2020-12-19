<template>
  <codemirror :options="options" :value="value" @input="onInput" @ready="onReady" />
</template>

<script>
import Vue from 'vue';
import { codemirror } from 'vue-codemirror';

// import codemirror dependencies
import 'codemirror/addon/mode/overlay';
import 'codemirror/addon/mode/simple';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/yeti.css';

import { loadMode, loadVim } from '@/common/codemirror_helper';
import Markdown from '@/common/markdown/markdown'
import MarkdownEditorImage from '@/components/MarkdownEditorImage';

const ImageInstance = Vue.extend(MarkdownEditorImage);

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
        cursor.hasOwnProperty('character') && cursor.hasOwnProperty('line')
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
      editor: null,
      isInitialVimModeSet: false,
      text: '',
      widgets: [],
    };
  },
  watch: {
    ['settings.keyMap'] () {
      this.maybeLoadVim();
    },
  },
  computed: {
    codeblocks() {
      return this.markdown.codeblocks()
    },
    images() {
      return this.markdown.images()
    },
    keyMap() {
      if (this.settings.keyMap === 'vim' && !this.$store.state.vimLoaded) {
        return 'default';
      }

      return this.settings.keyMap;
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
            instance.indentSelection('subtract');
          },
          'Tab': (instance) => {
            if (instance.somethingSelected()) {
              instance.indentSelection('add');
            } else {
              instance.replaceSelection(Array(instance.getOption('tabSize') + 1).join(' '), 'end', '+input');
            }
          },
        },
        indentUnit: this.settings.tabSize || 2,
        indentWithTabs: false,
        keyMap: this.keyMap,
        lineWrapping: true,
        mode: {
          name: 'gfm',
          highlightFormatting: true,
        },
        singleCursorHeightPerLine: true,
        tabSize: this.settings.tabSize || 2,
        theme: 'yeti',
      };
    },
  },
  methods: {
    focus() {
      this.editor.focus();
    },
    focusEnd() {
      this.editor.setCursor({ line: this.editor.lineCount(), ch: 0 });
    },
    focusStart() {
      this.editor.setCursor({ line: 0, ch: 0 });
    },
    loadImages() {
      // clear all line widgets
      // TODO: only clear the ones that change
      this.widgets.forEach(widget => this.editor.removeLineWidget(widget))

      this.images.forEach((image) => {
        let lineWidget

        const component = new ImageInstance({
          propsData: {
            alt: image.alt,
            onError: () => lineWidget.changed(),
            onLoad: () => lineWidget.changed(),
            source: image.url,
          },
        })

        lineWidget = this.editor.addLineWidget(image.line, component.$mount().$el, { above: true })

        this.widgets.push(lineWidget)
      })
    },
    loadModes() {
      this.codeblocks.forEach((codeblock) => {
        if (codeblock.language) {
          // language specified
          loadMode(codeblock.language, {
            onload: this.onModeLoad,
          });
        }
      });
    },
    maybeLoadVim() {
      if (this.settings.keyMap === 'vim' && !this.$store.state.vimLoaded) {
        loadVim({
          onload: () => {
            // update the keymap
            this.$store.commit('SET_VIM_LOADED', true);
          },
          onerror: () => {
            // todo: handle errors
          },
        });
      }
    },
    maybeSetVimMode() {
      if (this.initialVimMode && !this.isInitialVimModeSet && this.keyMap === 'vim') {
        this.editor.setOption('keyMap', this.initialVimMode || this.keyMap);

        if (this.initialVimMode === 'vim-insert') {
          this.editor.state.vim.insertMode = true;
          this.editor.setOption('disableInput', false);
          window.CodeMirror.signal(this.editor, "vim-mode-change", { mode: "insert" });
        }

        this.isInitialVimModeSet = true;
      }
    },
    onInput(text) {
      this.text = text

      if (text !== this.value) {
        // prevent CM input events on :value changes
        this.$emit('input', text);
      }

      this.loadImages()
      this.loadModes();
    },
    onModeLoad() {
      // get current cursor position
      const cursor = this.editor.getCursor();

      // refresh editor
      this.editor.setValue(this.editor.getValue());

      // set cursor position back to where it was
      this.editor.setCursor(cursor);
    },
    onReady(instance) {
      this.editor = instance;
      this.text = this.editor.getValue()

      this.maybeLoadVim();
      this.maybeSetVimMode();

      this.editor.setCursor({
        ch: this.initialCursor.character,
        line: this.initialCursor.line,
      });

      this.$emit('ready', instance);
      this.loadImages();
      this.loadModes();
    },
  },
};
</script>

<style>
.CodeMirror.cm-s-yeti {
  background-color: transparent !important;
}

.CodeMirror.cm-s-yeti .cm-comment {
  color: #9e9e9e;
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
