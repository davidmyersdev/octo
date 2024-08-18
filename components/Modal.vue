<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['close'],
  computed: {
    hasFooter() {
      return !!this.$slots.footer
    },
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
  },
})
</script>

<template>
  <div class="flex items-center justify-center fixed inset-0 z-50 bg-layer bg-opacity-50">
    <CoreLayer class="w-full max-w-2xl">
      <CoreCard class="overflow-hidden flex flex-col gap-8">
        <header class="flex items-center justify-between gap-4">
          <h1 class="text-2xl flex items-center justify-between">
            <slot name="header" />
          </h1>
          <button class="p-2 -m-2" @click="onClose">
            <Icon name="Dismiss" />
          </button>
        </header>
        <CoreScrollable v-slot="{ element }" class="max-h-96">
          <div :ref="element">
            <slot />
          </div>
        </CoreScrollable>
        <footer v-if="hasFooter">
          <slot name="footer" />
        </footer>
      </CoreCard>
    </CoreLayer>
  </div>
</template>
