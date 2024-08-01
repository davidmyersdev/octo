<script>
export default {
  props: {
    discardedAt: Date,
    onDiscard: Function,
    onRestore: Function,
  },
  computed: {
    actionText() {
      return this.discardedAt ? 'Restore' : 'Discard'
    },
  },
  methods: {
    toggle() {
      this.discardedAt ? this.onRestore() : this.onDiscard()
    },
  },
}
</script>

<template>
  <button class="flex items-center gap-2 cursor-pointer" @click.stop="toggle">
    <Icon name="Trash" />
    <div class="text-left flex-grow">{{ actionText }}</div>
  </button>
</template>
