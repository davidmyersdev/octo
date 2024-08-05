<script lang="ts" setup>
import { useToggle } from '~/composables/useToggle'

const props = withDefaults(defineProps<{
  closeable?: boolean,
  collapsed?: boolean,
  label?: string,
}>(), {
  closeable: false,
  collapsed: false,
})

defineEmits(['close'])

// eslint-disable-next-line vue/no-setup-props-reactivity-loss
const state = ref(!props.collapsed)
const { state: isVisible, toggle } = useToggle({ state })
</script>

<template>
  <div class="flex flex-col min-h-0 min-w-0 rounded border border-layer">
    <header class="flex flex-shrink-0 gap-1 justify-between p-1">
      <CoreButton class="flex justify-start grow items-center gap-1 pl-1 pr-2 py-0" @click="toggle">
        <Icon name="Toggle" size="1rem" />
        <slot name="header">
          <h3 v-if="label">{{ label }}</h3>
        </slot>
      </CoreButton>
      <CoreButton v-if="closeable" class="flex shrink items-center px-1 py-0" @click="$emit('close')">
        <Icon name="Dismiss" size="1rem" />
      </CoreButton>
    </header>
    <div class="grid grid-rows-[0fr] transition-all" :class="{ 'grid-rows-[1fr]': isVisible }">
      <div class="flex flex-col overflow-hidden">
        <FlexDivider class="flex-shrink-0" />
        <div class="flex flex-col flex-grow justify-end overflow-hidden">
          <div class="flex flex-col flex-grow gap-1 p-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
