<template>
  <Editor
    :appearance="appearance"
    :doc="doc"
    :key="doc.id"
    :ro="true"
    :settings="settings"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { appEventTypes, logEvent } from '#helpers/app'
import { fetchSharedDoc } from '#root/src/firebase/firestore'
import Doc, { unpack } from '#root/src/models/doc'

const formatTags = (tags: string[], delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  props: {
    docId: String,
  },
  setup() {
    const { system: appearance } = useAppearance()
    const { public: { appTitle } } = useConfig()
    const doc = ref(new Doc())
    const header = computed(() => doc.value.headers[0])
    const router = useRouter()
    const store = useStore()
    const settings = computed(() => store.state.settings.editor)

    const findSharedDocument = async () => {
      // Todo: Provide info to the user about what is happening here. Redirect on error.
      const packed = await fetchSharedDoc({ docId: router.currentRoute.value.params.docId as string })

      return unpack(packed, { privateKey: store.state.settings.crypto.privateKey })
    }

    onMounted(async () => {
      doc.value = await findSharedDocument()

      logEvent(appEventTypes.networkDocLoaded)

      useHead({
        title: header.value || formatTags(doc.value.tags) || appTitle,
      })
    })

    return {
      appearance,
      doc,
      settings,
    }
  },
})
</script>
