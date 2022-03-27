<template>
  <button class="flex items-center cursor-pointer" @click.stop="toggle">
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    <div class="ml-6 md:ml-3 text-left flex-grow">{{ actionText }}</div>
  </button>
</template>

<script>
export default {
  name: 'DiscardableAction',
  props: {
    discardedAt: Date,
    onDiscard: Function,
    onRestore: Function,
  },
  computed: {
    actionText() {
      return this.discardedAt ? 'Restore' : 'Discard';
    },
  },
  methods: {
    toggle() {
      this.discardedAt ? this.onRestore() : this.onDiscard();
    },
  },
};
</script>
