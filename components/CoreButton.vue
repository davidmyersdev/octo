<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'

type LayerIndex = 0 | 1 | 2 | 3 | 4

const layerClasses = (layerIndex: LayerIndex, isActive: boolean) => {
  const all = {
    0: `${isActive ? 'bg-layer-1' : 'bg-layer-0'} hover:bg-layer-1`,
    1: `${isActive ? 'bg-layer-2' : 'bg-layer-1'} hover:bg-layer-2`,
    2: `${isActive ? 'bg-layer-3' : 'bg-layer-2'} hover:bg-layer-3`,
    3: `${isActive ? 'bg-layer-4' : 'bg-layer-3'} hover:bg-layer-4`,
    4: `${isActive ? 'bg-layer-5' : 'bg-layer-4'} hover:bg-layer-5`,
  }

  return all[layerIndex]
}

export default defineComponent({
  props: {
    active: {
      default: false,
      type: Boolean,
    },
    flat: {
      default: false,
      type: Boolean,
    },
    is: {
      default: 'button',
      type: [String, Object] as PropType<string | object>,
    },
    layer: {
      default: 2,
      type: Number as PropType<LayerIndex>,
    },
  },
  setup(props) {
    const baseClasses = computed(() => layerClasses(props.layer, props.active))
    // Todo: Move hover states to CSS vars to avoid this check.
    const additionalClasses = computed(() => (props.layer === 1 && !props.flat) ? 'dark:hover:bg-layer-3' : '')
    const classes = computed(() => `${baseClasses.value} ${additionalClasses.value}`)

    return {
      classes,
    }
  },
})
</script>

<template>
  <component :is="is" :class="classes" class="core-button">
    <slot />
  </component>
</template>
