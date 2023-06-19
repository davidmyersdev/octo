<script lang="ts">
import { type Ref, defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import Editor from '#root/components/Editor.vue'
import Doc from '#root/src/models/doc'
import { EDIT_DOCUMENT } from '#root/src/store/actions'
import { useRecentDocs } from '#root/src/stores/useRecentDocs'

const formatTags = (tags: string[], delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  components: {
    Editor,
  },
  props: {
    docId: String,
  },
  setup(props) {
    const appearance = inject<Ref<string>>('appearance', ref('auto'))
    const editor = ref()
    const router = useRouter()
    const store = useStore()
    const placeholder = new Doc({ text: formatTags(store.state.context.tags, ' ') })
    const settings = computed(() => store.state.settings.editor)
    const recentDocs = useRecentDocs()
    const docId = computed(() => props.docId || router.currentRoute.value.params.docId as string)
    const doc = computed(() => store.getters.decrypted.find((d: Doc) => d.id === docId.value) || placeholder)
    const tags = computed(() => doc.value.tags)
    const header = computed(() => doc.value.headers[0])
    const { public: { appTitle } } = useConfig()

    const onInput = async (text: string) => {
      store.commit(EDIT_DOCUMENT, new Doc({ ...doc.value, text }))

      if (!docId.value || docId.value === 'new') {
        await router.replace({
          path: `/docs/${doc.value.id}`,
          query: {
            p: '1',
          },
        })

        recentDocs.add(docId.value)
      }
    }

    onMounted(() => {
      // Todo: Keep a centralized list of docId exclusions.
      if (docId.value && docId.value !== 'new') {
        recentDocs.add(docId.value)
      }
    })

    watchEffect(() => {
      useHead({
        title: header.value || formatTags(tags.value) || appTitle,
      })
    })

    return {
      appearance: appearance.value === 'october' ? 'dark' : appearance.value,
      doc,
      editor,
      header,
      onInput,
      placeholder,
      settings,
      tags,
    }
  },
})
</script>

<template>
  <Editor
    ref="editable"
    :appearance="appearance"
    :doc="doc"
    :key="doc.id"
    :settings="settings"
    @input="onInput"
  />
</template>
