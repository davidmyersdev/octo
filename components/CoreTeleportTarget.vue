<script lang="ts" setup>
const props = withDefaults(defineProps<{
  name: string,
  as?: string | Component,
}>(), {
  as: 'div',
})

const { teleports } = useTeleports()
const target = ref<HTMLElement>()

watch(target, () => {
  teleports.value.set(props.name, target.value)
})
</script>

<template>
  <component :is="as" :ref="target" />
</template>
