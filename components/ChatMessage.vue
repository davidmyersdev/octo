<script lang="ts" setup>
import { readonly } from '#root/src/vendor/plugins/readonly'

const props = defineProps<{ createdAt: Date, role: string, text: string }>()
const isHuman = computed(() => props.role === 'human')
const isAssistant = computed(() => props.role === 'assistant')
const name = computed(() => isHuman.value ? 'You' : 'Assistant')
const { isMounted } = useHooks()
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
  plugins: [
    ...readonly(),
  ],
  readability: false,
}
const { humanTime } = useTime()
const createdAt = computed(() => humanTime(props.createdAt))
</script>

<template>
  <section class="flex flex-col">
    <div class="flex flex-col relative">
      <label class="bg-layer-0 bg-opacity-75 block m-1 px-1 rounded sticky top-1 z-10" :class="{ 'self-end': isAssistant, 'self-start': isHuman }"><small>{{ name }}</small></label>
      <CoreEditor v-if="isMounted" :layer="1" :modelValue="text" :options="options" class="bg-layer-1 rounded" />
    </div>
    <p class="flex px-2 mt-1" :class="{ 'self-end': isAssistant, 'self-start': isHuman }"><small>{{ createdAt }}</small></p>
  </section>
</template>
