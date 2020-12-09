<template>
  <button class="btn d-flex align-items-center" @click.stop="toggle">
    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    <span class="ml-3">{{ actionText }}</span>
  </button>
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

<style scoped>
  svg {
    margin: 0;
  }

  .destroy {
    align-items: center;
    cursor: pointer;
    /* display: flex; */
  }

  .destroy svg {
    margin-right: 0.25rem;
  }
</style>
