<template>
  <Editor
    ref="editable"
    :appearance="appearance"
    :doc="doc"
    :initialSelections="initialSelections"
    :disabled="disabled"
    :settings="settings"
    @input="input"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { fetchSharedDoc } from '/src/firebase/firestore'

import { setTitle } from '/src/common/title.js'
import Doc, { unpack } from '/src/models/doc.js'

import { ADD_DOCUMENT, EDIT_DOCUMENT, SET_DOCUMENT } from '/src/store/actions.js'

const formatTags = (tags, delimiter = ', ') => {
  return tags?.map((tag) => `#${tag}`).join(delimiter) || ''
}

export default defineComponent({
  props: {
    id: String,
    initialSelections: {
      default: () => [],
      type: Array,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this?.$store?.state.context.tags, ' ') }),
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
      if (this?.$store?.state.settings.theme === 'october') { return 'dark' }

      return this?.$store?.state.settings.theme
    },
    doc() {
      return this?.$store?.getters.decrypted.find((doc) => doc.id === this.id) || this.placeholder
    },
    settings() {
      return this?.$store?.state.settings.editor
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
      if (!this.disabled) {
        // ReadOnly mode means we are viewing a shared doc.
        // Todo: Create a new view for shared docs, and store shared docs in a new collection.
        if (this.id) {
          this?.$store?.commit(EDIT_DOCUMENT, { id: this.doc.id, text })
        } else {
          this?.$store?.commit(ADD_DOCUMENT, new Doc({ id: this.doc.id, text }))

          this.$router.replace({
            name: 'doc',
            params: {
              id: this.doc.id,
              preserve: true,
            },
          })
        }
      }
    },
    async findSharedDocument() {
      const docRef = await fetchSharedDoc({ docId: this.$route.params.id })
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

      return unpack(packed, { privateKey: this?.$store?.state.settings.crypto.privateKey })
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags))
    },
  },
  beforeRouteUpdate(to, _from, next) {
    if (to.name === 'doc') {
      this?.$store?.dispatch(SET_DOCUMENT, { id: to.params.id })
    }

    next()
  },
  async mounted() {
    this.updateTitle()

    // might want to pass another prop to represent 'shared' since disabled might have multiple use cases
    if (this.disabled) {
      this.placeholder = await this.findSharedDocument()
    }
  },
})
</script>
