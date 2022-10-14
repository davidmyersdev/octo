<template>
  <div class="container mx-auto p-4 flex flex-col flex-grow h-full gap-4">
    <div class="flex flex-col gap-4">
      <label for="markdown-file-uploader">Choose .md file(s) to upload</label>
      <input ref="uploads" @change="parseFiles" type="file" id="markdown-file-uploader" multiple accept=".md" class="input" />
    </div>
  </div>
</template>

<script>
import Doc from '/src/models/doc.js'
import { Remarkable } from 'remarkable';
import frontMatterPlugin from 'remarkable-front-matter';
var md = new Remarkable();
md.use(frontMatterPlugin);

export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    parseFiles(event) {
      const files = [...(this.uploads().files ? this.uploads().files : [])];
      files.forEach(file => {
        const reader = new FileReader()
        reader.onerror = error => reject(error)
        reader.onload = event => {
          const fileText = event.target.result
          const env = { frontMatter: undefined };
          md.render(fileText, env)
          const { id } = env.frontMatter;

          const text = fileText.replace(/---(.|\n)*---/, "")
          this.importDoc({ id, text });
        }

        reader.readAsText(file)
      })

    },
    uploads() {
      return this.$refs.uploads;
    },
    importDoc({ id, text }) {
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
    },
    updateText(event) {
      this.text = event.target.innerText
    },
  },
}
</script>
