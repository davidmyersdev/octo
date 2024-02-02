<script lang="ts" setup>
defineProps<{
  widthProse?: boolean,
}>()
</script>

<template>
  <CoreScrollable>
    <article
      class="container flex flex-col mx-auto p-4"
      :class="{ 'max-w-prose': widthProse, 'md:px-16 md:py-8': !widthProse }"
    >
      <slot />
    </article>
  </CoreScrollable>
</template>
