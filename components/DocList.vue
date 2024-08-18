<script lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'
import { type UnwrapRef } from 'vue'
import { MERGE_DOCUMENTS } from '#root/src/store/actions'
import { type Doc } from '~/src/models/doc'
import type CoreScrollable from '/components/CoreScrollable.vue'

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

    const itemHeight = 400

    const ignoreMutation = ref(false)

    const isEditing = ref(false)
    const searchQuery = ref(query.value || '')
    const selectedDocs = ref<Doc[]>([])
    const visibleCount = ref(25)
    const filter = computed(() => props.tag ? `#${props.tag}` : props.filter)

    const { docs } = useDocs({ filter })
    const { searchResults } = useSearch(docs, {
      keys: [
        {
          name: 'headers',
          weight: 1,
        },
        {
          name: 'tags',
          weight: 0.6,
        },
        {
          name: 'text',
          weight: 0.4,
        },
      ],
      searchQuery,
    })

    const finalDocs = computed(() => {
      return searchResults.value.map((doc: Doc) => ({
        ...doc,
        selected: selectedDocs.value.includes(doc),
      }))
    })

    const visibleDocs = computed(() => {
      return finalDocs.value.slice(0, visibleCount.value)
    })

    const scrollable = ref<InstanceType<typeof CoreScrollable>>()

    const rowVirtualizerOptions = computed<UnwrapRef<Parameters<typeof useVirtualizer>[0]>>(() => {
      return {
        count: finalDocs.value.length,
        debug: false,
        estimateSize: () => itemHeight,
        gap: 16,
        getItemKey: (index) => finalDocs.value[index].id,
        getScrollElement: () => scrollable.value?.scrollable?.elements().viewport || null,
        lanes: 2,
        overscan: 10,
      }
    })

    const rowVirtualizer = useVirtualizer(rowVirtualizerOptions)

    const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())
    const totalSize = computed(() => rowVirtualizer.value.getTotalSize())

    watch([filter, query, searchQuery], () => {
      if ((rowVirtualizer.value?.scrollOffset ?? 0) > 0) {
        rowVirtualizer.value.scrollToIndex(0)
      }
    })

    return {
      docs,
      searchResults,
      finalDocs,
      isEditing,
      ignoreMutation,
      itemHeight,
      scrollable,
      searchQuery,
      selectedDocs,
      virtualRows,
      totalSize,
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
  <div class="flex flex-col flex-grow flex-shrink min-h-0 w-full contain-strict">
    <div class="flex-shrink-0 p-4">
      <slot name="header">
        <h2 class="action text-3xl capitalize mb-2">My Docs</h2>
      </slot>
      <slot name="description">
        <div class="text-layer-muted">
          <p v-if="tag">Viewing docs tagged with <strong>{{ tag }}</strong></p>
          <p v-else-if="filter">Viewing <strong>{{ filter }}</strong> docs</p>
          <p v-else>Viewing <strong>all</strong> docs</p>
        </div>
      </slot>
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
    </div>
    <FlexDivider />
    <CoreScrollable ref="scrollable" v-slot="{ element }" class="flex-grow flex-shrink min-h-0 p-4 contain-strict">
      <div
        :ref="element"
        :style="{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }"
      >
        <div
          v-for="virtualRow in virtualRows"
          :key="virtualRow.key"
          :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${virtualRow.size}px`,
            transform: `translateY(${virtualRow.start}px)`,
          }"
        >
          <div class="flex gap-4 w-full mb-4">
            <Doc
              v-bind="finalDocs[virtualRow.index]"
              :allow-discard="isEditing"
              class="flex-grow basis-full"
              :style="{ height: `${itemHeight}px` }"
              @keypress.enter.prevent="selectDoc(finalDocs[virtualRow.index].id)"
              @click="selectDoc(finalDocs[virtualRow.index].id)"
            />
            <Doc
              v-if="finalDocs[virtualRow.index + 1]"
              v-bind="finalDocs[virtualRow.index + 1]"
              :allow-discard="isEditing"
              class="flex-grow basis-full"
              :style="{ height: `${itemHeight}px` }"
              @keypress.enter.prevent="selectDoc(finalDocs[virtualRow.index + 1].id)"
              @click="selectDoc(finalDocs[virtualRow.index + 1].id)"
            />
          </div>
        </div>
      </div>
      <!-- <div class="grid gap-4 grid-cols-1 p-4" :class="cols === 2 && 'lg:grid-cols-2'">
        <div
          v-for="doc in visibleDocs"
          :key="doc.id"
          v-memo="[doc.selected]"
          tabindex="0"
          class="rounded relative cursor-pointer outline-none focus:ring"
          @keypress.enter.prevent="selectDoc(doc.id)"
          @click="selectDoc(doc.id)"
        >
          <Doc v-bind="doc" :allow-discard="isEditing" class="h-96" />
          <div v-if="doc.selected" class="flex items-center justify-center rounded absolute inset-0 bg-layer bg-opacity-50">
            <Icon name="CheckCircle" size="3rem" />
          </div>
        </div>
      </div> -->
    </CoreScrollable>
  </div>
</template>
