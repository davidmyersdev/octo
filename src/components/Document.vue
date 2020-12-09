<template>
  <div class="card cursor-pointer border" :class="{ 'border-transparent': !selected }">
    <div class="document">
      <button v-if="discardedAt" @click.stop="restore" class="destroy btn btn-sm d-flex align-items-center">
        <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        <span class="ml-2">Restore</span>
      </button>
      <button v-else @click.stop="discard" class="destroy btn btn-sm d-flex align-items-center">
        <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        <span class="ml-2">Discard</span>
      </button>
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
