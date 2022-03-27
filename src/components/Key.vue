<template>
  <small class="key hidden md:flex justify-center rounded-sm uppercase leading-none text-xs p-1">
    <slot></slot>
  </small>
</template>

<script>
export default {
  name: 'Key',
  props: {
    active: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
}
</script>
