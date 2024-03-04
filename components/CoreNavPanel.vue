<script lang="ts" setup>
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { type Component, computed, ref } from 'vue'

const props = defineProps<{
  as?: string | Component,
  horizontal?: boolean,
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
    class="flex flex-col gap-2 p-2"
  >
    <slot name="label">
      <h6 v-if="label" class="flex items-center justify-between text-sm text-layer-muted cursor-pointer" @click="toggleContent">
        <span class="flex items-center flex-grow gap-1">
          <ChevronDownIcon v-if="showContent" class="h-4" />
          <ChevronRightIcon v-else class="h-4" />
          <span class="inline-flex flex-grow justify-between items-center">
            <span>{{ label }}</span>
            <slot name="label-alt-action" />
          </span>
        </span>
      </h6>
    </slot>
    <div v-if="showContent" class="flex gap-1" :class="{ 'flex-col': !horizontal }">
      <slot />
    </div>
  </component>
</template>
