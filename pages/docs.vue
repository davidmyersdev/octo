<template>
  <div class="container mx-auto p-4 md:px-16 md:py-8">
    <DocumentList v-model:query="query" :filter="filter" :tag="tag" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import DocumentList from '/components/DocumentList.vue'

const route = useRoute()
const router = useRouter()
const props = defineProps(['filter', 'tag'])
const filter = props.filter || route.query.filter as string
const query = ref(route.query.q as string)
const tag = props.tag || route.query.tag as string

watch(query, (value) => {
  const resolved = router.resolve({
    ...route,
    query: {
      ...route.query,
      q: value,
    },
  })

  // This will replace the browser history's current state with the new query.
  // This is necessary to prevent the entire component from reloading (the behavior of router.replace).
  window.history.replaceState(window.history.state, '', resolved.fullPath)
})
</script>
