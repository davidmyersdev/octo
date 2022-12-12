<template>
  <tr>
    <td class="py-1 px-2">
      <RouterLink :to="route.path">{{ path }}</RouterLink>
    </td>
    <td class="py-1 px-2">
      <RouterLink :to="route.path">{{ route.name }}</RouterLink>
    </td>
    <td class="py-1 px-2">
      <RouterLink :to="route.path">{{ route.redirect }}</RouterLink>
    </td>
    <td class="py-1 px-2">
      <RouterLink :to="route.path">{{ route.component }}</RouterLink>
    </td>
  </tr>
  <DevRoute v-if="children" v-for="child in children" :parent="path" :route="child" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import DevRoute from '/components/DevRoute.vue'

const props = defineProps<{ parent: string, route: RouteRecordRaw }>()
const path = computed(() => `${props.parent} -> ${props.route.path}`)
const children = computed(() => props.route.children?.sort((a, b) => a.path < b.path ? -1 : 1))
</script>
