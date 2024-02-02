<script lang="ts" setup>
import { computed } from 'vue'
import { DesignSystemLayer } from '~/lib/components'
import { type OkLevel } from '~/lib/composables'

const props = defineProps<{
  index: number,
  levels: OkLevel[],
}>()

const splitLevels = computed(() => {
  const [current, ...rest] = props.levels

  return {
    current,
    rest,
  }
})
</script>

<template>
  <DesignSystemLayer :index="index" :level="splitLevels.current">
    <DesignSystemLayerStack
      v-if="splitLevels.rest.length > 0"
      :index="index + 1"
      :levels="splitLevels.rest"
    />
  </DesignSystemLayer>
</template>
