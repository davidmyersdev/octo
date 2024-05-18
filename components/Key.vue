<script>
export default {
  props: {
    active: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
}
</script>

<template>
  <small class="key hidden md:flex justify-center rounded-sm uppercase leading-none text-xs p-0.5">
    <slot />
  </small>
</template>
