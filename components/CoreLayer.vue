<script generic="T extends BaseElement" lang="ts" setup>
import type { LayerIndex } from '#imports'

export type BaseElement = string | Component

const props = defineProps<{
  as?: T,
  bottom?: boolean,
  down?: boolean,
  template?: boolean,
}>()

const { layerIndex: previousLayerIndex } = useLayers()
const newLayerIndex = computed(() => props.bottom ? 0 : props.down ? previousLayerIndex.value - 1 as LayerIndex : previousLayerIndex.value + 1 as LayerIndex)
const { layer, layerIndex } = useLayers(newLayerIndex)

provide('layerIndex', layerIndex.value)
</script>

<template>
  <template v-if="template">
    <slot :layer="layer" />
  </template>
  <component :is="as || 'div'" v-else :class="layer?.class">
    <slot :layer="layer" />
  </component>
</template>
