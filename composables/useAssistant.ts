import { type StorageAdapter, type StorageBucketSchema } from 'vellma/peripherals'

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

export const useAssistant = () => {
  const storageAdapter = dexieStorage()

  return {
    storageAdapter,
  }
}
