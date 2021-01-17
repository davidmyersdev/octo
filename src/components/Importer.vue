<template>
  <div class="container-lg d-flex flex-column">
    <div>
      <button @click="importDocs">Import Docs</button>
    </div>
    <MarkdownEditor v-model="text" ref="editable" class="editable w-100" />
  </div>
</template>

<script>
import MarkdownEditor from '@voraciousdev/vue-markdown-editor'

import Doc from '@/models/doc'

export default {
  name: 'Importer',
  components: {
    MarkdownEditor,
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    importDocs() {
      const things = JSON.parse(this.text)

      things.forEach((thing) => {
        const doc = new Doc(thing)

        this.$store.dispatch('ADD_DOCUMENT', doc)
      })
    },
  },
}
</script>
