<script lang="ts" setup>
import type { LayerIndex } from '#imports'

const props = defineProps<{
  down?: boolean,
}>()

const { layerIndex: previousLayerIndex } = useLayers()
const newLayerIndex = computed(() => props.down ? previousLayerIndex.value - 1 as LayerIndex : previousLayerIndex.value + 1 as LayerIndex)
const { layer, layerIndex } = useLayers(newLayerIndex)

provide('layerIndex', layerIndex.value)
</script>

<template>
  <slot :layer="layer" />
</template>
