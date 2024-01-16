<script lang="ts" setup>
import { Listbox } from '@headlessui/vue'
</script>

<template>
  <Listbox
    as="div"
    class="relative"
  >
    <slot />
  </Listbox>
</template>
