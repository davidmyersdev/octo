<template>
  <div class="flex flex-col">
    <div class="flex flex-grow flex-shrink min-h-0">
      <TheLeftSidebar v-if="!mobile && showLeftSidebar" class="hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded shadow" />
      <div class="flex flex-col flex-grow flex-shrink min-h-0 min-w-0">
        <TheContent class="flex-grow flex-shrink min-h-0 min-w-0" />
      </div>
      <TheRightSidebar v-if="!mobile && showRightSidebar && currentDoc" class="hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded" />
    </div>
  </div>
</template>

<script>
import TheContent from '/src/components/TheContent.vue'
import TheLeftSidebar from '/src/components/TheLeftSidebar.vue'
import TheRightSidebar from '/src/components/TheRightSidebar.vue'

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
