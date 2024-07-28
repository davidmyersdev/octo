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
        class="flex relative h-5 items-stretch justify-stretch shrink-0 grow-0 cursor-pointer rounded border border-layer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2"
      >
        <span class="sr-only">Toggle</span>
        <span aria-hidden="true" class="pointer-events-none flex aspect-[2/1] p-[2px] overflow-hidden">
          <span
            class="
              relative
              font-bold text-[0.4rem] leading-none
              flex
              border-transparent
              overflow-hidden
              w-full
            "
          >
            <span
              class="relative inline-flex items-center align-middle basis-1/2 flex-shrink-0 transition-all duration-200 ease-in-out"
              :class="{
                'ml-0': modelValue,
                '-ml-[50%]': !modelValue,
              }"
            >
              <span class="absolute pr-[2px] w-full text-center">ON</span>
            </span>
            <span class="relative inline-flex items-center align-middle basis-1/2 flex-shrink-0 bg-current rounded-sm h-full aspect-square">
              &nbsp;
            </span>
            <span class="relative inline-flex items-center align-middle basis-1/2 flex-shrink-0">
              <span class="absolute pl-[2px] w-full text-center">OFF</span>
            </span>
          </span>
        </span>
      </Switch>
      <span v-if="label">{{ label }}</span>
    </label>
    <small v-if="description" class="block text-layer-muted">{{ description }}</small>
  </div>
</template>
