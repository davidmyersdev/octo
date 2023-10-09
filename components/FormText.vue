<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      default: '',
      type: String,
    },
    modelValue: {
      default: '',
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const text = computed({
      get() {
        return props.modelValue
      },
      set(value: string) {
        emit('update:modelValue', value)
      },
    })

    return {
      text,
    }
  },
})
</script>

<template>
  <label class="cursor-pointer flex flex-col gap-1 text-left">
    <span v-if="label"><small>{{ label }}</small></span>
    <span class="border border-current flex gap-3 items-center px-3 py-2 rounded shadow focus-within:outline-none focus-within:ring">
      <slot name="icon" />
      <input v-model="text" class="bg-transparent flex-grow outline-none text-current" :placeholder="placeholder" :type="type">
    </span>
  </label>
</template>
