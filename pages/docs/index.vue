<script lang="ts" setup>
const { query } = useRouteQuery()

useHead({
  title: 'Docs',
})
</script>

<template>
  <CorePage>
    <DocList v-model:query="query" />
  </CorePage>
</template>
