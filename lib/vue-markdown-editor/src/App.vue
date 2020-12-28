<template>
  <div class="app">
    <h1>vue-markdown-editor</h1>
    <p>A Markdown editor component for Vue that renders in place without the need for a preview pane. This is the component that powers <a href="https://github.com/voraciousdev/octo">Octo</a>.</p>
    <MarkdownEditor v-model="markdown" class="editor" />
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'App',
  components: {
    MarkdownEditor,
  },
  data() {
    return {
      markdown: '# Hello, World!',
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  height: -webkit-fill-available;
}

body {
  background-color: #111;
  color: #aaa;
  font-family: sans-serif;
  height: 100vh;
  height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
}

a {
  color: #aaa;
  font-weight: bold;
}

.app {
  margin: auto;
  max-width: 70rem;
  width: 100%;
}

.editor {
  background-color: #050505;
  border-radius: 0.25em;
  padding: 1em;
}
</style>
