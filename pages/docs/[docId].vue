<template>
  <Editor
    ref="editable"
    :appearance="appearance"
    :doc="doc"
    :key="doc.id"
    :initialFocus="initialFocus"
    :initialSelections="initialSelections"
    :ro="ro"
    :settings="settings"
    @input="input"
  />
</template>

<script>
import { defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import Editor from '/components/Editor.vue'
import { setTitle } from '/src/common/title'
import Doc from '/src/models/doc'
import { EDIT_DOCUMENT } from '/src/store/actions'

const formatTags = (tags, delimiter = ', ') => {
  return tags.map((tag) => `#${tag}`).join(delimiter)
}

export default defineComponent({
  components: {
    Editor,
  },
  props: {
    docId: String,
    initialFocus: {
      type: String,
      default: () => 'any',
      validator: (position) => ['any', 'start', 'end'].includes(position),
    },
    initialSelections: {
      type: Array,
    },
    ro: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this.$store.state.context.tags, ' ') }),
    }
  },
  setup() {
    const appearance = inject('appearance')
    const store = useStore()
    const settings = computed(() => store.state.settings.editor)

    return {
      appearance: appearance.value === 'october' ? 'dark' : appearance.value,
      settings,
    }
  },
  watch: {
    tags: {
      deep: true,
      handler() {
        this.updateTitle()
      },
    },
    header() {
      this.updateTitle()
    },
  },
  computed: {
    doc() {
      return this.$store.getters.decrypted.find((doc) => doc.id === this.docId) || this.placeholder
    },
    tags() {
      return this.doc.tags
    },
    header() {
      return this.doc.headers[0]
    },
  },
  methods: {
    input(text) {
      if (!this.ro) {
        this.$store.commit(EDIT_DOCUMENT, new Doc({ ...this.doc, text }))

        if (!this.docId) {
          this.$router.replace({
            path: `/docs/${this.doc.id}`,
            query: {
              p: true,
            },
          })
        }
      }
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags))
    },
  },
  async mounted() {
    this.updateTitle()
  },
})
</script>
