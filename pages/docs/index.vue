<script lang="ts" setup>
const { query } = useRouteQuery()

useHead({
  title: 'Docs',
})
</script>

<template>
  <DocList v-model:query="query" />
</template>
