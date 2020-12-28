<template>
  <div class="container-lg d-flex">
    <MarkdownEditor ref="editable" class="editable w-100" :value="value" />
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
