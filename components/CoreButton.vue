<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const accessibility = 'cursor-pointer outline-none focus:ring focus-within:ring'
    const design = 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 px-3 py-2 rounded shadow whitespace-nowrap'
    const layout = 'flex gap-3 items-center justify-center'
    const classes = [accessibility, design, layout].join(' ')

    return {
      classes,
    }
  },
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
