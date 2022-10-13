<template>
  <div class="container mx-auto p-4 flex flex-col flex-grow h-full gap-4">
    <div>
      <button @click="importDocs" class="button button-size-medium button-color-gray">Import Docs</button>
    </div>
    <pre @input="updateText" contenteditable ref="editable" class="editable monospace min-h- w-full text-current bg-transparent outline-none flex-grow"></pre>
  </div>
</template>

<script>
import Doc from '/src/models/doc.js'

export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    importDocs() {
      const docs = [JSON.parse(this.text)].flat()
      

      docs.forEach(({ id, text }) => {
        if (id) {
          const existingDoc = this.$store.state.documents.all.find(doc => doc.id === id)

          if (existingDoc) {
            return this.$store.commit('EDIT_DOCUMENT', {
              id: existingDoc.id,
              text,
            })
          } else {
            this.$store.commit('ADD_DOCUMENT', new Doc({ text }))
          }
        } else {
          this.$store.commit('ADD_DOCUMENT', new Doc({ text }))
        }
      })

      this.$refs.editable.innerText = ''
    },
    updateText(event) {
      this.text = event.target.innerText
    },
  },
}
</script>
