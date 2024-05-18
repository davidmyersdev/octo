<script lang="ts" setup>
import { ClipboardIcon } from '@heroicons/vue/24/outline'
import { readonly } from '#root/src/vendor/plugins/readonly'
import { useVue } from '#shared/composables'

const props = defineProps<{ createdAt: Date, role: string, text: string, attachments?: { url: string }[] }>()

const { copy } = useClipboard()
const { addToast } = useToasts()
const isHuman = computed(() => props.role === 'human')
const isAssistant = computed(() => props.role === 'assistant')
const name = computed(() => isHuman.value ? 'You' : 'Assistant')
const { isMounted } = useVue()

const isEditable = typeof window !== 'undefined' && window?.navigator.userAgent.match(/firefox/i)

const options = {
  interface: {
    attribution: false,
    autocomplete: false,
    images: false,
    lists: false,
    readonly: true,
    spellcheck: false,
    toolbar: false,
  },
  plugins: [
    ...(isEditable ? [] : readonly()),
  ],
  readability: false,
}
const { humanTime } = useTime()
const createdAt = computed(() => humanTime(props.createdAt))

const copyMessage = async () => {
  if (props.text) {
    await copy(props.text)

    addToast('Message copied to clipboard!')
  }
}
</script>

<template>
  <section class="flex flex-col gap-1" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
    <div class="flex flex-col relative">
      <label class="bg-layer bg-opacity-75 block m-1 px-1 rounded sticky top-1 z-10" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
        <small>{{ name }}</small>
      </label>
      <div class="flex items-start" :class="{ 'justify-end': isHuman, 'justify-start': isAssistant }">
        <CoreLayer class="bg-layer rounded">
          <CoreEditor v-if="isMounted && text" :model-value="text" :options="options" />
          <div v-if="attachments?.length" class="flex p-2" :class="{ 'justify-end': isHuman, 'justify-start': isAssistant }">
            <img v-for="attachment in attachments" :key="attachment.url" class="max-h-24 rounded" :src="attachment.url">
          </div>
        </CoreLayer>
      </div>
    </div>
    <p class="flex items-center gap-2 pl-2" :class="{ 'self-end': isHuman, 'self-start': isAssistant }">
      <small>{{ createdAt }}</small>
      <CoreMenu>
        <CoreMenuItem :layer="1" @click="copyMessage">
          <ClipboardIcon class="sq-5" />
          <span>Copy message</span>
        </CoreMenuItem>
      </CoreMenu>
    </p>
  </section>
</template>
