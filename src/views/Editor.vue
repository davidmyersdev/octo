<template>
  <Editor ref="editable" :appearance="appearance" :initialCursor="initialCursor" :initialSelection="initialSelection" :initialVimMode="initialVimMode" :settings="settings" :text="document.text" @input="input" />
</template>

<script>
import Editor from '/src/components/Editor.vue'

import Doc from '/src/models/doc.js'
import { open } from '/src/router.js'

import { firestoreInstance } from '/src/firebase.js'
import { unpack } from '/src/models/doc.js'

import {
  ADD_DOCUMENT,
  EDIT_DOCUMENT,
  SET_DOCUMENT,
} from '/src/store/actions.js'

export default {
  name: 'EditorView',
  components: {
    Editor,
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
    readonly: {
      type: Boolean,
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
      this.$refs.editable.clearHistory()
      this.$refs.editable.focusEditor()
    },
  },
  computed: {
    appearance() {
      return this.$store.state.settings.theme === 'october' ? 'dark' : this.$store.state.settings.theme
    },
    currentDoc() {
      return this.$store.getters.currentDoc
    },
    document() {
      return this.$store.getters.decrypted.find(doc => doc.id === this.id) || this.placeholder
    },
    settings() {
      return this.$store.state.settings.editor
    },
  },
  methods: {
    async findSharedDocument() {
      const docRefs = await firestoreInstance
        .collection('documents')
        .where('public', '==', true)
        .where('id', '==', this.$route.params.id)
        .get()

      const [docRef, ...extras] = docRefs.docs

      const serverDoc = docRef.data()
      const packed = {
        ...serverDoc,
        id: (serverDoc.id || serverDoc.clientId),
        firebaseId: docRef.id,
        textKey: (serverDoc.textKey || serverDoc.dataKey),
        createdAt: (serverDoc.createdAt ? serverDoc.createdAt.toDate() : null),
        discardedAt: (serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null),
        updatedAt: (serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null),
        touchedAt: (serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null),
        syncedAt: serverDoc.syncedAt.toDate(),
      }

      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey })
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
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'document') {
      this.$store.dispatch(SET_DOCUMENT, { id: to.params.id })
    }

    next()
  },
  async mounted() {
    // might want to pass another prop to represent "shared" since readonly might have multiple use cases
    if (this.readonly) {
      this.placeholder = await this.findSharedDocument();
    }
  },
}
</script>
