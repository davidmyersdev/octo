<template>
  <div class="the-content-container d-flex flex-grow-1">
    <div class="the-content d-flex flex-grow-1 overflow-auto">
      <router-view :key="$route.fullPath" class="d-flex flex-column"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheContent',
  computed: {
    offline() {
      return !this.$store.state.online;
    },
  },
};
</script>

<style>
.the-content-container {
  background: url('~@/assets/octopus-transparent.svg') center center no-repeat;
  background-size: 50% 50%;

  /* fix for flex item growing beyond parent size */
  min-width: 0;
}
</style>
