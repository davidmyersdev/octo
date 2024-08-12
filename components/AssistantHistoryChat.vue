<script lang="ts">
import { type Chat } from '/src/databases/assistant'

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
    <CoreLink :to="{ path: `/assistant/conversations/${chat.id}` }" class="bg-layer flex flex-col gap-2 p-2 relative rounded">
      <AssistantHistoryChatMessage
        v-for="chatMessage in chatMessages.slice(0, 2)"
        :key="chatMessage.id"
        :chat-message="chatMessage"
      />
      <CoreDivider />
      <div class="flex items-center justify-between">
        <div class="flex items-center text-layer-muted">
          <small>{{ chatMessages.length }} messages</small>
        </div>
        <CoreMenu>
          <CoreMenuItem :layer="2" @click="discard">
            <Icon name="Trash" />
            <span>Discard</span>
          </CoreMenuItem>
        </CoreMenu>
      </div>
    </CoreLink>
    <p class="flex justify-end px-2">
      <small>{{ createdAt }}</small>
    </p>
  </section>
</template>
