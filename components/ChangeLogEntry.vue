<script lang="ts" setup>
const props = defineProps<{ header: string }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-xl">{{ props.header }}</h2>
    <slot />
    <ul class="flex flex-col gap-1 list-disc pl-4">
      <slot name="items" />
    </ul>
  </div>
</template>
