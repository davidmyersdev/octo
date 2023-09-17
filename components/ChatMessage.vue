<script lang="ts" setup>
import { readonly } from '#root/src/vendor/plugins/readonly'

const props = defineProps<{ createdAt: Date, role: string, text: string }>()
const { copy } = useClipboard()
const { isShowing: isCopyHintShowing, show: showCopyHint } = useToast()
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

const copyMessage = async () => {
  if (props.text) {
    await copy(props.text)

    showCopyHint()
  }
}
</script>

<template>
  <section class="flex flex-col gap-1" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
    <div class="flex flex-col relative">
      <label class="bg-layer-0 bg-opacity-75 block m-1 px-1 rounded sticky top-1 z-10" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
        <small>{{ name }}</small>
      </label>
      <div class="relative flex flex-wrap gap-2 bg-layer-1 rounded p-2">
        <CoreEditor v-if="isMounted" :layer="1" :model-value="text" :options="options" class="bg-layer-1 rounded -m-2" />
        <div class="flex flex-grow items-center gap-1 justify-end">
          <CoreButton :disabled="isCopyHintShowing" :layer="1" @click="copyMessage">
            <svg v-if="isCopyHintShowing" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          </CoreButton>
        </div>
      </div>
    </div>
    <p class="flex items-center gap-2 px-2" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
      <small>{{ createdAt }}</small>
    </p>
  </section>
</template>
