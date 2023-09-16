<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import CoreButton from './CoreButton.vue'

const emit = defineEmits(['discard'])

const discard = () => {
  emit('discard')
}
</script>

<template>
  <Menu as="div" class="relative text-left" @click.prevent.stop>
    <div>
      <MenuButton
        :as="CoreButton"
        :layer="1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </MenuButton>
    </div>
    <MenuItems
      class="absolute top-full right-0 mt-1 origin-top-right divide-y divide-gray-100 rounded bg-layer-2 focus:outline-none"
    >
      <div class="p-1">
        <MenuItem v-slot="{ active }" as="template">
          <CoreButton :active="active" :flat="true" :layer="2" @click="discard">
            <AssetTrash
              class="h-5 w-5"
              aria-hidden="true"
            />
            <span>Discard</span>
          </CoreButton>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
