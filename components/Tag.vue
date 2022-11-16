<template>
  <span class="inline-flex min-w-0 items-center gap-2">
    <TheLogo v-if="isOcto" class="h-5 w-5" />
    <TagIcon v-else class="w-5" />
    <span class="flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { HashtagIcon as TagIcon } from '@heroicons/vue/24/outline'
import { useSlots } from 'vue'
import TheLogo from '/components/TheLogo.vue'

const slotNodes = useSlots().default?.()
const isOcto = slotNodes?.some((node) => {
  return node.children === 'octo'
})
</script>
