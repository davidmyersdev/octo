<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'
import { type RouterLinkProps } from 'vue-router'

export default defineComponent({
  props: {
    counter: {
      default: false,
      type: Boolean,
    },
    to: {
      required: true,
      type: [String, Object] as PropType<string | RouterLinkProps['to']>,
    },
  },
  setup(props) {
    const isExternal = computed(() => typeof props.to === 'string')
    const toExternal = computed(() => props.to as string)
    const { to } = toRefs(props)
    const { toWithCounter } = useQueryCounter(to)
    const toInternal = computed(() => (props.counter ? toWithCounter : props.to) as RouterLinkProps)

    return {
      isExternal,
      toExternal,
      toInternal,
    }
  },
})
</script>

<template>
  <a v-if="isExternal" :href="toExternal" rel="noopener noreferrer" target="_blank" class="cursor-pointer outline-none focus:ring">
    <slot />
  </a>
  <NuxtLink v-else :to="toInternal" class="cursor-pointer outline-none focus:ring">
    <slot />
  </NuxtLink>
</template>
