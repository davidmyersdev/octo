<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <div class="flex items-center text-2xl">
      <div v-if="tag" class="flex items-center">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/>
          <path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        <span class="ml-3 flex-grow">{{ tag }}</span>
      </div>
      <span v-else class="action capitalize">{{ action }}</span>
    </div>
    <div class="my-4">
      <div class="flex align-items-bottom">
        <div class="flex-grow">
          <div class="flex items-center">
            <input v-model="filterText" ref="input" type="text" class="form-text w-full shadow" placeholder="Start typing to filter the list..." autocomplete="off">
            <label class="button button-size-medium button-color-gray shadow ml-2">
              <input v-model="filterRegex" type="checkbox" class="transform scale-125 focus:outline-none">
              <span class="monospace ml-3">.*</span>
            </label>
            <label class="button button-size-medium button-color-gray shadow ml-2">
              <input v-model="filterCase" type="checkbox" class="transform scale-125 focus:outline-none">
              <span class="monospace ml-3">Aa</span>
            </label>
          </div>
        </div>
      </div>
      <small class="block mt-2 text-gray-700">{{ filterMessage }}</small>
    </div>
    <div class="mb-4">
      <button @click="toggleIsEditing" class="button button-size-medium button-color-gray shadow">{{ isEditing ? 'Cancel' : 'Edit Documents' }}</button>
      <button v-if="canMerge" @click="mergeDocuments" class="button button-size-medium button-color-gray shadow ml-2">Merge Documents</button>
    </div>
    <div>
      <p v-if="isEditing" class="text-gray-700">Select two or more documents to merge them together.</p>
    </div>
    <div class="grid gap-4 grid-cols-1" :class="`lg:grid-cols-${cols}`">
      <div v-for="document in visibleDocuments" :key="document.id" @keypress.enter="selectDocument(document.id)" @click="selectDocument(document.id)" tabindex="0" class="rounded relative cursor-pointer outline-none focus:ring">
        <Document v-bind="document" class="h-96"></Document>
        <div v-if="document.selected" class="flex items-center justify-center rounded absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </div>
      </div>
      <div v-if="showLoadMore" class="flex items-center justify-center rounded cursor-pointer">
        <div @click="loadMore" class="button button-color-gray px-10 py-8">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-file-earmark-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
            <path fill-rule="evenodd" d="M8 6a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 10.293V6.5A.5.5 0 0 1 8 6z"/>
          </svg>
          <span class="ml-3">Load More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Document from '@/components/Document';
import TagLabel from '@/components/labels/Tag';

import {
  MERGE_DOCUMENTS,
} from '@/store/actions';

export default {
  name: 'DocumentList',
  props: {
    tag: String,
    actionable: Boolean,
    discarded: Boolean,
    recent: Boolean,
    untagged: Boolean,
    cols: {
      type: Number,
      default: 2,
    },
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
      isEditing: false,
      selectedDocuments: [],
      visibleCount: 25,
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
    canMerge() {
      return this.selectedDocuments.length > 1;
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
    finalDocuments() {
      return this.filteredDocuments.map((doc) => ({
        ...doc,
        selected: this.selectedDocuments.includes(doc),
      }));
    },
    showLoadMore() {
      return this.visibleCount <= this.finalDocuments.length;
    },
    visibleDocuments() {
      return this.finalDocuments.slice(0, this.visibleCount);
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    loadMore() {
      this.visibleCount += 25;
    },
    mergeDocuments() {
      this.$store.dispatch(MERGE_DOCUMENTS, this.selectedDocuments);

      this.selectedDocuments = [];
    },
    toggleIsEditing() {
      this.isEditing = !this.isEditing;

      if (!this.isEditing) {
        this.selectedDocuments = [];
      }
    },
    selectDocument(id) {
      if (this.isEditing) {
        if (this.selectedDocuments.find(doc => doc.id === id)) {
          this.selectedDocuments = this.selectedDocuments.filter(doc => doc.id !== id);
        } else {
          this.selectedDocuments.push(this.filteredDocuments.find(doc => doc.id === id));
        }
      } else {
        this.$router.push({ name: 'document', params: { id: id } });
      }
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
