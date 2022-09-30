<template>
  <div class="flex items-center justify-center fixed inset-0 z-50 bg-gray-100 bg-opacity-50 dark:bg-darkest dark:bg-opacity-50">
    <div class="w-full max-w-4xl p-4">
      <div class="bg-gray-100 dark:bg-darkest rounded p-4 shadow">
        <h1 class="text-2xl flex items-center justify-between">
          <span class="px-2">
            <slot name="header"></slot>
          </span>
          <button class="p-2" @click="onClose">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </h1>
        <hr class="border-gray-200 dark:border-gray-800 mt-4">
        <SimpleBar class="max-h-96 py-4 px-2">
          <slot></slot>
        </SimpleBar>
        <hr v-if="hasFooter" class="border-gray-200 dark:border-gray-800 mb-4">
        <div v-if="hasFooter">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
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
