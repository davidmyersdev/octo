<script lang="ts" setup>
import { ChevronUpDownIcon } from '@heroicons/vue/24/outline'
import { type Component, computed, ref } from 'vue'

const props = defineProps<{
  as?: string | Component,
  label?: string,
}>()

const component = computed(() => props.as || 'section')
const showContent = ref(true)

const toggleContent = () => {
  showContent.value = !showContent.value
}
</script>

<template>
  <component
    :is="component"
    class="p-2"
  >
    <slot name="label">
      <h6 v-if="label" class="flex items-center justify-between text-sm text-layer-muted cursor-pointer" @click="toggleContent">
        <span class="flex items-center gap-2">
          <ChevronUpDownIcon class="h-4" />
          <span>{{ label }}</span>
        </span>
      </h6>
    </slot>
    <template v-if="showContent">
      <slot />
    </template>
  </component>
</template>
