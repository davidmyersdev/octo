<template>
  <span class="inline-flex items-center gap-2">
    <TheLogo v-if="isOcto" class="h-5 w-5" />
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
    <span class="flex-grow">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import TheLogo from '/components/TheLogo.vue'

const slotNodes = useSlots().default?.()
const isOcto = slotNodes?.some((node) => {
  return node.children === 'octo'
})
</script>
