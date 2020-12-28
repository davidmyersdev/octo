<template>
  <div class="container rounded d-flex align-items-center justify-content-center p-3 mw-100 mb-2">
    <figure class="m-0">
      <img :src="source" @load="onLoad" @error="onError" :alt="alt" class="mw-100">
      <figcaption v-if="showCaptions && alt" class="sans-serif text-center mt-3"><small>{{ alt }}</small></figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'MarkdownEditorImage',
  props: {
    alt: String,
    onError: Function,
    onLoad: Function,
    showCaptions: Boolean,
    source: String,
  },
}
</script>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.3)
}

.container img {
  max-height: 20rem;
}
</style>
