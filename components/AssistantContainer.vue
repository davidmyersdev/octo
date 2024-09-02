<script lang="ts">
import { useVue } from '#shared/composables'

export default defineComponent({
  setup() {
    const { id } = useId()
    const router = useRouter()
    const { isMounted } = useVue()
    const chatIdFromRoute = computed(() => router.currentRoute.value.params.id as string)
    const chatId = computed(() => chatIdFromRoute.value || id())

    return {
      chatId,
      isMounted,
    }
  },
})
</script>

<template>
  <article class="flex flex-col flex-grow">
    <Assistant v-if="isMounted" :chat-id="chatId" @send="$router.push({ path: `/assistant/conversations/${chatId}` })" />
  </article>
</template>
