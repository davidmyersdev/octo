import { type ChatMessage } from '/src/databases/assistant'

export const useChatMessage = (id?: Ref<string>) => {
  const { db } = useDatabase()
  const { result: chatMessage } = useQuery(() => db.chatMessages.get(id?.value ?? ''))

  return {
    addChatMessage: (chatMessage: ChatMessage) => db.chatMessages.add(chatMessage),
    chatMessage,
  }
}

export const useChatMessages = ({ chatId }: { chatId: Ref<string> }) => {
  const { db } = useDatabase()
  const { result: chatMessages } = useQuery(() => db.chatMessages.where({ chatId: chatId.value }).sortBy('createdAt'), [])

  return {
    addChatMessage: (chatMessage: ChatMessage) => db.chatMessages.add(chatMessage),
    chatMessages,
  }
}
