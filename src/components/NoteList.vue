<template>
  <div class="note-list container">
    <p class="toolbar">
      <svg v-if="tag" class="bi bi-hash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
      </svg>
      <span class="action">{{ action }}</span>
    </p>
    <Note v-for="document in documents" :key="document.clientId" v-bind="document"></Note>
  </div>
</template>

<script>
import Note from '@/components/Note.vue';

export default {
  name: 'NoteList',
  props: {
    tag: String,
    actionable: Boolean,
    discarded: Boolean,
    recent: Boolean,
    untagged: Boolean,
  },
  components: {
    Note,
  },
  computed: {
    action() {
      if (this.tag) {
        return this.tag
      } else if (this.actionable) {
        return 'actionable';
      } else if (this.discarded) {
        return 'discarded';
      } else if (this.recent) {
        return 'recent';
      } else if (this.untagged) {
        return 'untagged';
      }
    },
    documents() {
      if (this.tag) {
        return this.$store.getters.withTag(this.tag);
      } else if (this.actionable) {
        return this.$store.getters.actionable;
      } else if (this.discarded) {
        return this.$store.getters.discarded;
      } else if (this.recent) {
        // show all for now - maybe paginate later
        return this.$store.getters.kept;
      } else if (this.untagged) {
        return this.$store.getters.untagged;
      }
    },
  },
};
</script>

<style scoped>
.note-list {
  flex-grow: 1;
  margin: 0 auto;
  /* max-width: 47em; */
  padding: 0 1rem;
}

.toolbar {
  align-items: center;
  display: flex;
  margin: 1rem 0;
}

svg {
  margin-right: 0.25rem;
}
</style>
