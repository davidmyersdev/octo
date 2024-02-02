<script lang="ts" setup>
import { type Component, computed } from 'vue'

const props = defineProps<{
  as?: string | Component,
}>()

const component = computed(() => props.as || 'section')
</script>

<template>
  <component
    :is="component"
    class="p-2"
  >
    <slot />
  </component>
</template>
