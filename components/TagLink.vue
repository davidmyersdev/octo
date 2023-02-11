<template>
  <CoreLink :to="route" class="flex items-center">
    <Tag>{{ tag }}</Tag>
  </CoreLink>
</template>

<script setup>
import Tag from '#root/components/Tag.vue'

const { tag } = defineProps(['tag'])
const route = { path: `/docs/t/${tag}` }
</script>
