<script lang="ts" setup>
import { HashtagIcon as TagIcon } from '@heroicons/vue/24/outline'
import { useSlots } from 'vue'

const assetMap = {
  daily: 'Daily',
  octo: 'Logo',
} as const

const defaultSlotNodes = computed(() => useSlots().default?.() || [])

const assetType = computed(() => {
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
    <CoreAsset v-if="assetType" :type="assetType" class="sq-5" />
    <TagIcon v-else class="w-5" />
    <span class="flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden">
      <slot />
    </span>
  </span>
</template>
