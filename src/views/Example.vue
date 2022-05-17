<template>
  <Editor :appearance="appearance" :settings="settings" :text="text" />
</template>

<script>
import Editor from "/src/components/Editor.vue";

export default {
  name: "ExampleView",
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
      text: "",
    };
  },
  computed: {
    appearance() {
      return this.$store.state.settings.theme === "october"
        ? "dark"
        : this.$store.state.settings.theme;
    },
    settings() {
      return this.$store.state.settings.editor;
    },
  },
  async mounted() {
    fetch(this.url)
      .then((response) => response.text())
      .then((text) => {
        this.text = text;
      });
  },
};
</script>
