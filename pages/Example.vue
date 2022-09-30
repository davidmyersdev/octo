<template>
  <Editor :appearance="appearance" :settings="settings" :doc="doc" />
</template>

<script>
import Editor from '/components/Editor.vue'
import Doc from '/src/models/doc'

export default {
  name: 'ExampleView',
  components: {
    Editor,
  },
  props: {
    url: {
      type: String,
    },
  },
  data() {
    return {
      doc: new Doc(),
    }
  },
  computed: {
    appearance() {
      if (this.$store.state.settings.theme === 'october') { return 'dark' }

      return this.$store.state.settings.theme
    },
    settings() {
      return this.$store.state.settings.editor
    },
  },
  async mounted() {
    fetch(this.url)
      .then((response) => response.text())
      .then((text) => {
        this.doc.update({ text })
      })
  },
}
</script>
