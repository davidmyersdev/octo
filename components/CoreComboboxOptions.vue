<script lang="ts" setup>
import { ComboboxOptions } from '@headlessui/vue'
import CoreLayer from '~/components/CoreLayer.vue'

withDefaults(defineProps<{
  id: string,
  as?: string | Component,
}>(), {
  as: () => CoreLayer,
})
</script>

<template>
  <ComboboxOptions
    :id="id"
    :as="as"
    class="bg-layer flex flex-col gap-1 mt-2 rounded focus:outline-none p-1"
    static
  >
    <slot />
  </ComboboxOptions>
</template>
