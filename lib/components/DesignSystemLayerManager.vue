<script lang="ts" setup>
import { toRefs, watch } from 'vue'
import { toCssVars, useColorLayer } from '../composables/useColors'

const props = defineProps<{
  index: number,
}>()

const { index } = toRefs(props)

const { color, layer } = useColorLayer(index)

watch(color, () => {
  for (const [property, value] of Object.entries(toCssVars(layer.value))) {
    document.querySelector<HTMLElement>('[data-appearance=custom]')?.style.setProperty(property, value)
  }
})
</script>

<template>
  <div class="flex items-center gap-2" :class="`layer-${index}`">
    <div>Layer {{ index }}</div>
    <CoreButton as="label" class="items-center relative overflow-hidden bg-layer text-layer">
      <input v-model="color" type="color" class="absolute left-0 bottom-0 opacity-0 cursor-pointer">
      <span>Color</span>
    </CoreButton>
  </div>
</template>
