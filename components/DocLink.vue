<script lang="ts" setup>
import type { Doc } from '#root/src/models/doc'

defineProps<{ doc: Doc }>()
</script>

<template>
  <CoreLink :to="{ path: `/docs/${doc.id}` }" class="flex items-center gap-2">
    <Icon name="Doc" />
    <span class="flex-grow overflow-hidden truncate">{{ doc.label }}</span>
  </CoreLink>
</template>
