<template>
  <div class="dashboard d-flex align-items-stretch">
    <TheSidebar class="sidebar d-none d-md-flex"/>
    <TheContent/>
  </div>
</template>

<script>
import TheContent from '@/components/TheContent';
import TheSidebar from '@/components/TheSidebar';

export default {
  name: 'Dashboard',
  components: {
    TheContent,
    TheSidebar,
  },
};
</script>

<style scoped>
.sidebar {
  min-width: 17rem;
}
</style>
