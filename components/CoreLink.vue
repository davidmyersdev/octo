<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'
import { type RouterLinkProps } from 'vue-router'

export default defineComponent({
  props: {
    to: {
      required: true,
      type: [String, Object] as PropType<string | RouterLinkProps['to']>
    },
  },
  setup(props) {
    const { isNuxt } = useIsNuxt()
    const isExternal = computed(() => typeof props.to === 'string')
    const toExternal = computed(() => props.to as string)
    const toInternal = computed(() => props.to as RouterLinkProps)

    return {
      isExternal,
      isNuxt,
      toExternal,
      toInternal,
    }
  },
})
</script>

<template>
  <a v-if="isExternal" :href="toExternal" rel="noopener noreferrer" target="_blank"><slot /></a>
  <RouterLink v-else-if="!isNuxt" :to="toInternal"><slot /></RouterLink>
  <NuxtLink v-else :to="toInternal"><slot /></NuxtLink>
</template>
