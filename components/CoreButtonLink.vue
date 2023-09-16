<script lang="ts" setup>
import CoreLink from './CoreLink.vue'
</script>

<template>
  <CoreButton :is="CoreLink">
    <slot />
  </CoreButton>
</template>
