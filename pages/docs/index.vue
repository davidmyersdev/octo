<template>
  <CorePage>
    <DocList v-model:query="query" />
  </CorePage>
</template>

<script lang="ts" setup>
const { query } = useRouteQuery()
</script>
