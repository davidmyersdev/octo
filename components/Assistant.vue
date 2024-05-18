<script lang="ts">
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { StopIcon as TokenIcon } from '@heroicons/vue/24/solid'
import { type Options } from 'ink-mde'
import { nanoid } from 'nanoid'
import CoreLink from './CoreLink.vue'
import { type CoreEditor, type CoreScrollable } from '#components'
import CoreDivider from '#root/components/CoreDivider.vue'
import { type SystemInstruction, useSystemInstructions } from '#root/composables/useSystemInstructions'

export default defineComponent({
  components: {
    TokenIcon,
  },
  props: {
    chatId: {
      type: String,
    },
  },
  setup(props) {
    const { id } = useId()
    const { isDesktop, modKey } = useDevice()
    const chatId = computed(() => props.chatId || id())
    const { chatMessages } = useChatMessages({ chatId })
    const { addSystemInstruction, systemInstructions } = useSystemInstructions()
    const systemInstruction = ref<SystemInstruction>({
      id: '',
      description: '',
      text: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    const systemMessage = computed(() => chatMessages.value.filter((message) => message.role === 'system').at(0))
    const nonSystemMessages = computed(() => chatMessages.value.filter((message) => message.role !== 'system'))
    const { apiKey, chatFactory, chatModel, languageModel, languageModels } = useAssistant({ chatId })
    const historyElement = ref<InstanceType<typeof CoreScrollable>>()
    const inputElement = ref<InstanceType<typeof CoreEditor>>()
    const input = ref('')

    const isToBeSaved = ref(false)
    const isWaiting = ref(false)
    const isUserScrolling = ref(false)
    const showTryAgainMessage = ref(false)
    const lastKnownScrollTop = ref(0)

    watch(systemInstruction, () => {
      isToBeSaved.value = false
    })

    watch(chatMessages, () => {
      showTryAgainMessage.value = false

      if (!isUserScrolling.value) {
        scrollToBottom()
      }
    })

    const showBackToTop = computed(() => lastKnownScrollTop.value > 5)

    watch(historyElement, () => {
      if (historyElement.value?.scrollable) {
        const { viewport } = historyElement.value.scrollable.elements()

        historyElement.value.scrollable.on('scroll', () => {
          const { offsetHeight, scrollHeight, scrollTop } = viewport
          const maxScrollTop = scrollHeight - offsetHeight

          if (scrollTop < lastKnownScrollTop.value) {
            isUserScrolling.value = true
          }

          // Allow a small margin of error.
          if (lastKnownScrollTop.value < scrollTop && scrollTop >= (maxScrollTop - 5)) {
            isUserScrolling.value = false
          }

          lastKnownScrollTop.value = scrollTop
        })
      }
    })

    onMounted(() => {
      setTimeout(() => {
        if (chatMessages.value.at(-1)?.role === 'human') {
          showTryAgainMessage.value = true
        }
      }, 1000)
    })

    const inputOptions = computed<Options>(() => {
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
        plugins: [
          {
            type: 'default',
            value: Prec.high(
              keymap.of([
                {
                  key: 'Mod-Enter',
                  run: () => {
                    onSend()

                    return true
                  },
                },
              ]),
            ),
          },
        ],
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

    const scrollToTop = () => {
      isUserScrolling.value = true

      nextTick(() => {
        if (historyElement.value?.scrollable) {
          const { viewport } = historyElement.value.scrollable.elements()

          viewport.scrollTo({ top: 0 })
        }
      })
    }

    const tryAgain = async () => {
      showTryAgainMessage.value = false

      // Do not try again if the last message was from the assistant.
      if (chatMessages.value.at(-1)?.role === 'assistant') return

      try {
        isWaiting.value = true

        for await (const _value of chatModel.value.generate()) {
          // no-op
        }
      } catch (error) {
        console.error(error)
        showTryAgainMessage.value = true
      }

      isWaiting.value = false
    }

    const clearSystemInstruction = () => {
      systemInstruction.value = {
        id: '',
        description: '',
        text: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }

    const onSend = async () => {
      inputElement.value?.focus()
      isUserScrolling.value = false

      const messages = []

      if (isToBeSaved.value && systemInstruction.value.description && systemInstruction.value.text) {
        const now = new Date()

        await addSystemInstruction({
          id: nanoid(),
          description: systemInstruction.value.description,
          text: systemInstruction.value.text,
          createdAt: now,
          updatedAt: now,
        })
      }

      if (systemInstruction.value.text && chatMessages.value.length === 0) {
        messages.push(chatFactory.value.system({ text: systemInstruction.value.text }))
      }

      if (input.value) {
        messages.push(chatFactory.value.human({ text: input.value }))
      }

      input.value = ''

      if (!messages.length) return

      try {
        isWaiting.value = true

        for await (const _value of chatModel.value.generate(...messages)) {
          // no-op
        }
      } catch (error) {
        console.error(error)
        showTryAgainMessage.value = true
      }

      isWaiting.value = false
    }

    const examplePrompts = ref([
      'Explain the scientific method in easy-to-understand terms.',
      'Write a motivational letter to someone who is feeling down.',
    ])

    const choosePrompt = (prompt: string) => {
      input.value = prompt

      nextTick(() => {
        inputElement.value?.focus({ at: 'end' })
      })
    }

    return {
      CoreDivider,
      CoreLink,
      apiKey,
      chatMessages,
      choosePrompt,
      clearSystemInstruction,
      examplePrompts,
      historyElement,
      input,
      inputElement,
      inputOptions,
      isDesktop,
      isToBeSaved,
      isWaiting,
      languageModel,
      languageModels,
      modKey,
      nonSystemMessages,
      onSend,
      scrollToTop,
      showBackToTop,
      showTryAgainMessage,
      systemInstruction,
      systemInstructions,
      systemMessage,
      tryAgain,
    }
  },
})
</script>

<template>
  <div class="flex flex-col flex-grow min-h-0">
    <div class="flex flex-col flex-grow flex-shrink min-h-0 relative">
      <CoreScrollable ref="historyElement" class="flex-grow flex-shrink min-h-0">
        <div class="flex flex-col flex-grow gap-4 m-auto max-w-prose p-2 w-full">
          <CoreInput v-model="apiKey" :layer="1" :private="true" description="To use this feature, you need an OpenAI API key. Your API key will be stored locally on your device." label="API Key" />
          <CoreLayer>
            <CoreFormControlLayout>
              <CoreFormControlGroup>
                <CoreListbox v-model="languageModel" :items="languageModels">
                  <CoreListboxButton class="bg-layer w-full">
                    <div class="md:hidden" />
                    <div class="flex items-center justify-center gap-3">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" /></svg>
                      <span>{{ languageModel.label }}</span>
                    </div>
                  </CoreListboxButton>
                  <CoreListboxOptions class="z-20 bg-layer">
                    <div class="flex gap-0.5 items-center p-2 text-layer-muted mb-2">
                      <TokenIcon class="sq-4" />
                      <small>Total Context Size (in Tokens)</small>
                    </div>
                    <div class="grid auto-rows-auto auto-cols-auto">
                      <CoreListboxOption
                        v-for="model in languageModels"
                        :id="model.id"
                        :key="model.id"
                        class="grid grid-cols-subgrid col-span-2 gap-4"
                        :disabled="model.disabled"
                        :label="model.label"
                        :layer="1"
                        :value="model"
                      >
                        <span class="flex items-center justify-start gap-2 col-start-1">
                          <svg class="sq-5" fill="currentColor" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" /></svg>
                          <span>{{ model.label }}</span>
                          <small v-if="model.comingSoon" class="text-primary border border-current rounded px-1">Coming Soon!</small>
                        </span>

                        <span class="flex items-center justify-start gap-4 col-start-2">
                          <small class="text-xs text-layer-muted flex items-center gap-0.5">
                            <TokenIcon class="sq-4" />
                            {{ model.contextWindow }}
                          </small>
                        </span>
                      </CoreListboxOption>
                    </div>
                  </CoreListboxOptions>
                </CoreListbox>
              </CoreFormControlGroup>
              <CoreFormControlGroup>
                <CoreButtonLink :to="{ path: '/assistant/conversations' }" class="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                  <span>History</span>
                </CoreButtonLink>
                <CoreButtonLink :counter="true" :to="{ path: '/assistant' }" class="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  <span>New</span>
                </CoreButtonLink>
              </CoreFormControlGroup>
            </CoreFormControlLayout>
          </CoreLayer>
          <CoreLayer v-if="!chatMessages.length || systemMessage?.text" class="flex items-center justify-center">
            <CoreListbox v-model="systemInstruction" :items="systemInstructions" :disabled="!!chatMessages.length">
              <CoreListboxButton>
                <span>System Instructions</span>
              </CoreListboxButton>
              <CoreListboxOptions class="z-20 bg-layer flex flex-col gap-1 p-1">
                <template v-if="systemInstructions.length">
                  <CoreButton class="justify-start" @click="clearSystemInstruction">
                    <div>Clear System Instructions</div>
                  </CoreButton>
                  <CoreDivider />
                  <CoreListboxOption
                    v-for="instruction in systemInstructions"
                    :id="instruction.id"
                    :key="instruction.id"
                    :label="instruction.description"
                    :layer="1"
                    :value="instruction"
                  >
                    <span class="flex items-center justify-start gap-2 col-start-1">
                      <svg class="sq-5" fill="currentColor" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" /></svg>
                      <span>{{ instruction.description }}</span>
                    </span>
                  </CoreListboxOption>
                </template>
                <div v-else class="p-2"><em class="whitespace-nowrap">No Saved System Instructions</em></div>
              </CoreListboxOptions>
            </CoreListbox>
          </CoreLayer>
          <div v-if="!chatMessages.length || systemMessage?.text" class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <div>
                <CoreSwitch
                  v-if="!systemInstruction.id && !chatMessages.length"
                  v-model="isToBeSaved"
                  label="Save Instructions"
                />
              </div>
              <CoreInput
                v-if="isToBeSaved || systemInstruction.id"
                v-model="systemInstruction.description"
                description="Give your instruction a name or description to reuse it in another conversation."
                :disabled="!!systemInstruction.id"
                placeholder="Rubber duck debugging partner"
              />
              <div class="flex flex-col gap-1">
                <div class="rounded border border-layer">
                  <AssistantEditor
                    v-if="!chatMessages.length"
                    v-model="systemInstruction.text"
                    placeholder="You are a rubber duck debugging partner. When I explain ideas to you, reflect them back to me in different ways and ask me to explain things you do not fully understand."
                    @mod-enter="onSend"
                  />
                  <AssistantEditor v-else :model-value="systemMessage?.text" :layer="0" :readonly="true" />
                </div>
                <small class="text-layer-muted">The model can be instructed to behave in a certain way, such as adopting a persona.</small>
              </div>
            </div>
          </div>
          <template v-if="chatMessages.length">
            <AssistantChatMessage v-for="message in nonSystemMessages" :key="message.id" :created-at="message.createdAt" :role="message.role" :text="message.text" />
            <div class="h-4" />
          </template>
          <div v-else class="flex flex-col flex-grow gap-4 justify-end">
            <div class="text-center">
              <p>
                Try asking me to...
              </p>
            </div>
            <CoreButton
              v-for="examplePrompt in examplePrompts"
              :key="examplePrompt"
              :layer="0"
              class="border border-layer text-left md:text-center whitespace-normal"
              @click="choosePrompt(examplePrompt)"
            >
              <p class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                </svg>
                <span>{{ examplePrompt }}</span>
              </p>
            </CoreButton>
          </div>
        </div>
      </CoreScrollable>
      <CoreLayer class="absolute right-4 bottom-4">
        <CoreButton v-if="showBackToTop" class="p-2 bg-layer" @click="scrollToTop">
          <AssetArrowUp class="w-4" />
        </CoreButton>
      </CoreLayer>
    </div>
    <CoreLayer as="section" class="bg-layer">
      <CoreDivider />
      <div class="flex flex-col gap-1 m-auto max-w-prose p-2">
        <p v-if="showTryAgainMessage" class="text-red-500">
          <small class="inline-flex gap-1 items-center">An error occurred while communicating with the assistant during your previous request.</small>
        </p>
        <CoreLayer down>
          <CoreScrollable class="bg-layer rounded max-h-[40vh]">
            <div class="flex gap-2">
              <CoreEditor ref="inputElement" v-model="input" :layer="0" :options="inputOptions" />
              <CoreLayer v-if="apiKey">
                <CoreButton v-if="showTryAgainMessage" class="m-1 self-start sticky top-1" @click="tryAgain">
                  Try again
                </CoreButton>
                <CoreButton v-else :disabled="isWaiting || (!input && !systemInstruction.text)" class="m-1 self-start sticky top-1" @click="onSend">
                  <span v-if="isWaiting">
                    Waiting for a reply...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    <span>Send</span>
                    <span v-if="isDesktop" class="hidden md:flex text-layer-muted text-opacity-[inherit]">
                      <Key>{{ modKey }}</Key>
                      <Key>⏎</Key>
                    </span>
                  </span>
                </CoreButton>
              </CoreLayer>
            </div>
          </CoreScrollable>
        </CoreLayer>
      </div>
    </CoreLayer>
  </div>
</template>
