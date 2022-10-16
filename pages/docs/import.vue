<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col items-start gap-4">
      <input ref="uploads" @change="updateFiles" type="file" id="markdown-file-uploader" multiple accept=".md,.markdown,text/markdown" class="hidden" />
      <button class="button button-size-medium button-color-gray gap-3" @click="selectFiles">
        <svg class="w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 13V4M10 4L13 7M10 4L7 7"/>
          <path d="M2 13V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V13"/>
        </svg>
        <span>Choose Markdown files to import</span>
      </button>
      <ul v-if="fileNames.length">
        <li v-for="fileName in fileNames">{{ fileName }}</li>
      </ul>
      <button class="button button-size-medium button-color-gray" @click="importFiles">Import</button>
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
      files: [],
      text: '',
    }
  },
  computed: {
    fileNames() {
      return this.files.map(file => file.name)
    },
  },
  methods: {
    importFiles() {
      this.files.forEach((file) => {
        const reader = new FileReader()

        reader.onerror = error => reject(error)
        reader.onload = event => {
          const fileText = event.target.result
          const env = { frontMatter: {} }

          // Populate env.frontMatter
          md.render(fileText, env)

          const { id } = env.frontMatter;
          const text = fileText.replace(/^---.*?---/s, '').trim()

          try {
            this.importDoc({ id, text })
          } catch (error) {
            console.error(error)
          }

          // Remove the file from the list.
          this.files.splice(this.files.indexOf(file), 1)
        }

        reader.readAsText(file)
      })

    },
    importDoc({ id, text }) {
      if (id) {
        const existingDoc = this.$store.getters.decrypted.find(doc => doc.id === id)

        if (existingDoc) {
          return this.$store.commit('EDIT_DOCUMENT', {
            id: existingDoc.id,
            text,
          })
        }
      }

      return this.$store.commit('ADD_DOCUMENT', new Doc({ text }))
    },
    selectFiles() {
      this.$refs.uploads.click()
    },
    updateFiles() {
      this.files = [...(this.$refs.uploads.files ? this.$refs.uploads.files : [])]
    },
    updateText(event) {
      this.text = event.target.innerText
    },
  },
}
</script>
