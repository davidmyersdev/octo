import Dexie, { type Table } from 'dexie'
import { type ChatData, type ChatMessageData, type EmbeddingData } from 'vellma/models'

export type Chat = ChatData
export type ChatMessage = ChatMessageData
export type Embedding = EmbeddingData
export type SystemInstruction = {
  id: string,
  description: string,
  text: string,
  createdAt: Date,
  updatedAt: Date,
}

class Assistant extends Dexie {
  chats!: Table<Chat>
  chatMessages!: Table<ChatMessage>
  embeddings!: Table<Embedding>
  systemInstructions!: Table<SystemInstruction>

  constructor() {
    super('octo')

    // Keys specified in each store are indexed. Other keys are still allowed.
    this.version(3).stores({
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
      systemInstructions: [
        '++id', // primary key
        'description',
        'text',
        'createdAt',
        'updatedAt',
      ].join(','),
    })
  }
}

export const assistant = new Assistant()
