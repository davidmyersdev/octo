<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'
import type { LayerIndex } from '#root/composables/useLayers'

export default defineComponent({
  props: {
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
    const { layer: layerIndex } = toRefs(props)
    const { layer, nextLayer } = useLayers(layerIndex)
    const classes = computed(() => `${layer.value.bg} ${layer.value.bgDisabled} ${nextLayer.value.bgHover} ${nextLayer.value.bgUiActive}`)

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
