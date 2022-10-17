<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const AsyncChangeLog = defineAsyncComponent(() => {
  return import('/components/ChangeLog.vue')
})
</script>

<template>
  <AsyncChangeLog />
</template>
