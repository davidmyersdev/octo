<script lang="ts" setup>
const { toasts } = useToasts()
</script>

<template>
  <div class="flex flex-col gap-2">
    <Toast v-for="toast in toasts" :key="toast.id">
      {{ toast.message }}
    </Toast>
  </div>
</template>
