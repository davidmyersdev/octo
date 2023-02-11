<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const AsyncChangeLog = defineAsyncComponent(() => {
  return import('#root/components/ChangeLog.vue')
})
</script>

<template>
  <AsyncChangeLog />
</template>
