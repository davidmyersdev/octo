<script lang="ts" setup>
import { ListboxButton } from '@headlessui/vue'
import { CoreButton } from '#components'
</script>

<template>
  <ListboxButton
    :as="CoreButton"
    class="flex justify-between ui-open:bg-layer-hover"
  >
    <slot />
    <span
      class="pointer-events-none flex items-center"
    >
      <Icon name="Toggle" class="text-layer-muted" aria-hidden="true" />
    </span>
  </ListboxButton>
</template>
