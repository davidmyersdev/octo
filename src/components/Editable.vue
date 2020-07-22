<template>
  <div></div>
</template>

<script>
/* eslint-disable */
import { SET_EDITOR } from '@/store/actions';

export default {
  name: 'editable',
  data() {
    return {
      codemirror: null,
      editor: null,
      last_value: null,
      modes: [],
    };
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
    setup() {
      this.autoloadModes();
      this.createEditor();
      this.emitChanges();
      this.handleRenderLine();
    },
    emitChanges() {
      this.editor.on('change', () => {
        // todo: look into duplicate change events being fired...
        if (this.last_value !== this.editor.getValue()) {
          this.last_value = this.editor.getValue();

          this.$emit('input', this.editor.getValue());
        }
      });
    },
    handleRenderLine() {
      this.editor.on('renderLine', (codemirror, line, element) => {
        const classList = line.styles[line.styles.length - 1];

        if (typeof classList === 'string') {
          const classes = classList.split(' ');

          if (classes.includes('header')) {
            if (classes.includes('header-1')) {
              element.style.fontSize = '1.6em';
            }
            else if (classes.includes('header-2')) {
              element.style.fontSize = '1.5em';
            }
            else if (classes.includes('header-3')) {
              element.style.fontSize = '1.4em';
            }
            else if (classes.includes('header-4')) {
              element.style.fontSize = '1.3em';
            }
            else if (classes.includes('header-5')) {
              element.style.fontSize = '1.2em';
            }
            else if (classes.includes('header-6')) {
              element.style.fontSize = '1.1em';
            }
          }
        }
      });
    },
    autoloadModes() {
      // stub CodeMirror.getMode to dynamically load modes
      const originalGetMode = CodeMirror.getMode;

      CodeMirror.getMode = (config, mime) => {
        if (typeof mime == 'string') {
          const mode = CodeMirror.findModeByMIME(mime);

          if (mode) {
            const name = mode.mode;

            if (!this.modes.includes(name)) {
              this.modes.push(name);

              let script = document.createElement('script');

              // pull mode in via CDN
              script.src = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/mode/${name}/${name}.min.js`;
              script.onload = () => {
                // get current cursor position
                let cursor = this.editor.getCursor();

                // refresh editor
                this.editor.setValue(this.editor.getValue());

                // set cursor position back to where it was
                this.editor.setCursor(cursor);
              };

              document.head.appendChild(script);
            }
          }
        }

        return originalGetMode(config, mime);
      };
    },
    createEditor() {
      // create CodeMirror editor
      this.editor = new CodeMirror(this.$el, {
        extraKeys: {
          // use spaces instead of tabs
          // https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785
          Tab: (cm) => {
            if (cm.somethingSelected()) {
              cm.indentSelection("add");
            } else {
              cm.replaceSelection(
                Array(cm.getOption("indentUnit") + 1).join(" "),
                "end",
                "+input"
              );
            }
          },
          'Shift-Tab': (cm) => {
            cm.indentSelection("subtract");
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
        value: '',
      });

      this.$store.dispatch(SET_EDITOR, {
        editor: this.editor,
      });
    },
  },
  mounted() {
    this.setup();
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

.CodeMirror-scroll {
  overflow-y: hidden !important;
}
</style>
