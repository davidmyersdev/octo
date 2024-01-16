import { openai } from 'vellma/integrations'
import { useChat } from 'vellma/models'
import {
  type StorageAdapter,
  type StorageBucketSchema,
  consoleLogger,
  useLogger,
  useStorage,
} from 'vellma/peripherals'

export const dexieStorage = (): StorageAdapter => {
  const { db } = useDatabase()

  const getTable = (bucketSchema: StorageBucketSchema) => {
    const table = db.table(bucketSchema.name)

    if (table) {
      return table
    }

    throw new Error(`Table ${bucketSchema.name} not found`)
  }

  return {
    bucket: async (bucketSchema) => {
      const table = getTable(bucketSchema)

      return {
        all: async () => {
          return await table.toCollection().toArray()
        },
        destroy: async (attributes: Record<string, unknown>) => {
          await table.where(attributes).delete()
        },
        find: async (attributes: Record<string, unknown>) => {
          return await table.where(attributes).limit(1).first()
        },
        save: async (attributes: { id: string } & Record<string, unknown>) => {
          if (await table.where({ id: attributes.id }).first()) {
            await table.update(attributes.id, attributes)
          } else {
            await table.add(attributes)
          }
        },
        where: async (attributes: Record<string, unknown>) => {
          return await table.where(attributes).toArray()
        },
      }
    },
  }
}

export const useAssistant = ({ chatId }: { chatId: Ref<string> }) => {
  const storageAdapter = dexieStorage()
  const apiKey = useLocalStorage<string>('openAiApiKey', '', {
    initOnMounted: true,
  })
  const logger = useLogger(consoleLogger())
  const storage = useStorage(storageAdapter)
  const peripherals = { logger, storage }
  const integration = computed(() => openai({ apiKey: apiKey.value, peripherals }))
  const chatInterface = computed(() => useChat({ chatId: chatId.value, integration: integration.value, model: 'gpt-4-1106-preview', peripherals }))
  const chatModel = computed(() => chatInterface.value.model)
  const chatFactory = computed(() => chatInterface.value.factory)

  return {
    apiKey,
    chatFactory,
    chatModel,
  }
}
