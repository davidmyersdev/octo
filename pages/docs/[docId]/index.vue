<script lang="ts">
import { defineComponent } from 'vue'
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
    const { system: appearance } = useAppearance()
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
      appearance,
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
    :key="doc.id"
    :appearance="appearance"
    :doc="doc"
    :settings="settings"
    @input="onInput"
  />
</template>
