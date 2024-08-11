<script lang="ts">
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { type Options } from 'ink-mde'
import { nanoid } from 'nanoid'
import CoreLink from './CoreLink.vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import type CoreEditor from '/components/CoreEditor.vue'
import type CoreScrollable from '/components/CoreScrollable.vue'
import { type SystemInstruction, useSystemInstructions } from '#root/composables/useSystemInstructions'

export default defineComponent({
  props: {
    chatId: {
      type: String,
    },
  },
  setup(props) {
    const { id } = useId()
    const { isDesktop, modKey } = useDevice()
    const chatId = computed(() => props.chatId || id())
    // Todo: Update types for `ChatMessage` in vellma...
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

      if (input.value || files.value.length > 0) {
        const attachments = files.value.map((file) => ({ type: 'image', url: file.dataUrl }))

        messages.push(chatFactory.value.human({
          attachments,
          text: input.value,
        }))
      }

      input.value = ''
      files.value = []

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

    const files = ref<{ name: string, blob: File, dataUrl: string }[]>([])

    const addFiles = async (event: Event) => {
      if (event.target && 'files' in event.target && event.target.files) {
        files.value = []

        for (const blob of Array.from(event.target.files as FileList)) {
          files.value.push({
            blob,
            dataUrl: await toDataUrl(blob),
            name: blob.name,
          })
        }
      }
    }

    const isAllowedToSend = computed(() => !!input.value || !!files.value.length || !!systemInstruction.value.text)

    const toFileUrl = (file: File) => {
      return URL.createObjectURL(file)
    }

    const toDataUrl = async (file: File) => {
      const fileReader = new FileReader()

      return new Promise<string>((resolve, reject) => {
        fileReader.onload = () => {
          resolve(fileReader.result as string)
        }

        fileReader.onerror = reject

        fileReader.readAsDataURL(file)
      })
    }

    return {
      CoreDivider,
      CoreLink,
      addFiles,
      apiKey,
      chatMessages,
      choosePrompt,
      clearSystemInstruction,
      examplePrompts,
      files,
      historyElement,
      input,
      inputElement,
      inputOptions,
      isAllowedToSend,
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
      toFileUrl,
      tryAgain,
    }
  },
})
</script>

<template>
  <div class="flex flex-col flex-grow min-h-0">
    <div class="flex flex-col flex-grow flex-shrink min-h-0 relative">
      <CoreScrollable ref="historyElement" v-slot="{ element }" class="flex-grow flex-shrink min-h-0">
        <div :ref="element" class="flex flex-col flex-grow gap-4 m-auto max-w-prose p-2 w-full">
          <CoreInput v-model="apiKey" :layer="1" :private="true" description="To use this feature, you need an OpenAI API key. Your API key will be stored locally on your device." label="API Key" />
          <CoreLayer>
            <CoreFormControlLayout>
              <CoreFormControlGroup>
                <CoreListbox v-model="languageModel" :items="languageModels">
                  <CoreListboxButton class="bg-layer w-full">
                    <div class="md:hidden" />
                    <div class="flex items-center justify-center gap-3">
                      <Icon name="BrandOpenAI" />
                      <span>{{ languageModel.label }}</span>
                    </div>
                  </CoreListboxButton>
                  <CoreListboxOptions class="z-20 bg-layer">
                    <div class="flex gap-0.5 items-center p-2 text-layer-muted mb-2">
                      <Icon name="ContextSize" />
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
                          <Icon name="BrandOpenAI" />
                          <span>{{ model.label }}</span>
                          <small v-if="model.comingSoon" class="text-primary border border-current rounded px-1">Coming Soon!</small>
                        </span>

                        <span class="flex items-center justify-start gap-4 col-start-2">
                          <small class="text-xs text-layer-muted flex items-center gap-0.5">
                            <Icon name="ContextSize" />
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
                  <Icon name="Message" />
                  <span>History</span>
                </CoreButtonLink>
                <CoreButtonLink :counter="true" :to="{ path: '/assistant' }" class="flex gap-2 items-center">
                  <Icon name="MessagePlus" />
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
                    <span class="flex items-center justify-start gap-2 col-start-1 min-w-full">
                      <Icon name="Instruction" />
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
            <AssistantChatMessage
              v-for="message in nonSystemMessages"
              :key="message.id"
              :created-at="message.createdAt"
              :role="message.role"
              :text="message.text"
              :attachments="message.attachments"
            />
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
                <Icon name="Sparkles" />
                <span>{{ examplePrompt }}</span>
              </p>
            </CoreButton>
          </div>
        </div>
      </CoreScrollable>
      <CoreLayer class="absolute right-4 bottom-4">
        <CoreButton v-if="showBackToTop" class="p-2 bg-layer" @click="scrollToTop">
          <Icon name="ArrowUp" />
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
          <CoreScrollable v-slot="{ element }" class="bg-layer rounded max-h-[40vh]">
            <div :ref="element">
              <div class="flex gap-2">
                <CoreEditor ref="inputElement" v-model="input" :layer="0" :options="inputOptions" />
                <CoreLayer v-if="apiKey" class="m-1 self-start sticky top-1">
                  <CoreButton v-if="showTryAgainMessage" @click="tryAgain">
                    Try again
                  </CoreButton>
                  <div v-else class="flex gap-1">
                    <CoreButton :disabled="isWaiting || !isAllowedToSend" @click="onSend">
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
                    <CoreButton as="label" title="Attach images">
                      <Icon name="ImagePlus" />
                      <input class="hidden" type="file" accept="image/*" multiple @change="addFiles">
                    </CoreButton>
                  </div>
                </CoreLayer>
              </div>
              <div v-if="files.length" class="flex flex-wrap gap-1 p-1">
                <div v-for="file in files" :key="file.name" class="relative border border-layer flex items-center justify-center sq-12 rounded overflow-hidden">
                  <img class="h-min w-min object-cover" :src="file.dataUrl" :alt="file.name" :title="file.name">
                </div>
              </div>
            </div>
          </CoreScrollable>
        </CoreLayer>
      </div>
    </CoreLayer>
  </div>
</template>
