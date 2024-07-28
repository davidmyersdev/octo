<script lang="ts" setup>
const contentElement = ref<HTMLElement>()
const scaleElement = ref<HTMLElement>()
const scale = ref(1)

useResizeObserver(scaleElement, ([observation]) => {
  const box = observation.contentRect

  if (contentElement.value) {
    scale.value = Math.min(
      box.height / contentElement.value.clientHeight,
      box.width / contentElement.value.clientWidth,
    )
  }
}, { box: 'content-box' })

useResizeObserver(contentElement, ([observation]) => {
  const box = observation.contentRect

  if (scaleElement.value) {
    scale.value = Math.min(
      scaleElement.value.clientHeight / box.height,
      scaleElement.value.clientWidth / box.width,
    )
  }
}, { box: 'border-box' })
</script>

<template>
  <div ref="scaleElement">
    <div ref="contentElement" class="h-fit w-fit origin-top-left" :style="{ scale }">
      <slot />
    </div>
  </div>
</template>
