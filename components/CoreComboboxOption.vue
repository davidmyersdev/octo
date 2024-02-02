<script lang="ts" setup>
import { ComboboxOption } from '@headlessui/vue'
import CoreButton from '~/components/CoreButton.vue'
</script>

<template>
  <ComboboxOption :as="CoreButton" class="flex justify-between">
    <slot />
  </ComboboxOption>
</template>
