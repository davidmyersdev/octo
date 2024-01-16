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
    <CoreLayer>
      <CoreButton as="label">
        <input v-model="includeFrontmatter" type="checkbox" class="checkbox">
        <span>Include metadata as Front Matter</span>
      </CoreButton>
    </CoreLayer>
    <CoreLayer>
      <CoreButton @click="handleExport">
        <span>Export</span>
      </CoreButton>
    </CoreLayer>
  </div>
</template>
