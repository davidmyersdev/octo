<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

import Doc from '#root/src/models/doc'
import { debouncer } from '#root/src/common/debouncer'
import DocEditor from '#root/components/DocEditor.vue'
import { useFiles } from '#root/src/stores/useFiles'

const props = defineProps({ id: String })
const fileStore = useFiles()
const store = useStore()
const { system: appearance } = useAppearance()
const { debounce } = debouncer(800)
const settings = computed(() => {
  return store.state.settings.editor
})

const doc = ref(new Doc())
const file = computed(() => (fileStore.files.find(file => file.id === props.id)))

watchEffect(async () => {
  if (file?.value) {
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

<template>
  <DocEditor
    :appearance="appearance"
    :doc="doc"
    :settings="settings"
    @input="input"
  />
</template>
