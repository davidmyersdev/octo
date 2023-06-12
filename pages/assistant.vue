<script lang="ts">
// @ts-expect-error No types yet.
import { type Message, messageFactory, useChat, useGlobals as withGlobals } from 'ellma'
import { CoreEditor, CoreScrollable } from '#components'

export default defineComponent({
  setup(_props) {
    const historyElement = ref<InstanceType<typeof CoreScrollable>>()
    const inputElement = ref<InstanceType<typeof CoreEditor>>()
    const input = ref('')
    const apiKey = useLocalStorage<string>('openAiApiKey', '')
    const isWaiting = ref(false)
    const messages = ref<Message[]>([])
    const chatModel = computed(() => useChat(withGlobals({
      integrations: {
        openai: {
          apiKey: apiKey.value,
        },
      },
    })))

    messages.value.forEach((message) => {
      chatModel.value.add(message)
    })

    const inputOptions = computed(() => {
      return {
        interface: {
          attribution: false,
          autocomplete: true,
          images: false,
          lists: false,
          readonly: isWaiting.value,
          spellcheck: false,
          toolbar: false,
        },
        readability: false,
      }
    })

    const onSend = async () => {
      inputElement.value?.focus()

      const humanMessage = messageFactory.human({ text: input.value })

      messages.value.push(humanMessage)
      input.value = ''

      const assistantMessage = await chatModel.value.generate(humanMessage)

      messages.value.push(assistantMessage)

      nextTick(() => {
        if (historyElement.value?.scrollable) {
          const { viewport } = historyElement.value.scrollable.elements()

          viewport.scrollTo({ top: viewport.scrollHeight })
        }
      })
    }

    return {
      apiKey,
      historyElement,
      input,
      inputElement,
      inputOptions,
      isWaiting,
      messages,
      onSend,
    }
  },
})
</script>

<template>
  <div class="flex flex-col flex-grow">
    <CoreScrollable ref="historyElement" class="flex-grow">
      <div class="flex flex-col flex-grow gap-4 m-auto max-w-prose p-2 w-full">
        <CoreInput v-model="apiKey" :layer="1" :private="true" description="To use this feature, you need an OpenAI API key. Your API key will be stored locally on your device." label="API Key" />
        <ChatMessage v-for="message in messages" :key="message.id" :role="message.role" :text="message.text" />
      </div>
    </CoreScrollable>
    <section class="bg-layer-1">
      <CoreDivider />
      <div class="m-auto max-w-prose p-2">
        <CoreScrollable class="bg-layer-0 rounded max-h-[10rem]">
          <div class="flex gap-2">
            <CoreEditor ref="inputElement" v-model="input" :options="inputOptions" />
            <CoreButton @click="onSend" :disabled="isWaiting || !apiKey" :layer="1" class="m-1 self-start sticky top-1">Send</CoreButton>
          </div>
        </CoreScrollable>
      </div>
    </section>
  </div>
</template>
