import Dexie, { type Table } from 'dexie'
import { type ChatData, type ChatMessageData, type EmbeddingData } from 'vellma/models'
import { type PackedDoc } from '/src/models/doc'
import { toIndexes } from '../../utils/toIndexes'

export type Chat = ChatData
export type ChatMessage = ChatMessageData
export type Embedding = EmbeddingData

export type LegacyPackedDoc = PackedDoc & {
  clientId?: string,
  dataKey?: string,
}

export type SystemInstruction = {
  id: string,
  description: string,
  text: string,
  createdAt: Date,
  updatedAt: Date,
}

export type Workspace = {
  id: string,
  name: string,
  tags: string[],
}

export type Settings = typeof defaultSettings

class LegacyAssistant extends Dexie {
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

class LegacyDocs extends Dexie {
  keyvaluepairs!: Table<LegacyPackedDoc>

  constructor() {
    super('firebase/documents')

    this.version(0.2).stores({
      keyvaluepairs: toIndexes(
        'id',
        'createdAt',
        'discardedAt',
        'touchedAt',
        'updatedAt',
      ),
    })
  }
}

class LegacySettings extends Dexie {
  keyvaluepairs!: Table<Settings>

  constructor() {
    super('settings')

    this.version(0.2).stores({
      keyvaluepairs: toIndexes(),
    })
  }
}

class LegacyWorkspaces extends Dexie {
  keyvaluepairs!: Table<Workspace>

  constructor() {
    super('contexts')

    this.version(0.3).stores({
      keyvaluepairs: toIndexes(
        '',
        'id',
        'name',
      ),
    })
  }
}

const legacyAssistant = new LegacyAssistant()
const legacyDocs = new LegacyDocs()
const legacySettings = new LegacySettings()
const legacyWorkspaces = new LegacyWorkspaces()

export const db = {
  chatMessages: legacyAssistant.chatMessages,
  chats: legacyAssistant.chats,
  docs: legacyDocs.keyvaluepairs,
  embeddings: legacyAssistant.embeddings,
  settings: legacySettings.keyvaluepairs,
  systemInstructions: legacyAssistant.systemInstructions,
  workspaces: legacyWorkspaces.keyvaluepairs,
  table: (name: string) => {
    if (name in legacyAssistant) {
      return legacyAssistant.table(name)
    }

    if (name in legacyDocs) {
      return legacyDocs.table(name)
    }

    if (name in legacySettings) {
      return legacySettings.table(name)
    }

    if (name in legacyWorkspaces) {
      return legacyWorkspaces.table(name)
    }
  },
}

export const defaultSettings = Object.freeze({
  crypto: {
    enabled: false,
    privateKey: undefined,
    publicKey: undefined,
  },
  editor: {
    images: {
      enabled: true,
      showCaptions: true,
    },
    keyMap: 'default',
    ligatures: true,
    lists: {
      enabled: true,
    },
    readability: {
      enabled: true,
      maxWidthInChars: 100,
      wordsPerMinute: 225,
    },
    spellcheck: true,
    tabSize: 2,
    toolbar: true,
  },
  experimental: false,
  loaded: false,
  theme: 'auto',
})
