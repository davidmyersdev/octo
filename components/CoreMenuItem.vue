<script lang="ts" setup>
import { MenuItem } from '@headlessui/vue'
import CoreButton from './CoreButton.vue'

defineProps<{ disabled?: boolean }>()
</script>

<template>
  <MenuItem :as="CoreButton" v-bind="$attrs">
    <slot />
  </MenuItem>
</template>
