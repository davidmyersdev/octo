<template>
  <router-link :to="{ path: `/docs/${doc.id}` }" class="flex items-center">
    <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
    <span class="flex-grow overflow-hidden truncate ml-3">{{ title }}</span>
  </router-link>
</template>

<script lang="ts" setup>
const { doc } = defineProps<{ doc: { id: string, headers: string[] } }>()
const title = doc.headers[0]
</script>
