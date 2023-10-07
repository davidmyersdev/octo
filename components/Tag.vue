<script lang="ts" setup>
import { HashtagIcon as TagIcon } from '@heroicons/vue/24/outline'
import { useSlots } from 'vue'

const slotNodes = useSlots().default?.()
const isOcto = slotNodes?.some((node) => {
  return node.children === 'octo'
})
</script>

<template>
  <span class="inline-flex min-w-0 items-center gap-2">
    <CoreAssetLogo v-if="isOcto" class="sq-5" />
    <TagIcon v-else class="w-5" />
    <span class="flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden">
      <slot />
    </span>
  </span>
</template>
