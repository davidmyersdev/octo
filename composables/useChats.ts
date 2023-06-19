import { type Chat } from '#root/helpers/database'

export const useChat = (id?: Ref<string>) => {
  const { db } = useDatabase()
  const { result: chat } = useQuery(() => db.chats.get(id?.value ?? ''))
  const { addChat, removeChat } = useChatTools()

  return {
    chat,
    addChat,
    removeChat,
  }
}

export const useChatTools = () => {
  const { db } = useDatabase()

  return {
    addChat: (chat: Chat) => db.chats.add(chat),
    removeChat: (chatId: string) => db.chats.delete(chatId),
  }
}

export const useChats = () => {
  const { db } = useDatabase()
  const { result: chats } = useQuery(() => db.chats.reverse().sortBy('createdAt'), [])
  const { addChat, removeChat } = useChatTools()

  return {
    chats,
    addChat,
    removeChat,
  }
}
