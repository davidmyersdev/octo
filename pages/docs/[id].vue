<template>
  <CustomizedEditor :disabled="false" :id="id"></CustomizedEditor>
</template>

<script lang="ts" setup>
const id = useRoute().params.id as string
</script>
