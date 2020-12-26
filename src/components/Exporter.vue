<template>
  <div class="container-lg d-flex">
    <div class="editor w-100">
      <MarkdownEditor ref="editable" class="editable" :value="value" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@voraciousdev/octo-markdown-editor';

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

<style scoped>
  /* Duped from TheEditor for now */
  .editor {
    background: url('~@/assets/octopus-transparent.svg') center center no-repeat;
    background-size: 50% 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    min-height: 30rem;
  }

  .editor .editable {
    outline: none;
    white-space: pre-wrap;
  }
</style>
