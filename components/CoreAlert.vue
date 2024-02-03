<script lang="ts" setup>
import { ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps<{
  type: 'danger' | 'notice' | 'warning',
}>()

const isDanger = computed(() => props.type === 'danger')
const isNotice = computed(() => props.type === 'notice')
const isWarning = computed(() => props.type === 'warning')
</script>

<template>
  <section
    :class="{ 'text-red-200': isDanger, 'text-blue-200': isNotice, 'text-yellow-200': isWarning }"
    class="flex gap-3 rounded p-2 border border-layer"
    role="alert"
  >
    <span class="flex items-start">
      <slot name="icon">
        <XCircleIcon v-if="isDanger" class="h-6" />
        <ExclamationCircleIcon v-else-if="isWarning" class="h-6" />
        <InformationCircleIcon v-else class="h-6" />
      </slot>
    </span>
    <slot />
  </section>
</template>
