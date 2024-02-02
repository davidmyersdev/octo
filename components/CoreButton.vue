<script lang="ts" setup>
import { type Component, computed } from 'vue'

const props = defineProps<{
  as?: string | Component,
  outline?: boolean,
}>()

const component = computed(() => props.as || 'button')
const classes = computed(() => props.outline ? 'border border-layer bg-transparent' : '')
</script>

<template>
  <component
    :is="component"
    class="core-button"
    :class="classes"
  >
    <slot />
  </component>
</template>
