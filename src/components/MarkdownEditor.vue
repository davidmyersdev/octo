<template>
  <codemirror :options="options" :value="value" @input="onInput" @ready="onReady" />
</template>

<script>
import { codemirror } from 'vue-codemirror';

// import codemirror dependencies
import 'codemirror/addon/mode/overlay';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/yeti.css';

import { loadMode } from '@/common/codemirror_helper';
import { parseCodeblocks } from '@/common/parsers';

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
    value: String,
  },
  data() {
    return {
      editor: null,
    };
  },
  computed: {
    codeblocks() {
      return parseCodeblocks(this.value);
    },
    options() {
      return {
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
              instance.replaceSelection(Array(instance.getOption('indentUnit') + 1).join(' '), 'end', '+input');
            }
          },
        },
        indentWithTabs: false,
        lineWrapping: true,
        mode: {
          name: 'gfm',
        },
        singleCursorHeightPerLine: true,
        tabSize: 2,
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
    onInput(text) {
      this.$emit('input', text);
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

      this.editor.setCursor({
        ch: this.initialCursor.character,
        line: this.initialCursor.line,
      });

      this.$emit('ready', instance);
      this.loadModes();
    },
  },
};
</script>

<style>
.CodeMirror.cm-s-yeti {
  background-color: transparent !important;
}

.CodeMirror {
  color: #fff;
  min-height: 100%;
  height: auto;
}

.CodeMirror {
  position: relative;
  font-size: 1rem;
  line-height: 2.25em;
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
