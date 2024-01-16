<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <Menu as="div" class="relative text-left" @click.prevent.stop>
    <MenuButton as="template">
      <CoreButton class="ui-open:bg-layer-hover">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </CoreButton>
    </MenuButton>
    <CoreLayer>
      <MenuItems
        class="absolute top-full right-0 mt-1 origin-top-right rounded focus:outline-none p-1 z-10 bg-layer"
      >
        <slot />
      </MenuItems>
    </CoreLayer>
  </Menu>
</template>
