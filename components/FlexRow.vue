<script lang="ts" setup>
defineProps<{
  as?: string | Component,
}>()
</script>

<template>
  <Flex :as="as" class="flex-row">
    <slot />
  </Flex>
</template>
