<script lang="ts">
import { MERGE_DOCUMENTS } from '#root/src/store/actions'
import { type Doc } from '~/src/models/doc'

export default defineComponent({
  props: {
    cols: {
      default: 2,
      type: Number,
    },
    filter: String,
    query: String,
    tag: String,
  },
  emits: ['update:query'],
  setup(props) {
    const { query } = toRefs(props)

    const isEditing = ref(false)
    const searchQuery = ref(query.value || '')
    const selectedDocs = ref<Doc[]>([])
    const visibleCount = ref(25)
    const filter = computed(() => props.tag ? `#${props.tag}` : props.filter)

    const { docs } = useDocs({ filter })
    const { searchResults } = useSearch(docs, { keys: ['text'], searchQuery })

    const finalDocs = computed(() => {
      return searchResults.value.map((doc: Doc) => ({
        ...doc,
        selected: selectedDocs.value.includes(doc),
      }))
    })

    const visibleDocs = computed(() => {
      return finalDocs.value.slice(0, visibleCount.value)
    })

    return {
      docs,
      searchResults,
      finalDocs,
      isEditing,
      searchQuery,
      selectedDocs,
      visibleCount,
      visibleDocs,
    }
  },
  computed: {
    action() {
      return this.tag || this.filter || 'My docs'
    },
    canMerge() {
      return this.selectedDocs.length > 1
    },
    showLoadMore() {
      return this.visibleCount <= this.finalDocs.length
    },
  },
  watch: {
    searchQuery(value) {
      this.$emit('update:query', value)
    },
  },
  methods: {
    loadMore() {
      this.visibleCount += 25
    },
    mergeDocs() {
      this.$store.dispatch(MERGE_DOCUMENTS, this.selectedDocs)

      this.selectedDocs = []
    },
    toggleIsEditing() {
      this.isEditing = !this.isEditing

      if (!this.isEditing) {
        this.selectedDocs = []
      }
    },
    selectDoc(id: string) {
      if (this.isEditing) {
        if (this.selectedDocs.find(doc => doc.id === id)) {
          this.selectedDocs = this.selectedDocs.filter(doc => doc.id !== id)
        } else {
          const foundDoc = this.searchResults.find(doc => doc.id === id)

          if (foundDoc) {
            this.selectedDocs.push(foundDoc)
          }
        }
      } else {
        this.$router.push({ path: `/docs/${id}` })
      }
    },
  },
})
</script>

<template>
  <div class="flex flex-col w-full">
    <h2 class="action text-3xl capitalize mb-2">My Docs</h2>
    <div class="text-layer-muted">
      <p v-if="tag">Viewing docs tagged with <strong>{{ tag }}</strong></p>
      <p v-else-if="filter">Viewing <strong>{{ filter }}</strong> docs</p>
      <p v-else>Viewing <strong>all</strong> docs</p>
    </div>
    <div class="mb-4 mt-8">
      <CoreLayer class="flex gap-2">
        <CoreButton @click="toggleIsEditing">
          {{ isEditing ? 'Cancel' : 'Manage Docs' }}
        </CoreButton>
        <CoreButton v-if="canMerge" @click="mergeDocs">
          Merge Docs
        </CoreButton>
      </CoreLayer>
      <p v-if="isEditing" class="text-layer-muted">Select two or more docs to merge them together.</p>
    </div>
    <div class="mb-4">
      <CoreInput
        v-model="searchQuery"
        autocomplete="off"
        autofocus
        label="Search"
        description="Supports /regex/i and fuzzy-matching."
        placeholder="Start typing to filter results..."
      />
    </div>
    <div class="grid gap-4 grid-cols-1" :class="cols === 2 && 'lg:grid-cols-2'">
      <div
        v-for="doc in visibleDocs"
        :key="doc.id"
        tabindex="0"
        class="rounded relative cursor-pointer outline-none focus:ring"
        @keypress.enter.prevent="selectDoc(doc.id)"
        @click="selectDoc(doc.id)"
      >
        <LazyDoc v-bind="doc" :allow-discard="isEditing" class="h-96" />
        <div v-if="doc.selected" class="flex items-center justify-center rounded absolute inset-0 bg-layer bg-opacity-50">
          <Icon name="CheckCircle" size="3rem" />
        </div>
      </div>
      <div v-if="showLoadMore" class="flex items-center justify-center rounded cursor-pointer">
        <CoreButton class="text-lg px-8 py-6" @click="loadMore">
          <Icon name="DocLoad" size="1.5rem" />
          <span>Load More</span>
        </CoreButton>
      </div>
    </div>
  </div>
</template>
