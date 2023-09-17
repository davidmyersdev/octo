<script lang="ts" setup>
import { MenuItem } from '@headlessui/vue'
import CoreButton from './CoreButton.vue'
import type { LayerIndex } from '#root/composables/useLayers'

defineProps<{ layer: LayerIndex }>()
</script>

<template>
  <MenuItem :as="CoreButton" :layer="layer">
    <slot />
  </MenuItem>
</template>
