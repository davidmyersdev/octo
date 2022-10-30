<script lang="ts" setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <li class="flex items-center gap-3">
    <CheckCircleIcon class="h-6 w-6" />
    <span>
      <slot />
    </span>
  </li>
</template>
