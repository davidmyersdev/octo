<script lang="ts">
import { OverlayScrollbars } from 'overlayscrollbars'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const scrollable = ref<HTMLElement>()

    onMounted(() => {
      OverlayScrollbars(scrollable.value!, {
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 200,
        },
      })
    })

    return {
      scrollable,
    }
  },
})
</script>

<template>
  <div ref="scrollable" class="overflow-auto">
    <slot />
  </div>
</template>
