<template>
  <div class="container mx-auto sm:px-4 flex">
    <MarkdownEditor ref="editable" class="editable w-full" :value="value" />
  </div>
</template>

<script>
import MarkdownEditor from '@voraciousdev/vue-markdown-editor';

export default {
  name: 'Exporter',
  components: {
    MarkdownEditor,
  },
  computed: {
    value() {
      return JSON.stringify(this.$store.state.documents.all, null, 2);
    },
  },
  methods: {
    focus() {
      this.$refs.editable.focus();
    },
  },
  mounted() {
    this.focus();
  },
};
</script>
