<template>
  <div class="markdown-preview" v-html="contents"></div>
</template>

<script>
import dompurify from '/src/common/external/dompurify.js'
import hljs from '/src/common/external/highlight.js'
import marked from '/src/common/external/marked.js'

export default {
  name: 'MarkdownPreview',
  props: {
    markdown: String,
  },
  computed: {
    contents() {
      return dompurify.sanitize(marked(this.markdown))
    },
  },
  mounted() {
    hljs.highlightAll()
  },
  updated() {
    hljs.highlightAll()
  },
};
</script>

<style scoped>
@import '/src/assets/syntax.css';

.markdown-preview {
  font-size: 1.1em;
}

.markdown-preview >>> h1,
.markdown-preview >>> h2,
.markdown-preview >>> h3,
.markdown-preview >>> h4,
.markdown-preview >>> h5,
.markdown-preview >>> h6 {
  color: #e06c75;
  font-weight: 600;
  margin-bottom: 1em;
}

.markdown-preview >>> h1 {
  font-size: 1.6em;
}

.markdown-preview >>> h2 {
  font-size: 1.5em;
}

.markdown-preview >>> h3 {
  font-size: 1.4em;
}

.markdown-preview >>> h4 {
  font-size: 1.3em;
}

.markdown-preview >>> h5 {
  font-size: 1.2em;
}

.markdown-preview >>> h6 {
  font-size: 1.1em;
}

.markdown-preview >>> p {
  margin-bottom: 1em;
}

.markdown-preview >>> pre {
  background-color: #121212;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 0.25em;
  overflow: auto;
}

.markdown-preview >>> :not(pre) code {
  background-color: #121212;
  border-radius: 0.25em;
  padding: 0.25em;
}

.markdown-preview >>> a {
  color: #96c0d8;
}

.markdown-preview >>> a:hover {
  text-decoration: underline;
}
</style>
