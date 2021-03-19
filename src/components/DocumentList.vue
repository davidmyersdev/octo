<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center text-2xl">
      <div v-if="tag" class="flex items-center">
        <svg height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
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
              <input v-model="filterRegex" type="checkbox" class="checkbox">
              <span class="monospace ml-3">.*</span>
            </label>
            <label class="button button-size-medium button-color-gray shadow ml-2">
              <input v-model="filterCase" type="checkbox" class="checkbox">
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
    <div class="grid gap-4 grid-cols-1" :class="cols === 2 && 'lg:grid-cols-2'">
      <div v-for="document in visibleDocuments" :key="document.id" @keypress.enter="selectDocument(document.id)" @click="selectDocument(document.id)" tabindex="0" class="rounded relative cursor-pointer outline-none focus:ring">
        <Document v-bind="document" class="h-96"></Document>
        <div v-if="document.selected" class="flex items-center justify-center rounded absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-50">
          <svg height="3em" width="3em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div v-if="showLoadMore" class="flex items-center justify-center rounded cursor-pointer">
        <div @click="loadMore" class="button button-color-gray text-lg px-8 py-6">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="ml-3">Load More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Document from '@/components/Document';

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
