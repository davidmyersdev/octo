<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'

const layers = {
  0: 'core-button-layer-0',
  1: 'core-button-layer-1',
  2: 'core-button-layer-2',
  3: 'core-button-layer-3',
  4: 'core-button-layer-4',
}

export default defineComponent({
  props: {
    layer: {
      default: 2,
      type: Number as PropType<keyof typeof layers>,
    },
  },
  setup(props) {
    const classes = computed(() => layers[props.layer])

    return {
      classes,
    }
  },
})
</script>

<template>
  <button class="core-button" :class="classes">
    <slot />
  </button>
</template>
