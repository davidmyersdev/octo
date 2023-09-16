<script lang="ts">
export default defineComponent({
  setup() {
    const { chats } = useChats()
    const apiKey = useLocalStorage<string>('openAiApiKey', '')

    return {
      apiKey,
      chats,
    }
  },
})
</script>

<template>
  <article class="flex flex-col flex-grow">
    <div class="flex flex-col flex-grow gap-8 m-auto max-w-prose p-2 w-full">
      <CoreInput v-model="apiKey" :layer="1" :private="true" description="To use this feature, you need an OpenAI API key. Your API key will be stored locally on your device." label="API Key" />
      <div class="flex gap-2 items-center justify-end">
        <CoreButtonLink :counter="true" :layer="1" :to="{ path: '/assistant' }" class="flex gap-2 items-center">
          <span>New</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        </CoreButtonLink>
      </div>
      <div class="flex flex-col flex-grow gap-8">
        <AssistantHistoryChat v-for="chat in chats" :key="chat.id" :chat="chat" />
      </div>
    </div>
  </article>
</template>
