<template>
  <div class="container mx-auto p-4 flex flex-col flex-grow h-full gap-4">
    <div>
      <button @click="importDocs" class="button button-size-medium button-color-gray">Import Docs</button>
    </div>
    <pre @input="text" contenteditable ref="editable" class="editable monospace min-h- w-full text-current bg-transparent outline-none flex-grow">{{value}}</pre>
  </div>
</template>

<script>
import Doc from '/src/models/doc.js'

export default {
  name: 'Importer',
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

        this?.$store?.dispatch('ADD_DOCUMENT', doc)
      })
    },
  },
}
</script>
