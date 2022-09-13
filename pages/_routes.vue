<template>
  <div>
    <h1 class="text-lg">There are {{ routes.length }} routes.</h1>
    <table>
      <tr>
        <td class="font-bold py-1 px-2">Route Path</td>
        <td class="font-bold py-1 px-2">Route Name</td>
      </tr>
      <tr v-for="route in routes">
        <td class="py-1 px-2">
          <NuxtLink :to="route.path">{{ route.path }}</NuxtLink>
        </td>
        <td class="py-1 px-2">
          <NuxtLink :to="route.path" >{{ route.name }}</NuxtLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
const routes = [...useRouter().options.routes].sort((a, b) => a.path < b.path ? -1 : 1)
</script>
