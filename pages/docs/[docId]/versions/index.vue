<template>
  <CorePage>
    <div class="grid gap-4 grid-cols-1">
      <CoreLink :to="{ path: `/docs/${doc?.id}` }" class="relative">
        <Doc v-bind="doc" />
        <span class="absolute p-1 right-2 rounded text-sm top-2 underline">Current Version</span>
      </CoreLink>
      <CoreLink v-for="docVersion in docVersions" :key="docVersion.id" :to="{ path: `/docs/${doc?.id}/versions/${docVersion.id}` }">
        <Doc v-bind="docVersion" />
      </CoreLink>
    </div>
  </CorePage>
</template>

<script lang="ts" setup>
const { doc } = useDocs()
const { docVersions } = useDocVersions()

useHead({
  title: 'Doc History',
})
</script>
