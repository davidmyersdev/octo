<script lang="ts" setup>
defineProps<{ header?: string }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <small v-if="$slots.timestamp" class="text-layer-muted">
      <slot name="timestamp" />
    </small>
    <header class="flex flex-col gap-2">
      <h3 v-if="$slots.header || header" class="text-2xl">
        <strong>
          <slot name="header">
            <template v-if="header">
              {{ header }}
            </template>
          </slot>
        </strong>
      </h3>
    </header>
    <slot />
  </div>
</template>
