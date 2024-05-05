<script lang="ts" setup>
import { ListboxOptions } from '@headlessui/vue'
</script>

<template>
  <CoreLayer :as="ListboxOptions" class="absolute flex flex-col top-full left-0 mt-1 origin-top-right rounded p-1 z-10 focus:outline-none">
    <slot />
  </CoreLayer>
</template>
