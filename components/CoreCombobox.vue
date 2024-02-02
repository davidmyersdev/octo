<script generic="T extends string | number | boolean | object | null | undefined" lang="ts" setup>
import { Combobox } from '@headlessui/vue'

const model = defineModel<T | T[]>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Combobox v-model="model" as="template" multiple>
    <div>
      <slot />
    </div>
  </Combobox>
</template>
