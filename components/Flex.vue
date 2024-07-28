<script lang="ts" setup>
defineProps<{
  as?: string | Component,
}>()
</script>

<template>
  <component :is="as || 'div'" class="flex">
    <slot />
  </component>
</template>
