import Dexie, { type Table } from 'dexie'

export interface Chat {
  id: string,
  createdAt: Date,
}

export interface ChatMessage {
  id: string,
  chatId: string,
  createdAt: Date,
  role: 'assistant' | 'human' | 'system',
  text: string,
}

export const DatabaseName = 'octo'

export class OctoDatabase extends Dexie {
  chats!: Table<Chat>
  chatMessages!: Table<ChatMessage>

  constructor() {
    super(DatabaseName)

    this.version(1).stores({
      chats: [
        '++id', // primary key
        'createdAt',
      ].join(','),
      chatMessages: [
        '++id', // primary key
        'chatId', // foreign key
        'createdAt',
        'role',
        'text',
      ].join(','),
    })
  }
}

export const db = new OctoDatabase()
