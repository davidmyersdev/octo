<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
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
  <label class="border border-current cursor-pointer flex gap-3 items-center px-3 py-2 rounded shadow focus-within:outline-none focus-within:ring">
    <slot name="icon" />
    <input v-model="text" class="bg-transparent flex-grow outline-none text-current" :placeholder="placeholder" :type="type">
  </label>
</template>
