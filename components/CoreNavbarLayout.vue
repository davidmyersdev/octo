<script lang="ts" setup>
import type { FlexLayoutProps } from './FlexLayout.vue'

defineProps<FlexLayoutProps>()
</script>

<template>
  <FlexLayout v-bind="$props" data-core-navbar-layout>
    <slot name="nav-wrapper">
      <LayerTemplate v-if="$slots.nav" v-slot="{ layer }">
        <FlexLayout
          as="nav"
          class="bg-layer flex-shrink-0 justify-between p-1"
          :class="{ [layer.class]: true }"
          inverted
          v-bind="$props"
        >
          <slot name="nav" />
        </FlexLayout>
      </LayerTemplate>
    </slot>
    <FlexDivider />
    <slot name="default-wrapper">
      <div class="flex-grow flex-shrink min-h-0 min-w-0 bg-layer p-1">
        <slot name="default" />
      </div>
    </slot>
  </FlexLayout>
</template>
