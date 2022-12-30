<template>
  <DocList v-model:query="query" :tag="tag" />
</template>

<script lang="ts" setup>
const props = defineProps<{ tag: string }>()
const route = useRoute()
const { query } = useRouteQuery()
const paramTag = computed(() => Array.isArray(route.params.tag) ? route.params.tag.join('/') : undefined)
const tag = computed(() => props.tag || paramTag.value || route.query.tag as string)
</script>
