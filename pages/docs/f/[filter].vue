<template>
  <DocList v-model:query="query" :filter="filter" />
</template>

<script lang="ts" setup>
const props = defineProps<{ filter: string }>()
const route = useRoute()
const filter = computed(() => props.filter || route.query.filter as string)
const { query } = useRouteQuery()
</script>
