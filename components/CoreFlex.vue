<script lang="ts" setup>
import CoreComponent from '~/components/CoreComponent.vue'
import type { Props as CoreComponentProps } from '~/components/CoreComponent.vue'

export type Props = CoreComponentProps

defineProps<Props>()
</script>

<template>
  <CoreComponent class="flex">
    <slot />
  </CoreComponent>
</template>
