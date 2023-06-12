<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'

const layers = {
  0: 'bg-layer-0 hover:bg-layer-1',
  1: 'bg-layer-1 hover:bg-layer-2',
  2: 'bg-layer-2 hover:bg-layer-3',
  3: 'bg-layer-3 hover:bg-layer-4',
  4: 'bg-layer-4 hover:bg-layer-5',
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
