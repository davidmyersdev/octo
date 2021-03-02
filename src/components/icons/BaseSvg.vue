<template>
  <div class="flex items-center justify-center">
    <svg class="bi bi-hash" fill="currentColor" :height="size" :width="size" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <slot></slot>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseSvg',
  props: {
    size: {
      type: String,
      default: '1em',
      required: false,
    },
  },
};
</script>
