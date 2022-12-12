<template>
  <div class="flex flex-col">
    <h1 class="text-lg">There are {{ routes.length }} top-level routes.</h1>
    <DevRoutes :routes="routes" class="whitespace-nowrap" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import DevRoutes from '/components/DevRoutes.vue'

const routes = computed(() => [...useRouter().options.routes])
</script>
