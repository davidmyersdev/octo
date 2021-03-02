<template>
  <div class="flex flex-col">
    <div class="flex flex-grow flex-shrink min-h-0">
      <TheLeftSidebar v-if="!mobile && showLeftSidebar" class="hidden w-72 bg-gray-100 dark:bg-black md:flex" />
      <div class="flex flex-col flex-grow flex-shrink min-h-0">
        <TheContent class="flex-grow flex-shrink min-h-0" />
      </div>
      <TheRightSidebar v-if="!mobile && showRightSidebar && currentDoc" class="hidden w-72 bg-gray-100 dark:bg-black md:flex" />
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
