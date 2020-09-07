<template>
  <div class="document-list container">
    <p class="toolbar">
      <TagLabel v-if="tag">{{ tag }}</TagLabel>
      <span v-else class="action">{{ action }}</span>
    </p>
    <div class="form-group">
      <div class="d-flex align-items-bottom">
        <div class="flex-grow-1">
          <div class="d-flex">
            <input v-model="filterText" ref="input" type="text" class="form-control d-block" placeholder="Start typing to filter the list..." autocomplete="off">
            <div class="monospace ml-2">
              <label class="btn btn-primary btn-toggle">
                <div class="custom-control custom-checkbox">
                  <input v-model="filterRegex" type="checkbox" class="custom-control-input d-flex">
                  <span class="custom-control-label d-flex">.*</span>
                </div>
              </label>
            </div>
            <div class="monospace ml-1">
              <label class="btn btn-primary btn-toggle">
                <div class="custom-control custom-checkbox">
                  <input v-model="filterCase" type="checkbox" class="custom-control-input d-flex">
                  <span class="custom-control-label d-flex">Aa</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <small class="form-text text-muted mt-2">{{ filterMessage }}</small>
    </div>
    <Document v-for="document in filteredDocuments" :key="document.clientId" v-bind="document"></Document>
  </div>
</template>

<script>
import Document from '@/components/Document';
import TagLabel from '@/components/labels/Tag';

export default {
  name: 'DocumentList',
  props: {
    tag: String,
    actionable: Boolean,
    discarded: Boolean,
    recent: Boolean,
    untagged: Boolean,
  },
  components: {
    Document,
    TagLabel,
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
        return this.$store.getters.decrypted;
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
.document-list {
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
</style>
