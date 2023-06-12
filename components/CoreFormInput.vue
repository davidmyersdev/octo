<script lang="ts">
const layers = {
  0: 'bg-layer-0',
  1: 'bg-layer-1',
  2: 'bg-layer-2',
  3: 'bg-layer-3',
  4: 'bg-layer-4',
  5: 'bg-layer-5',
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
  <div class="flex -m-1 p-1 rounded focus-within:ring">
    <div class="flex flex-col flex-grow p-1 rounded" :class="classes">
      <slot />
    </div>
  </div>
</template>
