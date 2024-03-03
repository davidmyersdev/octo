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
    const placeholder = ref(new Doc({ text: formatTags(store.state.context.tags, ' ') }))
    const settings = computed(() => store.state.settings.editor)
    const recentDocs = useRecentDocs()
    const docId = computed(() => props.docId || router.currentRoute.value.params.docId as string)
    const doc = computed(() => store.getters.decrypted.find((d: Doc) => d.id === docId.value) || placeholder.value)
    const tags = computed(() => doc.value.tags)
    const header = computed(() => doc.value.headers[0])
    const { public: { appTitle } } = useConfig()

    const onInput = async (text: string) => {
      // Todo: Load a new doc before leaving the route so that Ink does not
      // send a new input event (or figure out how to prevent it from sending
      // an input event when data is pushed to the editor from the store).
      if (text && (!docId.value || docId.value === 'new')) {
        // When we receive input without an active doc, we should always create
        // a new doc with a unique id.
        const newDoc = new Doc({ text })

        store.commit(EDIT_DOCUMENT, newDoc)

        // Now that we no longer use `pageKey`, we don't have to worry about
        // preserving the editor state.
        await router.replace({
          path: `/docs/${newDoc.id}`,
          force: true,
        })

        recentDocs.add(newDoc.id)
      } else if (docId.value !== 'new') {
        // Otherwise, when we receive input with an active doc, we should
        // update the existing doc.
        store.commit(EDIT_DOCUMENT, new Doc({ ...doc.value, text }))
      }
    }

    onMounted(() => {
      // Todo: Keep a centralized list of docId exclusions.
      if (docId.value && docId.value !== 'new') {
        recentDocs.add(docId.value)
      }
    })

    onUpdated(() => {
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
      settings,
      tags,
    }
  },
})
</script>

<template>
  <Editor
    :appearance="appearance"
    :doc="doc"
    :settings="settings"
    @input="onInput"
  />
</template>
