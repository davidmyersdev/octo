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
      // return this.$store.state.settings.theme === "october" ? "dark" : this.$store.state.settings.theme;

      if (this.$store.state.settings.theme === "light") { return "light"}
      if (this.$store.state.settings.theme === "auto") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        return isDark ? "dark" : "light"
    }
        return "dark"
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
