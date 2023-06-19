<template>
  <Editor :appearance="appearance" :settings="settings" :doc="doc" @input="input" />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

import Doc from '#root/src/models/doc'
import { debouncer } from '#root/src/common/debouncer'
import Editor from '#root/components/Editor.vue'
import { useFiles } from '#root/src/stores/useFiles'

const { id } = defineProps({ id: String })
const fileStore = useFiles()
const store = useStore()
const { debounce } = debouncer(800)
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
  debounce(file.value?.id, async () => {
    const writable = await file.value?.handle.createWritable()

    writable?.write(text)
    writable?.close()
  })
}
</script>
