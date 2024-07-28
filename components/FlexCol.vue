<script lang="ts" setup>
defineProps<{
  as?: string | Component,
}>()
</script>

<template>
  <Flex :as="as" class="flex-col">
    <slot />
  </Flex>
</template>
