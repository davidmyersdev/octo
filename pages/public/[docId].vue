<template>
  <Editor
    :appearance="appearance"
    :doc="doc"
    :key="doc.id"
    :ro="true"
    :settings="settings"
  />
</template>

<script>
import { defineComponent, inject } from 'vue'
import { setTitle } from '/src/common/title'
import { fetchSharedDoc } from '/src/firebase/firestore'
import Doc, { unpack } from '/src/models/doc'

const formatTags = (tags, delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  props: {
    docId: String,
  },
  data() {
    return {
      doc: new Doc(),
    }
  },
  setup() {
    const appearance = inject('appearance')

    return {
      appearance: appearance.value === 'october' ? 'dark' : appearance.value,
    }
  },
  computed: {
    settings() {
      return this.$store.state.settings.editor
    },
    header() {
      return this.doc.headers[0]
    },
  },
  methods: {
    async findSharedDocument() {
      // Todo: Provide info to the user about what is happening here. Redirect on error.
      const packed = await fetchSharedDoc({ docId: this.$route.params.docId })

      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey })
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags))
    },
  },
  async mounted() {
    const { emit } = useHooks()

    this.doc = await this.findSharedDocument()
    emit('public_doc_found')
    this.updateTitle()
  },
})
</script>
