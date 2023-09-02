import Dexie, { type Table } from 'dexie'
import { type ChatData, type ChatMessageData, type EmbeddingData } from 'vellma/models'

export type Chat = ChatData
export type ChatMessage = ChatMessageData
export type Embedding = EmbeddingData

export const dbName = 'octo'

export class OctoDatabase extends Dexie {
  chats!: Table<Chat>
  chatMessages!: Table<ChatMessage>
  embeddings!: Table<Embedding>

  constructor() {
    super(dbName)

    // Keys specified in each store are indexed. Other keys are still allowed.
    this.version(2).stores({
      chats: [
        '++id', // primary key
        'createdAt',
        'updatedAt',
      ].join(','),
      chatMessages: [
        '++id', // primary key
        'chatId', // foreign key
        'role',
        'text',
        'createdAt',
        'updatedAt',
      ].join(','),
      embeddings: [
        '++id', // primary key
        'hash',
        'createdAt',
        'updatedAt',
      ].join(','),
    })
  }
}

export const db = new OctoDatabase()
