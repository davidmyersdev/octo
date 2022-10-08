<template>
  <Editor
    ref="editable"
    :appearance="appearance"
    :doc="doc"
    :initialSelections="initialSelections"
    :readonly="readonly"
    :settings="settings"
    @input="input"
  />
</template>

<script>
import { defineComponent } from 'vue'
import Editor from "/components/Editor.vue"
import { fetchSharedDoc } from "/src/firebase/firestore"

import { setTitle } from "/src/common/title.js"
import Doc, { unpack } from "/src/models/doc.js"

import { ADD_DOCUMENT, EDIT_DOCUMENT, SET_DOCUMENT } from "/src/store/actions.js"

const formatTags = (tags, delimiter = ", ") => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  components: {
    Editor,
  },
  props: {
    docId: String,
    initialFocus: {
      type: String,
      default: () => "any",
      validator: (position) => ["any", "start", "end"].includes(position),
    },
    initialSelections: {
      type: Array,
    },
    readonly: {
      type: Boolean,
    },
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this.$store.state.context.tags, " ") }),
    }
  },
  watch: {
    tags: {
      deep: true,
      handler() {
        this.updateTitle()
      },
    },
    header() {
      this.updateTitle()
    },
  },
  computed: {
    appearance() {
      if (this.$store.state.settings.theme === "october") { return "dark" }

      return this.$store.state.settings.theme
    },
    doc() {
      return this.$store.getters.decrypted.find((doc) => doc.id === this.docId) || this.placeholder
    },
    settings() {
      return this.$store.state.settings.editor
    },
    tags() {
      return this.doc.tags
    },
    header() {
      return this.doc.headers[0]
    },
  },
  methods: {
    input(text) {
      if (!this.readonly) {
        // ReadOnly mode means we are viewing a shared doc.
        // Todo: Create a new view for shared docs, and store shared docs in a new collection.
        if (this.docId) {
          this.$store.commit(EDIT_DOCUMENT, { id: this.doc.id, text })
        } else {
          this.$store.commit(ADD_DOCUMENT, new Doc({ id: this.doc.id, text }))

          this.$router.replace({
            name: 'docs-doc',
            params: {
              docId: this.doc.id,
              preserve: true,
            },
          })
        }
      }
    },
    async findSharedDocument() {
      const docRef = await fetchSharedDoc({ docId: this.$route.params.docId })
      const serverDoc = docRef.data()
      const packed = {
        ...serverDoc,
        id: serverDoc.id || serverDoc.clientId,
        firebaseId: docRef.id,
        textKey: serverDoc.textKey || serverDoc.dataKey,
        createdAt: serverDoc.createdAt ? serverDoc.createdAt.toDate() : null,
        discardedAt: serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null,
        updatedAt: serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null,
        touchedAt: serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null,
        syncedAt: serverDoc.syncedAt.toDate(),
      }

      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey })
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags))
    },
  },
  beforeRouteUpdate(to, _from, next) {
    if (to.name === "docs-doc") {
      this.$store.dispatch(SET_DOCUMENT, { id: to.params.docId })
    }

    next()
  },
  async mounted() {
    this.updateTitle()

    // might want to pass another prop to represent "shared" since readonly might have multiple use cases
    if (this.readonly) {
      this.placeholder = await this.findSharedDocument()
    }
  },
})
</script>
