<script lang="ts" setup>
import DevRoutes from '#root/components/DevRoutes.vue'

const routes = computed(() => [...useRouter().options.routes])
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-lg">
      There are {{ routes.length }} top-level routes.
    </h1>
    <DevRoutes :routes="routes" class="whitespace-nowrap" />
  </div>
</template>
