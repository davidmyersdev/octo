<template>
  <div class="container mx-auto sm:px-4 flex flex-col">
    <div>
      <button @click="importDocs">Import Docs</button>
    </div>
    <MarkdownEditor v-model="text" ref="editable" class="editable w-full" />
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
