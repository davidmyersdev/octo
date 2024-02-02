<script lang="ts" setup>
import CoreLink from './CoreLink.vue'
</script>

<template>
  <CoreButton :as="CoreLink">
    <slot />
  </CoreButton>
</template>
