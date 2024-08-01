<script lang="ts">
import { isNotNullish } from '#root/src/utils/objects'

export default defineComponent({
  setup() {
    const { chats: allChats } = useChats()
    const apiKey = useLocalStorage<string>('openAiApiKey', '')
    const { db } = useDatabase()
    const { result: chatMessages } = useQuery(() => db.chatMessages.toArray(), [])
    const { searchQuery, searchResults } = useSearch(chatMessages, { keys: ['text'] })
    const chatIdResults = computed(() => searchResults.value.map((result) => result.chatId))
    const chatIds = computed(() => Array.from(new Set(chatIdResults.value)))
    const filteredChats = computed(() => {
      // Todo: There are sometimes undefined values. This might be due to leftover messages that point to deleted chats.
      return chatIds.value
        .map(chatId => allChats.value.find(chat => chat.id === chatId))
        .filter(isNotNullish)
    })
    const chats = computed(() => searchQuery.value ? filteredChats.value : allChats.value)

    return {
      apiKey,
      chatIds,
      chats,
      searchQuery,
      searchResults,
    }
  },
})
</script>

<template>
  <article class="flex flex-col flex-grow">
    <div class="flex flex-col flex-grow gap-8 m-auto max-w-prose p-2 w-full">
      <CoreInput
        v-model="searchQuery"
        description="Supports /regex/i and fuzzy-matching."
        label="Search"
        placeholder="Start typing to filter results..."
      />
      <CoreLayer class="flex gap-2 items-center justify-end">
        <CoreButtonLink :counter="true" :to="{ path: '/assistant' }" class="flex gap-2 items-center">
          <span>New</span>
          <Icon name="MessagePlus" />
        </CoreButtonLink>
      </CoreLayer>
      <CoreLayer class="flex flex-col flex-grow gap-8">
        <AssistantHistoryChat v-for="chat in chats" :key="chat.id" :chat="chat" />
      </CoreLayer>
    </div>
  </article>
</template>
