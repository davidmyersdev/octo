<template>
  <div class="md:container md:mx-auto p-4 md:px-16 md:py-8">
    <MarkdownPreview v-if="doc" :markdown="doc.text" class="w-full"></MarkdownPreview>
  </div>
</template>

<script>
import MarkdownPreview from '/src/components/MarkdownPreview.vue'

export default {
  name: 'Publisher',
  components: {
    MarkdownPreview,
  },
  props: {
    id: String,
  },
  computed: {
    doc() {
      return this.$store.getters.decrypted.find(doc => doc.id === this.id)
    },
  },
};
</script>
