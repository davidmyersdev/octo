<template>
  <div class="card cursor-pointer border" :class="{ 'border-transparent': !selected }">
    <div class="document">
      <DiscardableAction v-if="id" :discardedAt="discardedAt" :onDiscard="discard" :onRestore="restore" class="destroy"></DiscardableAction>
      <pre class="pb-3">{{ text }}</pre>
      <p class="text-muted mb-0"><small>{{ updated }}</small></p>
    </div>
  </div>
</template>

<script>
import DiscardableAction from '@/components/DiscardableAction';

import {
  DISCARD_DOCUMENT,
  RESTORE_DOCUMENT,
} from '@/store/actions';

export default {
  name: 'Document',
  props: {
    id: String,
    text: String,
    updatedAt: Date,
    discardedAt: Date,
    selected: false,
  },
  components: {
    DiscardableAction,
  },
  computed: {
    updated() {
      return `Updated on ${moment(this.updatedAt).format('ddd, MMM Do, YYYY [at] h:mm A')}`;
    },
  },
  methods: {
    discard() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.id });
    },
    restore() {
      this.$store.dispatch(RESTORE_DOCUMENT, { id: this.id });
    },
  },
};
</script>

<style scoped>
  .document {
    color: #fff;
    display: block;
    min-height: 5rem;
    padding: 1rem;
    position: relative;
  }

  .document pre {
    overflow: hidden;
  }

  .document .destroy {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  svg {
    margin-right: 0.25rem;
  }
</style>
