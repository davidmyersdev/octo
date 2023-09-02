<script lang="ts">
export default defineComponent({
  setup() {
    const { id } = useId()
    const router = useRouter()
    const { isHydrated, isMounted } = useHooks()
    const chatIdFromRoute = computed(() => router.currentRoute.value.params.id as string)
    const chatId = computed(() => chatIdFromRoute.value || id())
    const { chat } = useChat(chatId)
    const { pushRoute } = useSoftNavigation()

    watch(chat, () => {
      if (chat.value && !chatIdFromRoute.value) {
        pushRoute({
          path: `/assistant/conversations/${chatId.value}`,
        })
      }
    })

    return {
      chatId,
      isHydrated,
      isMounted,
    }
  },
})
</script>

<template>
  <article class="flex flex-col flex-grow">
    <Assistant v-if="isMounted && isHydrated" :chat-id="chatId" />
  </article>
</template>
