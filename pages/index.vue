<template>
  <div></div>
</template>

<script>
export default {
  inject: ["mq"],
  computed: {
    currentDoc() {
      // only show the right sidebar while a document is selected (for now)
      return this?.$store?.getters.currentDoc
    },
    mobile() {
      if (process.browser) {
        return ['xs', 'sm'].includes(this.mq.current)
      }

      return false
    },
    showLeftSidebar() {
      return this?.$store?.state.showLeftSidebar
    },
    showRightSidebar() {
      return this.$route.name === 'doc' && this?.$store?.state.showRightSidebar
    },
  },
}
</script>
