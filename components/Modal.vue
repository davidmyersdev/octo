<template>
  <div class="flex items-center justify-center fixed inset-0 z-50 bg-gray-100 bg-opacity-50 dark:bg-darkest dark:bg-opacity-50">
    <div class="w-full max-w-2xl p-4">
      <article class="bg-gray-100 dark:bg-gray-800 rounded shadow overflow-hidden">
        <header class="flex items-center justify-between p-4">
          <h1 class="text-2xl flex items-center justify-between">
            <slot name="header"></slot>
          </h1>
          <button class="p-2 -mr-2" @click="onClose">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <CoreScrollable class="max-h-96 p-4">
          <slot></slot>
        </CoreScrollable>
        <footer v-if="hasFooter" class="px-4 py-2">
          <slot name="footer"></slot>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
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
