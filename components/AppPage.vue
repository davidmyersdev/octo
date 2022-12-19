<script lang="ts">
export default defineComponent({
  props: {
    pageKey: {
      type: String,
    },
  },
  setup() {
    const { isNuxt } = useIsNuxt()

    return {
      isNuxt,
    }
  },
})
</script>

<template>
  <NuxtPage v-if="isNuxt" :pageKey="pageKey" />
  <RouterView v-else :inheritAttrs="true" :key="pageKey" />
</template>
