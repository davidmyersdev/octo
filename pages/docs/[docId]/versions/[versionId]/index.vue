<script lang="ts">
import { type Ref, defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import Editor from '#root/components/Editor.vue'
import Doc from '#root/src/models/doc'

const formatTags = (tags: string[], delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  setup() {
    const appearance = inject<Ref<string>>('appearance', ref('auto'))
    const editor = ref()
    const router = useRouter()
    const store = useStore()
    const placeholder = new Doc({ text: formatTags(store.state.context.tags, ' ') })
    const settings = computed(() => store.state.settings.editor)
    const versionId = computed(() => router.currentRoute.value.params.versionId as string)
    const { docVersions } = useDocVersions()
    const docVersion = computed(() => docVersions.value.find(d => d.id === versionId.value) || placeholder)

    return {
      appearance: appearance.value === 'october' ? 'dark' : appearance.value,
      docVersion,
      editor,
      placeholder,
      settings,
    }
  },
})
</script>

<template>
  <Editor
    ref="editable"
    :appearance="appearance"
    :doc="docVersion"
    :key="docVersion?.id"
    :ro="true"
    :settings="settings"
  />
</template>
