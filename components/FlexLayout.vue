<script lang="ts" setup>
export type FlexLayoutProps = {
  as?: string | Component,
  dir?: 'col' | 'row',
  inverted?: boolean,
  // Todo: Add other breakpoints.
  invertAt?: 'lg',
}

const props = withDefaults(defineProps<FlexLayoutProps>(), {
  dir: 'col',
})

const flexClasses = {
  col: {
    lg: '@lg:flex-col',
  },
  row: {
    lg: '@lg:flex-row',
  },
} as const

const isRow = computed(() => {
  return (
    !props.inverted && props.dir === 'row'
  ) || (
    props.inverted && props.dir !== 'row'
  )
})
const inverseDir = computed(() => isRow.value ? 'col' : 'row')

const classes = computed(() => {
  return [
    isRow.value ? 'flex-row' : 'flex-col',
    props.invertAt ? flexClasses[inverseDir.value][props.invertAt] : '',
  ]
})
</script>

<template>
  <Flex :as="as" :class="classes" data-flex-layout>
    <slot />
  </Flex>
</template>
