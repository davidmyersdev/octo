<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    vertical: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    const classes = computed(() => {
      return `block border-layer overflow-hidden ${props.vertical ? 'border-l h-full w-0' : 'border-t h-0'}`
    })

    return {
      classes,
    }
  },
})
</script>

<template>
  <div :class="classes">&nbsp;</div>
</template>
