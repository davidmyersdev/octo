<script lang="ts" setup>
import {
  IconDotsVertical,
  IconGripVertical,
  IconSelector,
} from '@tabler/icons-vue'
import { useToggle } from '~/composables/useToggle'

withDefaults(defineProps<{
  label?: string,
  menu?: boolean,
}>(), {
  menu: true,
})

const { state: isVisible, toggle } = useToggle()
</script>

<template>
  <div
    :class="{ 'flex-shrink': !isVisible, 'flex-grow': isVisible }"
    class="flex flex-col min-h-0 min-w-0 rounded border border-layer"
  >
    <header class="flex gap-1 items-center justify-between p-1">
      <CoreButton disabled class="ui-open:bg-layer-hover p-1">
        <IconGripVertical class="sq-4" />
      </CoreButton>
      <CoreButton class="flex justify-start grow items-center gap-1 pl-1 pr-2 py-0" @click="toggle">
        <IconSelector class="sq-4" />
        <slot name="header">
          <h3 v-if="label">{{ label }}</h3>
        </slot>
      </CoreButton>
      <div v-if="menu" class="flex flex-direction-inherit items-center gap-[inherit]">
        <CoreMenu class="flex items-center">
          <template #menu-button>
            <CoreButton class="ui-open:bg-layer-hover p-1">
              <IconDotsVertical class="sq-4" />
            </CoreButton>
          </template>
          <CoreMenuItem>
            <CoreButton class="p-0">
              Close
            </CoreButton>
          </CoreMenuItem>
        </CoreMenu>
      </div>
    </header>
    <CoreDivider v-show="isVisible" />
    <CoreScrollable v-show="isVisible" class="flex-grow p-1">
      <slot />
    </CoreScrollable>
  </div>
</template>
