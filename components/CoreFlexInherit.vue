<script lang="ts" setup>
import CoreFlex from '~/components/CoreFlex.vue'
import type { Props as CoreFlexProps } from '~/components/CoreFlex.vue'

export type Props = CoreFlexProps

defineProps<Props>()
</script>

<template>
  <CoreFlex class="flex-inherit">
    <slot />
  </CoreFlex>
</template>
