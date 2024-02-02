<script lang="ts" setup>
const props = defineProps<{ filter?: string }>()
const router = useRouter()
const filterParam = computed(() => router.currentRoute.value.params.filter as string)
const filter = computed(() => filterParam.value || props.filter || router.currentRoute.value.query.filter as string)
const { query } = useRouteQuery()

useHead({
  title: 'Docs',
})
</script>

<template>
  <CorePage>
    <DocList v-model:query="query" :filter="filter" />
  </CorePage>
</template>
