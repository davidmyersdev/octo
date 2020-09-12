<template>
  <div class="btn btn-sm btn-secondary destroy" @click.prevent="toggle">
    <DiscardLabel>{{ actionText }}</DiscardLabel>
  </div>
</template>

<script>
import DiscardLabel from '@/components/labels/Discard';

export default {
  name: 'DiscardableAction',
  props: {
    discardedAt: Date,
    onDiscard: Function,
    onRestore: Function,
  },
  components: {
    DiscardLabel,
  },
  computed: {
    actionText() {
      return this.discardedAt ? 'restore' : 'discard';
    },
  },
  methods: {
    toggle() {
      this.discardedAt ? this.onRestore() : this.onDiscard();
    },
  },
};
</script>

<style scoped>
  .destroy {
    align-items: center;
    cursor: pointer;
    display: flex;
  }

  .destroy svg {
    margin-right: 0.25rem;
  }
</style>
