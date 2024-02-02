<script lang="ts" setup>
import Tag from '#root/components/Tag.vue'
import CoreLink from '~/components/CoreLink.vue'

const props = defineProps<{ tag: string }>()
const route = computed(() => ({ path: `/docs/t/${props.tag}` }))
</script>

<template>
  <CoreButton :as="CoreLink" :to="route" class="flex items-center">
    <Tag>{{ tag }}</Tag>
  </CoreButton>
</template>
