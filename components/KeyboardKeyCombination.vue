<script lang="ts" setup>
import KeyboardKey from './KeyboardKey.vue'

defineProps<{ keys?: Array<{ text: string }> }>()
</script>

<template>
  <kbd class="inline-flex gap-0.5">
    <slot>
      <template v-if="keys">
        <KeyboardKey v-for="key in keys" :key="key.text" :text="key.text" />
      </template>
    </slot>
  </kbd>
</template>
