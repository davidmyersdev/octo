<script lang="ts" setup>
const props = withDefaults(defineProps<{
  device?: 'mobile' | 'tablet' | 'desktop',
  height?: number,
  rotate?: boolean,
  width?: number,
}>(), {
  device: 'mobile',
})

const devices = {
  // iPhone SE
  mobile: { width: 375, height: 667 },
  // iPad Mini
  tablet: { width: 768, height: 1024 },
  // Macbook Pro 14"
  desktop: { width: 1512, height: 982 },
}

const derivedHeight = computed(() => props.height || devices[props.device].height)
const derivedWidth = computed(() => props.width || devices[props.device].width)
const actualHeight = computed(() => props.rotate ? derivedWidth : derivedHeight)
const actualWidth = computed(() => props.rotate ? derivedHeight : derivedWidth)
</script>

<template>
  <div :style="{ height: `${actualHeight.value}px`, width: `${actualWidth.value}px` }">
    <slot />
  </div>
</template>
