<script lang="ts">
export default defineComponent({
  props: {
    key: {
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
  <RouterView v-if="!isNuxt" :inheritAttrs="true" :key="key" />
  <NuxtPage :pageKey="key" v-else />
</template>
