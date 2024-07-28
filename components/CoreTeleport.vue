<script lang="ts" setup>
const props = defineProps<{
  target: string,
}>()

const { teleports } = useTeleports()
const targetElement = computed(() => teleports.value.get(props.target))
</script>

<template>
  <Teleport v-if="targetElement" :to="targetElement">
    <slot />
  </Teleport>
</template>
