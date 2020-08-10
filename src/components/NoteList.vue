<template>
  <div class="note-list container">
    <p class="toolbar">
      <svg v-if="tag" class="bi bi-hash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
      </svg>
      <span class="action">{{ action }}</span>
    </p>
    <div class="form-group">
      <div class="d-flex align-items-bottom">
        <div class="flex-grow-1">
          <div class="d-flex">
            <input v-model="filterText" ref="input" type="text" class="form-control d-block" placeholder="Start typing to filter the list..." autocomplete="off">
            <div class="monospace ml-2">
              <label class="btn btn-primary btn-toggle">
                <div class="custom-control custom-checkbox">
                  <input v-model="filterRegex" type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">.*</span>
                </div>
              </label>
            </div>
            <div class="monospace ml-1">
              <label class="btn btn-primary btn-toggle">
                <div class="custom-control custom-checkbox">
                  <input v-model="filterCase" type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Aa</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <small class="form-text text-muted mt-2">{{ filterMessage }}</small>
    </div>
    <Note v-for="document in filteredDocuments" :key="document.clientId" v-bind="document"></Note>
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
  data() {
    return {
      filterCase: false,
      filterRegex: true,
      filterText: '',
    };
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
      } else {
        return 'documents';
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
      } else {
        return this.$store.state.documents.all;
      }
    },
    filterMessage() {
      const sensitivity = this.filterCase ? 'sensitive' : 'insensitive';
      const type = this.filterRegex ? 'regular expression' : 'plain text';

      return `Filtering documents with case ${sensitivity} ${type} queries.`;
    },
    filteredDocuments() {
      return this.documents.filter((doc) => {
        if (!this.filterText) {
          return true;
        }

        if (this.filterRegex) {
          return (new RegExp(this.filterText, this.filterCase ? '' : 'i')).test(doc.text);
        } else {
          if (this.filterCase) {
            return doc.text.includes(this.filterText);
          } else {
            return doc.text.toLowerCase().includes(this.filterText.toLowerCase());
          }
        }
      });
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.focus();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.focus();

    next();
  },
};
</script>

<style scoped>
.note-list {
  flex-grow: 1;
  margin: 0 auto;
  /* max-width: 47em; */
  padding: 1rem;
}

.toolbar {
  align-items: center;
  display: flex;
}

svg {
  margin-right: 0.25rem;
}

.btn-toggle {
  background-color: #1a1a1a !important;
  border: 0.0675rem solid #1a1a1a;
  margin-bottom: 0;
}

.btn-toggle .custom-checkbox .custom-control-input ~ .custom-control-label::before {
  background-color: #999;
  border-color: #888;
}

.btn-toggle .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%231a1a1a' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}
</style>
