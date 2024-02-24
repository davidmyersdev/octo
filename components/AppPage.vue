<script lang="ts">
export default defineComponent({
  props: {
    pageKey: {
      type: String,
      default: 'static',
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
  <NuxtPage v-if="isNuxt" :page-key="pageKey" />
  <RouterView v-else :key="pageKey" :inherit-attrs="true" />
</template>
