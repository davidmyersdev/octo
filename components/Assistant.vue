<script lang="ts">
import { openai } from 'vellma/integrations'
import { useChat } from 'vellma/models'
import { consoleLogger, useLogger } from 'vellma/peripherals'
import { CoreEditor, CoreScrollable } from '#components'
import { type ChatMessage } from '#helpers/database'

export default defineComponent({
  emits: ['message'],
  props: {
    messages: {
      type: Array as PropType<ChatMessage[]>,
      default: () => ([]),
    },
  },
  setup(props, { emit }) {
    const { lazyWritableComputed } = useHooks()
    const logger = useLogger(consoleLogger())
    const peripherals = { logger }
    const historyElement = ref<InstanceType<typeof CoreScrollable>>()
    const inputElement = ref<InstanceType<typeof CoreEditor>>()
    const input = ref('')
    const actualApiKey = useLocalStorage<string>('openAiApiKey', '')
    const apiKey = lazyWritableComputed(() => actualApiKey.value, (val) => actualApiKey.value = val, '')
    const integration = computed(() => openai({ apiKey: apiKey.value, peripherals }))
    const chatModel = computed(() => useChat({ integration: integration.value, peripherals }))
    const model = computed(() => chatModel.value.model)
    const factory = computed(() => chatModel.value.factory)

    const isWaiting = ref(false)
    const showTryAgainMessage = ref(false)

    // Todo: Add memory adapter for reactive vue state.
    model.value.hydrate(props.messages)

    watch(() => props.messages, () => {
      showTryAgainMessage.value = false

      model.value.hydrate(props.messages)

      scrollToBottom()
    })

    onMounted(() => {
      setTimeout(() => {
        if (props.messages.at(-1)?.role === 'human') {
          showTryAgainMessage.value = true
        }
      }, 1000)
    })

    const inputOptions = computed(() => {
      return {
        interface: {
          attribution: false,
          autocomplete: true,
          images: false,
          lists: false,
          readonly: isWaiting.value || showTryAgainMessage.value,
          spellcheck: false,
          toolbar: false,
        },
        readability: false,
      }
    })

    const scrollToBottom = () => {
      nextTick(() => {
        if (historyElement.value?.scrollable) {
          const { viewport } = historyElement.value.scrollable.elements()

          viewport.scrollTo({ top: viewport.scrollHeight })
        }
      })
    }

    const tryAgain = async () => {
      showTryAgainMessage.value = false

      // Do not try again if the last message was from the assistant.
      if (props.messages.at(-1)?.role === 'assistant') { return }

      try {
        isWaiting.value = true

        const assistantMessage = await model.value.generate()

        emit('message', assistantMessage)
      } catch (error) {
        console.error(error)
        showTryAgainMessage.value = true
      }

      isWaiting.value = false
    }

    const onSend = async () => {
      inputElement.value?.focus()

      const humanMessage = factory.value.human({ text: input.value })

      emit('message', humanMessage)
      input.value = ''

      try {
        isWaiting.value = true

        const assistantMessage = await model.value.generate(humanMessage)

        emit('message', assistantMessage)
      } catch (error) {
        console.error(error)
        showTryAgainMessage.value = true
      }

      isWaiting.value = false
    }

    return {
      apiKey,
      historyElement,
      input,
      inputElement,
      inputOptions,
      isWaiting,
      onSend,
      showTryAgainMessage,
      tryAgain,
    }
  },
})
</script>

<template>
  <div class="flex flex-col flex-grow flex-shrink min-h-0">
    <CoreScrollable ref="historyElement" class="flex-grow flex-shrink min-h-0">
      <div class="flex flex-col flex-grow gap-4 m-auto max-w-prose p-2 w-full">
        <CoreInput v-model="apiKey" :layer="1" :private="true" description="To use this feature, you need an OpenAI API key. Your API key will be stored locally on your device." label="API Key" />
        <div class="flex gap-2 items-center justify-end">
          <CoreButtonLink :layer="1" :to="{ path: '/assistant/conversations' }" class="flex gap-2 items-center">
            <span>History</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </CoreButtonLink>
          <CoreButtonLink :counter="true" :layer="1" :to="{ path: '/assistant' }" class="flex gap-2 items-center">
            <span>New</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </CoreButtonLink>
        </div>
        <ChatMessage v-for="message in messages" :key="message.id" :created-at="message.createdAt" :role="message.role" :text="message.text" />
      </div>
    </CoreScrollable>
    <section class="bg-layer-1">
      <CoreDivider />
      <div class="flex flex-col gap-1 m-auto max-w-prose p-2">
        <p v-if="showTryAgainMessage" class="text-red-500">
          <small class="inline-flex gap-1 items-center">An error occurred while communicating with the assistant during your previous request.</small>
        </p>
        <CoreScrollable class="bg-layer-0 rounded max-h-[10rem]">
          <div class="flex gap-2">
            <CoreEditor :layer="0" ref="inputElement" v-model="input" :options="inputOptions" />
            <div v-if="apiKey">
              <CoreButton v-if="showTryAgainMessage" :layer="1" @click="tryAgain" class="m-1 self-start sticky top-1">Try again</CoreButton>
              <CoreButton v-else @click="onSend" :disabled="isWaiting" :layer="1" class="m-1 self-start sticky top-1">{{ isWaiting ? 'Waiting for a reply...' : 'Send' }}</CoreButton>
            </div>
          </div>
        </CoreScrollable>
      </div>
    </section>
  </div>
</template>
