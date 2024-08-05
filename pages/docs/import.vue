<script lang="ts">
import Doc from '#root/src/models/doc'

export default defineComponent({
  setup() {
    const { store } = useVuex()
    const files = ref<File[]>([])
    const fileNames = computed(() => files.value.map(f => f.name))
    const text = ref('')

    const handleImport = async () => {
      const { Remarkable } = await import('remarkable')
      const { default: frontmatter } = await import('remarkable-front-matter')
      const remarkable = new Remarkable()

      remarkable.use(frontmatter)

      files.value.forEach((file) => {
        const reader = new FileReader()

        reader.onload = (event) => {
          const fileText = event.target?.result

          // Todo: Maybe handle ArrayBuffer.
          if (typeof fileText !== 'string') { return }

          // This object is populated by the `.render` call below.
          const env = { frontMatter: { id: undefined } }

          remarkable.render(fileText, env)

          // Todo: Handle other frontmatter delimeters.
          const text = fileText.replace(/^---.*?---/s, '').trim()
          const { id } = env.frontMatter

          try {
            importDoc({ id, text })
          } catch (error) {
            console.warn({ error })
          }

          // Remove the file from the list.
          files.value.splice(files.value.indexOf(file), 1)
        }

        reader.readAsText(file)
      })
    }

    const importDoc = ({ id, text }: Partial<Doc>) => {
      if (id) {
        const existingDoc = store.getters.decrypted.find((doc: Doc) => doc.id === id)

        if (existingDoc) {
          store.commit('EDIT_DOCUMENT', {
            id: existingDoc.id,
            text,
          })
        }
      }

      store.commit('EDIT_DOCUMENT', new Doc({ text }))
    }

    const onFiles = inputHandler((event) => {
      files.value = Array.from(event.target?.files || [])
    })

    return {
      fileNames,
      files,
      handleImport,
      onFiles,
      text,
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col items-start gap-4">
      <CoreLayer>
        <CoreButton as="label">
          <input type="file" class="hidden" accept=".md,.markdown,text/markdown" multiple @change="onFiles">
          <Icon name="DocImport" />
          <span>Choose Markdown files to import</span>
        </CoreButton>
      </CoreLayer>
      <ul v-if="fileNames.length" class="list-disc pl-4">
        <li v-for="fileName in fileNames" :key="fileName">{{ fileName }}</li>
      </ul>
      <CoreLayer>
        <CoreButton @click="handleImport">
          <span>Import</span>
        </CoreButton>
      </CoreLayer>
    </div>
  </div>
</template>
