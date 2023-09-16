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
    const { humanTime } = useTime()
    const createdAt = computed(() => humanTime(props.chat.createdAt))
    const { removeChat } = useChatTools()

    const discard = () => {
      removeChat(chatId.value)
    }

    return {
      chatMessages,
      createdAt,
      discard,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-1">
    <CoreLink :to="{ path: `/assistant/conversations/${chat.id}` }" class="bg-layer-1 flex flex-col gap-2 p-2 relative rounded">
      <AssistantHistoryChatMessage
        v-for="chatMessage in chatMessages.slice(0, 2)"
        :key="chatMessage.id"
        :chat-message="chatMessage"
      />
      <CoreDivider :layer="1" />
      <div class="flex items-center justify-between">
        <div class="flex items-center text-gray-500">
          <small>{{ chatMessages.length }} messages</small>
        </div>
        <CoreButton :layer="1" @click.prevent.stop="discard">
          <AssetTrash class="w-5 h-5 text-red-500" />
        </CoreButton>
      </div>
    </CoreLink>
    <p class="flex justify-end px-2">
      <small>{{ createdAt }}</small>
    </p>
  </section>
</template>
