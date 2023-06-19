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
    const classes = `flex border-0 border-layer-0 ${props.vertical ? 'border-l-2 h-full' : 'border-t-2'}`

    return {
      classes,
    }
  },
})
</script>

<template>
  <hr :class="classes">
</template>
