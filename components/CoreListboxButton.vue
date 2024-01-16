<script lang="ts" setup>
import { ListboxButton } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid'
import { CoreButton } from '#components'
</script>

<template>
  <ListboxButton
    :as="CoreButton"
    class="flex justify-between"
  >
    <slot />
    <span
      class="pointer-events-none flex items-center"
    >
      <ChevronUpDownIcon
        class="h-5 w-5 text-layer-muted"
        aria-hidden="true"
      />
    </span>
  </ListboxButton>
</template>
