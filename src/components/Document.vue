<template>
  <div class="shadow relative flex flex-col min-w-0 rounded text-sm overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
    <div class="flex-grow flex-shrink overflow-hidden p-4">
      <pre>{{ text }}</pre>
    </div>
    <div class="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900">
      <p class="text-gray-500">{{ updated }}</p>
      <div>
        <button v-if="discardedAt" @click.stop="restore" class="destroy button-flat button-size-medium text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span class="ml-2">Restore</span>
        </button>
        <button v-else @click.stop="discard" class="destroy button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span class="ml-2">Discard</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
