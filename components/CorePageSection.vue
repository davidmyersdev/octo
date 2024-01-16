<script lang="ts" setup>
import { type Component, computed } from 'vue'

const props = defineProps<{
  as?: string | Component,
  title?: string,
}>()

const component = computed(() => props.as || 'section')
</script>

<template>
  <component
    :is="component"
  >
    <slot name="title">
      <h3 class="text-2xl">{{ title }}</h3>
    </slot>
    <CoreLayer class="mt-2 mb-6">
      <CoreDivider />
    </CoreLayer>
    <slot />
  </component>
</template>
