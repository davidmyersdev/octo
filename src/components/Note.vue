<template>
  <div class="card">
    <router-link class="note" :to="noteRoute">
      <div class="btn btn-sm btn-secondary destroy" @click.prevent="deleteNote">
        <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        <span>delete</span>
      </div>
      <pre class="pb-3">{{ text }}</pre>
      <p class="text-muted mb-0"><small>{{ updated }}</small></p>
    </router-link>
  </div>
</template>

<script>
import { DISCARD_DOCUMENT } from '@/store/actions';

export default {
  name: 'Note',
  props: {
    clientId: String,
    text: String,
    updatedAt: Date,
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
    deleteNote() {
      this.$store.dispatch(DISCARD_DOCUMENT, {
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
    align-items: center;
    cursor: pointer;
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  svg {
    margin-right: 0.25rem;
  }
</style>
