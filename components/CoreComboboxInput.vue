<script lang="ts" setup>
import { ComboboxInput } from '@headlessui/vue'
import CoreInput from '~/components/CoreInput.vue'

withDefaults(defineProps<{
  id: string,
  as?: string | Component,
  defaultValue?: string,
  placeholder?: string,
}>(), {
  as: () => CoreInput,
  defaultValue: '',
  placeholder: 'Start typing to filter the list...',
})

const model = defineModel<string>()
</script>

<template>
  <CoreInput
    :id="id"
    v-model="model"
    :as="ComboboxInput"
    :placeholder="placeholder"
  />
</template>
