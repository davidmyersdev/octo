<template>
  <Editor :appearance="appearance" :settings="settings" :doc="doc" @input="input" />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

import Doc from '/src/models/doc'
import Debouncer from '/src/common/debouncer'
import Editor from '/components/Editor.vue'
import { useFiles } from '/src/stores/useFiles'

const { id } = defineProps({ id: String })
const fileStore = useFiles()
const store = useStore()
const debouncer = new Debouncer(800)
const appearance = computed(() => {
  if (store.state.settings.theme === 'october') { return 'dark' }

  return store.state.settings.theme as string
})
const settings = computed(() => {
  return store.state.settings.editor
})

const doc = ref(new Doc())
const file = computed(() => (fileStore.files.find(file => file.id === id)))

watchEffect(async () => {
  if (file?.value) {
    // @ts-ignore
    await file.value.handle.createWritable()
    const fileHandle = await file.value.handle.getFile()

    if (fileHandle) {
      doc.value.update({ text: await fileHandle.text() })
    }
  }
})

const input = async (text: string) => {
  // @ts-ignore
  debouncer.debounce(file.value.id, async () => {
    // @ts-ignore
    const writable = await file.value.handle.createWritable()
    writable.write(text)
    writable.close()
  })
}
</script>
