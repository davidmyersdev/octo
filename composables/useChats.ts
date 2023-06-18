import { type Chat } from '#root/helpers/database'

export const useChat = (id?: Ref<string>) => {
  const { db } = useDatabase()
  const { result: chat } = useQuery(() => db.chats.get(id?.value ?? ''))

  return {
    chat,
    addChat: (chat: Chat) => db.chats.add(chat),
    removeChat: (chatId: string) => db.chats.delete(chatId),
  }
}

export const useChatTools = () => {
  return {
    addChat: (chat: Chat) => db.chats.add(chat),
    removeChat: (chatId: string) => db.chats.delete(chatId),
  }
}

export const useChats = () => {
  const { db } = useDatabase()
  const { result: chats } = useQuery(() => db.chats.reverse().sortBy('createdAt'), [])

  return {
    chats,
    addChat: (chat: Chat) => db.chats.add(chat),
    removeChat: (chatId: string) => db.chats.delete(chatId),
  }
}
