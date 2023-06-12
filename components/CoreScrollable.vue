<script lang="ts">
import { OverlayScrollbars } from 'overlayscrollbars'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const scrollable = ref<OverlayScrollbars>()
    const scrollableElement = ref<HTMLElement>()

    onMounted(() => {
      if (scrollableElement.value) {
        scrollable.value = OverlayScrollbars(scrollableElement.value, {
          scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 200,
          },
        })
      }
    })

    return {
      scrollable,
      scrollableElement,
    }
  },
})
</script>

<template>
  <div ref="scrollableElement" class="overflow-auto">
    <slot />
  </div>
</template>
