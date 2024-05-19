<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

defineProps<{
  description?: string,
  label?: string,
}>()

const modelValue = defineModel<boolean>()
</script>

<template>
  <div>
    <label class="inline-flex items-center gap-2 cursor-pointer">
      <Switch
        v-model="modelValue"
        :class="modelValue ? 'bg-primary' : 'bg-layer'"
        class="inline-flex relative h-5 items-stretch justify-stretch shrink-0 grow-0 cursor-pointer rounded border border-layer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2"
      >
        <span class="sr-only">Toggle</span>
        <span aria-hidden="true" class="pointer-events-none inline-flex aspect-[2/1] overflow-hidden">
          <span
            class="
              relative
              font-bold text-[0.4rem] leading-none
              inline-flex items-center gap-0
              border-2 border-transparent
              aspect-square w-1/2
              transform-gpu transition duration-200 ease-in-out
            "
            :class="{
              'translate-x-[100%]': modelValue,
              'translate-x-0': !modelValue,
            }"
          >
            <span class="absolute block right-full mr-1">ON</span>
            <span
              class="relative bg-current block rounded-sm h-full w-full"
            />
            <span class="absolute block left-full ml-1">OFF</span>
          </span>
        </span>
      </Switch>
      <span v-if="label">{{ label }}</span>
    </label>
    <small v-if="description" class="block text-layer-muted">{{ description }}</small>
  </div>
</template>
