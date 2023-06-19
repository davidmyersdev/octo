<script lang="ts">
export default defineComponent({
  setup() {
    const { id } = useId()
    const { now } = useTime()
    const router = useRouter()
    const chatIdFromRoute = computed(() => router.currentRoute.value.params.id as string)
    const chatId = computed(() => chatIdFromRoute.value || id())
    const { addChat, chat } = useChat(chatId)
    const { addChatMessage, chatMessages } = useChatMessages({ chatId })
    const { pushRoute } = useSoftNavigation()

    const onMessage = async (message: object) => {
      const timestamp = now()

      if (!chat.value) {
        await addChat({ id: chatId.value, createdAt: timestamp })
      }

      await addChatMessage({ ...message, chatId: chatId.value, createdAt: timestamp })

      if (!chatIdFromRoute.value) {
        pushRoute({
          path: `/assistant/conversations/${chatId.value}`,
        })
      }
    }

    // Todo: Merge Assistant.vue into this one.

    return {
      chatId,
      chatIdFromRoute,
      chat,
      chatMessages,
      onMessage,
    }
  },
})
</script>

<template>
  <article class="flex flex-col flex-grow">
    <Assistant :messages="chatMessages" @message="onMessage" />
  </article>
</template>
