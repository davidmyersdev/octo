<script lang="ts" setup>
import CoreLink from '#root/components/CoreLink.vue'
</script>

<template>
  <CoreButton :is="CoreLink">
    <slot />
  </CoreButton>
</template>
