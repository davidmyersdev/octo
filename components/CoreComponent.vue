<script lang="ts" setup>
export type Props = {
  as?: string | Component,
}

defineProps<Props>()
</script>

<template>
  <component :is="as || 'div'">
    <slot />
  </component>
</template>
