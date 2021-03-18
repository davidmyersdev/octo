<template>
  <small class="key hidden md:flex justify-center rounded-sm shadow uppercase leading-none text-xs text-gray-500 py-1 px-1.5" :class="{ active: active }">
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

<style scoped>
.key {
  min-width: 22px;
}
</style>
