<template>
  <NuxtLink :to="route" class="flex items-center">
    <Tag>{{ tag }}</Tag>
  </NuxtLink>
</template>

<script setup>
import Tag from '/components/Tag.vue'

const { tag } = defineProps(['tag'])
const route = { path: `/docs/t/${tag}` }
</script>
