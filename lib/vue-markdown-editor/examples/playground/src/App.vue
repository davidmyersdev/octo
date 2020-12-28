<template>
  <div class="app">
    <h1>Playground</h1>
    <MarkdownEditor v-model="markdown" class="editor" />
  </div>
</template>

<script>
import MarkdownEditor from '@voraciousdev/vue-markdown-editor'

export default {
  name: 'App',
  components: {
    MarkdownEditor,
  },
  data() {
    return {
      markdown: '# Hello, World!\n\nHow are you today?',
    }
  },
}
</script>

<style>
body {
  background-color: #111;
  color: #aaa;
  font-family: sans-serif;
}

.app {
  margin: auto;
  max-width: 50rem;
  width: 100%;
}

.editor {
  background-color: #050505;
  border-radius: 0.25em;
  padding: 1em;
}
</style>
