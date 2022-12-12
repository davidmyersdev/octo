<template>
  <DocList v-model:query="query" :tag="tag" />
</template>

<script lang="ts" setup>
const props = defineProps<{ tag: string }>()
const route = useRoute()
const { query } = useRouteQuery()
const tag = props.tag || route.query.tag as string
</script>
