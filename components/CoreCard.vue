<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  as?: string | Component,
  outline?: boolean,
}>()

const component = computed(() => props.as || 'div')
const classes = computed(() => props.outline ? 'border border-layer' : 'bg-layer')
</script>

<template>
  <component
    :is="component"
    :class="classes"
    class="p-2 rounded"
  >
    <slot />
  </component>
</template>
