<template>
  <div class="flex h-screen">
    <TheLeftSidebar v-if="!mobile && showLeftSidebar" class="hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded shadow" />
    <TheContent class="flex-grow flex-shrink relative h-screen" />
    <TheRightSidebar v-if="!mobile && showRightSidebar && currentDoc" class="hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded" />
  </div>
</template>

<script>
import TheContent from '/components/TheContent.vue'
import TheLeftSidebar from '/components/TheLeftSidebar.vue'
import TheRightSidebar from '/pages/docs/[doc]/meta.vue'

export default {
  components: {
    TheContent,
    TheLeftSidebar,
    TheRightSidebar,
  },
  inject: ["mq"],
  computed: {
    currentDoc() {
      // only show the right sidebar while a document is selected (for now)
      return this.$store.getters.currentDoc
    },
    mobile() {
      return ['xs', 'sm'].includes(this.mq.current)
    },
    showLeftSidebar() {
      return this.$store.state.showLeftSidebar
    },
    showRightSidebar() {
      return this.$route.name === 'doc' && this.$store.state.showRightSidebar
    },
  },
}
</script>
