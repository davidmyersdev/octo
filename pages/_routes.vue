<template>
  <div class="flex flex-col">
    <h1 class="text-lg">There are {{ sortedRoutes.length }} routes.</h1>
    <table>
      <tr>
        <td class="font-bold py-1 px-2">Route Path</td>
        <td class="font-bold py-1 px-2">Route Name</td>
      </tr>
      <tr v-for="route in sortedRoutes">
        <td class="py-1 px-2">
          <RouterLink :to="route.path">{{ route.path }}</RouterLink>
        </td>
        <td class="py-1 px-2">
          <RouterLink :to="route.path" >{{ route.name }}</RouterLink>
        </td>
        <td class="py-1 px-2">
          <RouterLink :to="route.path" >{{ route.redirect }}</RouterLink>
        </td>
        <td class="py-1 px-2">
          <RouterLink :to="route.path" >{{ route.component }}</RouterLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const routes = [...useRouter().options.routes].flatMap((parentRoute) => {
  const childRoutes = parentRoute.children || []

  return [parentRoute, ...childRoutes]
})

const sortedRoutes = routes.sort((a, b) => a.path < b.path ? -1 : 1)
</script>
