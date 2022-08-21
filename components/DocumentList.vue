<template>
  <div class="flex flex-col w-full">
    <h2 class="action text-3xl capitalize mb-2">My Docs</h2>
    <p v-if="tag || filter" class="flex items-center gap-1 text-gray-500">
      Filtering docs as
      <strong class="inline-flex items-center">
        <span v-if="tag" class="inline-flex items-center gap-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
          <span>{{ tag }}</span>
        </span>
        <span v-else class="">{{ filter }}</span>
      </strong>
    </p>
    <div class="mb-4 mt-8">
      <div class="flex align-items-bottom">
        <div class="flex-grow">
          <div class="flex">
            <input v-model="q" ref="input" type="text" class="form-text w-full shadow" placeholder="Search with /regex/i or plain text..." autocomplete="off">
          </div>
        </div>
      </div>
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
import Document from '/components/Document.vue'
import Tag from '/components/Tag.vue'

import { open } from '/src/router.js'

import {
  MERGE_DOCUMENTS,
} from '/src/store/actions.js'

const REGEX_QUERY = /^\/(?<regex>.+)\/(?<flags>[a-z]*)$/s

export default {
  name: 'DocumentList',
  emits: ['update:query'],
  components: {
    Document,
    Tag,
  },
  props: {
    cols: {
      default: 2,
      type: Number,
    },
    filter: String,
    query: String,
    tag: String,
  },
  data() {
    return {
      isEditing: false,
      q: this.query,
      selectedDocuments: [],
      visibleCount: 25,
    }
  },
  watch: {
    q(value) {
      this.$emit('update:query', value)
    }
  },
  computed: {
    action() {
      return this.tag || this.filter || 'My docs'
    },
    canMerge() {
      return this.selectedDocuments.length > 1
    },
    documents() {
      if (this.tag) { return this?.$store?.getters.withTag(this.tag) }
      if (this.filter === 'tasks') { return this?.$store?.getters.tasks }
      if (this.filter === 'discarded') { return this?.$store?.getters.discarded }
      if (this.filter === 'untagged') { return this?.$store?.getters.untagged }

      return this?.$store?.getters.kept
    },
    filteredDocuments() {
      return this.documents.filter((doc) => {
        if (!this.q) { return true }

        try {
          const { groups: { flags, regex } } = REGEX_QUERY.exec(this.q)

          return (new RegExp(regex, flags)).test(doc.text)
        } catch (_error) {
          return doc.text.toLowerCase().includes(this.q.toLowerCase())
        }
      })
    },
    finalDocuments() {
      return this.filteredDocuments.map((doc) => ({
        ...doc,
        selected: this.selectedDocuments.includes(doc),
      }))
    },
    showLoadMore() {
      return this.visibleCount <= this.finalDocuments.length
    },
    visibleDocuments() {
      return this.finalDocuments.slice(0, this.visibleCount)
    },
  },
  methods: {
    loadMore() {
      this.visibleCount += 25
    },
    mergeDocuments() {
      this?.$store?.dispatch(MERGE_DOCUMENTS, this.selectedDocuments)

      this.selectedDocuments = []
    },
    toggleIsEditing() {
      this.isEditing = !this.isEditing

      if (!this.isEditing) {
        this.selectedDocuments = []
      }
    },
    selectDocument(id) {
      if (this.isEditing) {
        if (this.selectedDocuments.find(doc => doc.id === id)) {
          this.selectedDocuments = this.selectedDocuments.filter(doc => doc.id !== id)
        } else {
          this.selectedDocuments.push(this.filteredDocuments.find(doc => doc.id === id))
        }
      } else {
        open({ name: 'doc', params: { id: id } })
      }
    },
  },
  mounted() {
    this.$refs.input.focus()
  },
}
</script>
