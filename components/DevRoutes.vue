<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import DevRoute from '#root/components/DevRoute.vue'

const props = defineProps<{ routes: RouteRecordRaw[] }>()
const sortedRoutes = computed(() => [...props.routes].sort((a, b) => a.path < b.path ? -1 : 1))
</script>

<template>
  <table>
    <tr>
      <td class="font-bold py-1 px-2">
        Path
      </td>
      <td class="font-bold py-1 px-2">
        Name
      </td>
      <td class="font-bold py-1 px-2">
        Redirect
      </td>
      <td class="font-bold py-1 px-2">
        Component
      </td>
    </tr>
    <template v-if="sortedRoutes">
      <DevRoute v-for="route in sortedRoutes" :key="JSON.stringify(route)" :route="route" parent="/" />
    </template>
  </table>
</template>
