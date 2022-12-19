<template>
  <DocList v-model:query="query" />
</template>

<script lang="ts" setup>
const { query } = useRouteQuery()
</script>
