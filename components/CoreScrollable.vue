<script lang="ts" setup>
import { OverlayScrollbars } from 'overlayscrollbars'
import { type VNodeRef, onMounted, shallowRef } from 'vue'
import { isHtmlElement } from '/src/utils/dom'

const element = shallowRef<HTMLElement | null>()
const scrollable = shallowRef<OverlayScrollbars>()
const scrollableElement = shallowRef<HTMLElement>()

defineSlots<{
  default(props: { element: VNodeRef }): any,
}>()

useResizeObserver(element, () => {
  scrollable.value?.update()
})

onMounted(() => {
  if (scrollableElement.value) {
    scrollable.value = OverlayScrollbars(scrollableElement.value, {
      update: {
        debounce: 0,
        ignoreMutation() {
          return true
        },
      },
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 200,
      },
    })
  }
})

onUnmounted(() => {
  if (scrollable.value) {
    scrollable.value.destroy()
  }
})

const setElementRef: VNodeRef = (el) => {
  if (isHtmlElement(el)) {
    element.value = el
  }
}

defineExpose({
  scrollable,
  scrollableElement,
})
</script>

<template>
  <div ref="scrollableElement" class="overflow-auto">
    <slot :element="setElementRef" />
  </div>
</template>
