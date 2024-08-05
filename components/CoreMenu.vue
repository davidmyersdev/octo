<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <Menu as="div" class="relative text-left" @click.prevent.stop>
    <MenuButton as="template">
      <slot name="menu-button">
        <CoreButton class="ui-open:bg-layer-hover">
          <Icon name="DotsVertical" />
        </CoreButton>
      </slot>
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
