<template>
  <small class="key d-none d-md-flex" :class="{ active: active }">
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
  border: 1px solid #333;
  border-radius: 3px;
  color: #555;
  font-family: 'Fira Mono', monospace !important;
  font-size: 0.8em;
  padding: 0 0.25rem;
}

.light .key {
  border-color: #888;
  color: #666;
}
</style>
