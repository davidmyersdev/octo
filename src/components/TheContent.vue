<template>
  <div class="the-content-container d-flex flex-grow-1 min-w-0">
    <div class="the-content d-flex flex-grow-1 min-w-0 overflow-auto">
      <router-view :key="$route.fullPath" class="d-flex"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheContent',
};
</script>
