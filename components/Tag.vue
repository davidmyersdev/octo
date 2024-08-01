<script lang="ts" setup>
import { useSlots } from 'vue'

const assetMap = {
  daily: 'Daily',
  octo: 'Logo',
} as const

const defaultSlotNodes = computed(() => useSlots().default?.() || [])

const icon = computed(() => {
  if (defaultSlotNodes.value.length === 1) {
    for (const node of defaultSlotNodes.value) {
      if (typeof node.children === 'string') {
        return assetMap[node.children as keyof typeof assetMap]
      }
    }
  }
})
</script>

<template>
  <span class="inline-flex min-w-0 items-center gap-2">
    <Icon :name="icon || 'Tag'" />
    <span class="flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden">
      <slot />
    </span>
  </span>
</template>
