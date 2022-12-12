<template>
  <table>
    <tr>
      <td class="font-bold py-1 px-2">Path</td>
      <td class="font-bold py-1 px-2">Name</td>
      <td class="font-bold py-1 px-2">Redirect</td>
      <td class="font-bold py-1 px-2">Component</td>
    </tr>
    <DevRoute v-for="route in routes" parent="/" :route="route" />
  </table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import DevRoute from '/components/DevRoute.vue'

const props = defineProps<{ routes: RouteRecordRaw[] }>()
const routes = computed(() => props.routes.sort((a, b) => a.path < b.path ? -1 : 1))
</script>
