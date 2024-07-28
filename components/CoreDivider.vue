<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    responsive: {
      default: false,
      type: Boolean,
    },
    vertical: {
      default: false,
      type: Boolean,
    },
  },
})
</script>

<template>
  <div
    class="block bg-layer border-layer overflow-hidden basis-px flex-shrink self-stretch"
    :class="{ 'border-l h-full w-0': vertical, 'lg:border-l-0 lg:border-t lg:h-0 lg:w-full': vertical && responsive, 'border-t h-0 w-full': !vertical, 'lg:border-t-0 lg:border-l lg:h-full lg:w-0': !vertical && responsive }"
  >
    &nbsp;
  </div>
</template>
