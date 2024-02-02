<script lang="ts" setup>
import { ListboxOptions } from '@headlessui/vue'
</script>

<template>
  <ListboxOptions class="absolute flex flex-col top-full left-0 mt-1 origin-top-right rounded focus:outline-none p-1 z-10">
    <slot />
  </ListboxOptions>
</template>
