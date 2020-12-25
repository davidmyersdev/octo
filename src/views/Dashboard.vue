<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-grow-1 flex-shrink-1 min-h-0">
      <TheLeftSidebar v-if="!mobile && showLeftSidebar" class="sidebar d-none d-md-flex bg-darker" />
      <div class="d-flex flex-column flex-grow-1 flex-shrink-1 min-h-0">
        <TheContent class="flex-grow-1 flex-shrink-1 min-h-0" />
      </div>
      <TheRightSidebar v-if="!mobile && showRightSidebar && currentDoc" class="sidebar d-none d-md-flex bg-darker" />
    </div>
  </div>
</template>

<script>
import TheContent from '@/components/TheContent';
import TheLeftSidebar from '@/components/TheLeftSidebar';
import TheRightSidebar from '@/components/TheRightSidebar';

export default {
  name: 'Dashboard',
  components: {
    TheContent,
    TheLeftSidebar,
    TheRightSidebar,
  },
  computed: {
    currentDoc() {
      // only show the right sidebar while a document is selected (for now)
      return this.$store.getters.currentDoc;
    },
    mobile() {
      return ['xs', 'sm'].includes(this.$mq);
    },
    showLeftSidebar() {
      return this.$store.state.showLeftSidebar;
    },
    showRightSidebar() {
      return this.$route.name === 'document' && this.$store.state.showRightSidebar;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 17rem;
}
</style>
