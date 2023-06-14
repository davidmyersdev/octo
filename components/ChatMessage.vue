<script lang="ts" setup>
const props = defineProps<{ role: string, text: string }>()
const isHuman = computed(() => props.role === 'human')
const isAssistant = computed(() => props.role === 'assistant')
const name = computed(() => isHuman.value ? 'You' : 'Assistant')
const options = {
  interface: {
    attribution: false,
    autocomplete: true,
    images: false,
    lists: false,
    readonly: true,
    spellcheck: false,
    toolbar: false,
  },
  readability: false,
}
</script>

<template>
  <section class="flex flex-col relative">
    <label class="bg-layer-0 bg-opacity-50 block m-1 p-1 rounded sticky top-1 z-10" :class="{ 'self-end': isAssistant, 'self-start': isHuman }"><small>{{ name }}</small></label>
    <CoreEditor :layer="2" :modelValue="text" :options="options" class="bg-layer-1 rounded" />
  </section>
</template>
