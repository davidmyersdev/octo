import { openai } from 'vellma/integrations'
import { useChat } from 'vellma/models'
import {
  type StorageAdapter,
  type StorageBucketSchema,
  consoleLogger,
  useLogger,
  useStorage,
} from 'vellma/peripherals'

type ModelOption = {
  id: string,
  label: string,
  contextWindow: string,
  comingSoon?: boolean,
  disabled?: boolean,
  url?: string,
}

const defaultLanguageModels: ModelOption[] = [
  {
    id: 'gpt-5',
    label: 'GPT-5',
    contextWindow: '400k',
    url: 'https://platform.openai.com/docs/models/gpt-5',
  },
  {
    id: 'gpt-5-mini',
    label: 'GPT-5 Mini',
    contextWindow: '400k',
    url: 'https://platform.openai.com/docs/models/gpt-5-mini',
  },
  {
    id: 'gpt-5-nano',
    label: 'GPT-5 Nano',
    contextWindow: '400k',
    url: 'https://platform.openai.com/docs/models/gpt-5-nano',
  },
  {
    id: 'gpt-5-chat-latest',
    label: 'GPT-5 Chat',
    contextWindow: '400k',
    url: 'https://platform.openai.com/docs/models/gpt-5-chat-latest',
  },
  {
    id: 'gpt-4.1',
    label: 'GPT-4.1',
    contextWindow: '1m',
    url: 'https://platform.openai.com/docs/models/gpt-4.1',
  },
  {
    id: 'gpt-4.1-mini',
    label: 'GPT-4.1 Mini',
    contextWindow: '1m',
    url: 'https://platform.openai.com/docs/models/gpt-4.1-mini',
  },
  {
    id: 'gpt-4.1-nano',
    label: 'GPT-4.1 Nano',
    contextWindow: '1m',
    url: 'https://platform.openai.com/docs/models/gpt-4.1-nano',
  },
  {
    id: 'o4-mini',
    label: 'o4 Mini',
    contextWindow: '200k',
    url: 'https://platform.openai.com/docs/models/o4-mini',
  },
  {
    id: 'o3',
    label: 'o3',
    contextWindow: '200k',
    url: 'https://platform.openai.com/docs/models/o3',
  },
  {
    id: 'o3-mini',
    label: 'o3 Mini',
    contextWindow: '200k',
    url: 'https://platform.openai.com/docs/models/o3-mini',
  },
  {
    id: 'o1',
    label: 'o1',
    contextWindow: '200k',
    url: 'https://platform.openai.com/docs/models/o1',
  },
  {
    id: 'o1-mini',
    label: 'o1 Mini',
    contextWindow: '128k',
    url: 'https://platform.openai.com/docs/models/o1-mini',
  },
  {
    id: 'o1-preview',
    label: 'o1 Preview',
    contextWindow: '128k',
    url: 'https://platform.openai.com/docs/models/o1-preview',
  },
  {
    id: 'gpt-4o',
    label: 'GPT-4o',
    contextWindow: '128k',
    url: 'https://platform.openai.com/docs/models/gpt-4o',
  },
  {
    id: 'gpt-4o-mini',
    label: 'GPT-4o Mini',
    contextWindow: '128k',
    url: 'https://platform.openai.com/docs/models/gpt-4o-mini',
  },
  {
    id: 'gpt-4-turbo',
    label: 'GPT-4 Turbo',
    contextWindow: '128k',
  },
  {
    id: 'gpt-4',
    label: 'GPT-4',
    contextWindow: '8k',
  },
  {
    id: 'gpt-4-32k',
    label: 'GPT-4 (32k)',
    contextWindow: '32k',
  },
  {
    id: 'gpt-3.5-turbo-0125',
    label: 'GPT-3.5 Turbo',
    contextWindow: '16k',
  },
]

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

export const useAssistant = ({ chatId, languageModel = ref(defaultLanguageModels[0]) }: { chatId: Ref<string>, languageModel?: Ref<ModelOption> }) => {
  const storageAdapter = dexieStorage()
  const apiKey = useLocalStorage<string>('openAiApiKey', '', {
    initOnMounted: true,
  })
  const logger = useLogger(consoleLogger())
  const storage = useStorage(storageAdapter)
  const peripherals = { logger, storage }
  const integration = computed(() => openai({ apiKey: apiKey.value, peripherals }))
  const chatInterface = computed(() => useChat({ chatId: chatId.value, integration: integration.value, model: languageModel.value.id, peripherals }))
  const chatModel = computed(() => chatInterface.value.model)
  const chatFactory = computed(() => chatInterface.value.factory)

  const languageModels = ref(defaultLanguageModels)

  return {
    apiKey,
    chatFactory,
    chatModel,
    languageModel,
    languageModels,
  }
}
