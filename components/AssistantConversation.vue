<script lang="ts">
import { type Chat } from '#helpers/database'

export default defineComponent({
  props: {
    chat: {
      required: true,
      type: Object as PropType<Chat>,
    },
  },
  setup(props) {
    const chatId = computed(() => props.chat.id)
    const { chatMessages } = useChatMessages({ chatId })
    const humanMessage = computed(() => chatMessages.value.find(message => message.role === 'human'))
    const assistantMessage = computed(() => chatMessages.value.find(message => message.role === 'assistant'))
    const { humanTime } = useTime()
    const createdAt = computed(() => humanTime(props.chat.createdAt))
    const { removeChat } = useChatTools()

    const discard = () => {
      removeChat(chatId.value)
    }

    return {
      assistantMessage,
      createdAt,
      discard,
      humanMessage,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-1">
    <CoreLink :to="{ path: `/assistant/conversations/${chat.id}` }" class="bg-layer-1 flex flex-col gap-2 p-2 relative rounded">
      <CoreButton @click.prevent.stop="discard" :layer="1" class="absolute top-2 right-2">
        <AssetTrash class="h-5 w-5 text-red-500" />
      </CoreButton>
      <span class="flex flex-col self-start">
        <small class="self-start text-gray-500">You</small>
        <span>{{ humanMessage?.text }}</span>
      </span>
      <span class="flex flex-col self-end">
        <small class="self-end text-gray-500">Assistant</small>
        <span>{{ assistantMessage?.text }}</span>
      </span>
    </CoreLink>
    <p class="flex justify-end px-2"><small>{{ createdAt }}</small></p>
  </section>
</template>
