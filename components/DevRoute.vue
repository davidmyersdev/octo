<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import DevRoute from '#root/components/DevRoute.vue'

const props = defineProps<{ parent: string, route: RouteRecordRaw }>()
const path = computed(() => `${props.parent} -> ${props.route.path}`)
const children = computed(() => Array.from(props.route.children || []).sort((a, b) => a.path < b.path ? -1 : 1))
</script>

<template>
  <tr>
    <td class="py-1 px-2">
      <CoreLink :to="route.path">
        {{ path }}
      </CoreLink>
    </td>
    <td class="py-1 px-2">
      <CoreLink :to="route.path">
        {{ route.name }}
      </CoreLink>
    </td>
    <td class="py-1 px-2">
      <CoreLink :to="route.path">
        {{ route.redirect }}
      </CoreLink>
    </td>
    <td class="py-1 px-2">
      <CoreLink :to="route.path">
        {{ route.component }}
      </CoreLink>
    </td>
  </tr>
  <template v-if="children.length">
    <DevRoute v-for="child in children" :key="JSON.stringify(child)" :parent="path" :route="child" />
  </template>
</template>
