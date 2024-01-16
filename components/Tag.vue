<script lang="ts" setup>
import { HashtagIcon as TagIcon } from '@heroicons/vue/24/outline'
import { useSlots } from 'vue'

const isOcto = computed(() => {
  return useSlots().default?.().some((node) => {
    return node.children === 'octo'
  })
})
</script>

<template>
  <span class="inline-flex min-w-0 items-center gap-2">
    <CoreAsset v-if="isOcto" type="Logo" class="sq-5" />
    <TagIcon v-else class="w-5" />
    <span class="flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden">
      <slot />
    </span>
  </span>
</template>
