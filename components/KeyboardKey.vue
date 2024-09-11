<script lang="ts" setup>
defineProps<{ text?: string }>()
</script>

<template>
  <small>
    <kbd class="monospace border border-layer-text-muted rounded px-1 border-b-2"><slot name="text">{{ text }}</slot></kbd>
  </small>
</template>
