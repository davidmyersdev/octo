<script lang="ts">
import { save, zip } from '#helpers/files'
import type Doc from '#root/src/models/doc'

export default defineComponent({
  setup() {
    const includeFrontmatter = ref(true)
    const { store } = useVuex()

    const handleExport = async () => {
      const { addFile, generate } = await zip('octo-export')

      store.state.documents.all.forEach((doc: Doc) => {
        const { id, text } = doc
        const data = includeFrontmatter.value ? `---\nid: ${id}\n---\n\n${text}` : text

        addFile(`${id}.md`, data)
      })

      const archive = await generate()
      const timestamp = Date.now()

      await save(`octo-export-${timestamp}`, archive)
    }

    return {
      handleExport,
      includeFrontmatter,
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="button button-size-medium button-color-gray items-center">
        <input v-model="includeFrontmatter" type="checkbox" class="checkbox">
        <span class="ml-3">Include metadata as Front Matter</span>
      </label>
    </div>
    <div>
      <button class="button button-size-medium button-color-gray" @click="handleExport">Export</button>
    </div>
  </div>
</template>
