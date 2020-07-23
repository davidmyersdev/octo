<template>
  <div class="card">
    <router-link class="note" :to="noteRoute">
      <DiscardableAction v-if="clientId" :discardedAt="discardedAt" :onDiscard="discard" :onRestore="restore" class="destroy"></DiscardableAction>
      <pre class="pb-3">{{ text }}</pre>
      <p class="text-muted mb-0"><small>{{ updated }}</small></p>
    </router-link>
  </div>
</template>

<script>
import DiscardableAction from '@/components/DiscardableAction';

import {
  DISCARD_DOCUMENT,
  RESTORE_DOCUMENT,
} from '@/store/actions';

export default {
  name: 'Note',
  props: {
    clientId: String,
    text: String,
    updatedAt: Date,
    discardedAt: Date,
  },
  components: {
    DiscardableAction,
  },
  computed: {
    noteRoute() {
      return { name: 'document', params: { documentId: this.clientId } };
    },
    updated() {
      return `Updated on ${moment(this.updatedAt).format('ddd, MMM Do, YYYY [at] h:mm A')}`;
    },
  },
  methods: {
    discard() {
      this.$store.dispatch(DISCARD_DOCUMENT, {
        document: {
          clientId: this.clientId,
        },
      });
    },
    restore() {
      this.$store.dispatch(RESTORE_DOCUMENT, {
        document: {
          clientId: this.clientId,
        },
      });
    },
  },
};
</script>

<style scoped>
  .note {
    color: #fff;
    display: block;
    min-height: 5rem;
    padding: 1rem;
    position: relative;
  }

  .note pre {
    overflow: hidden;
  }

  .note .destroy {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  svg {
    margin-right: 0.25rem;
  }
</style>
