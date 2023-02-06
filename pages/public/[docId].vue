<template>
  <Editor
    :appearance="appearance"
    :doc="doc"
    :key="doc.id"
    :ro="true"
    :settings="settings"
  />
</template>

<script>
import { defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import { fetchSharedDoc } from '/src/firebase/firestore'
import Doc, { unpack } from '/src/models/doc'

const formatTags = (tags, delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  props: {
    docId: String,
  },
  setup() {
    const appearance = inject('appearance')
    const { public: { appTitle } } = useConfig()
    const doc = ref(new Doc())
    const header = computed(() => doc.headers[0])
    const router = useRouter()
    const store = useStore()
    const settings = computed(() => store.state.settings.editor)

    const findSharedDocument = async () => {
      // Todo: Provide info to the user about what is happening here. Redirect on error.
      const packed = await fetchSharedDoc({ docId: router.currentRoute.value.params.docId })

      return unpack(packed, { privateKey: store.state.settings.crypto.privateKey })
    }

    onMounted(async () => {
      const { emit } = useHooks()

      doc.value = await findSharedDocument()

      emit('public_doc_found')

      useHead({
        title: header.value || formatTags(doc.value.tags) || appTitle,
      })
    })

    return {
      appearance: appearance.value === 'october' ? 'dark' : appearance.value,
      doc,
      settings,
    }
  },
})
</script>
