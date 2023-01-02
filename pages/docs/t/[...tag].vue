<template>
  <CorePage>
    <DocList v-model:query="query" :tag="tag" />
  </CorePage>
</template>

<script lang="ts" setup>
const props = defineProps<{ tag: string }>()
const router = useRouter()
const { query } = useRouteQuery()
const tagParam = computed(() => Array.isArray(router.currentRoute.value.params.tag) ? router.currentRoute.value.params.tag.join('/') : undefined)
const tag = computed(() => tagParam.value || props.tag || router.currentRoute.value.query.tag as string)
const { isNuxt } = useIsNuxt()

useHead({
  title: 'Docs',
})
</script>
