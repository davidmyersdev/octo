import Dexie, { type Table } from 'dexie'
import { type PackedDoc } from '/src/models/doc'
import { toIndexes } from './utils/toIndexes'
import { legacy } from './legacy'

const migrate = async () => {
  const docs = await legacy.docs.toArray()

  await main.open()

  for (const doc of docs) {
    if (doc) {
      await main.docs.put(doc)
    }
  }
}

class Main extends Dexie {
  docs!: Table<PackedDoc>

  constructor() {
    super('main')

    this.version(1).stores({
      docs: toIndexes(
        'id',
        'createdAt',
        'discardedAt',
        'touchedAt',
        'updatedAt',
      ),
    })

    this.on('populate', migrate)

    this.version(1).upgrade(migrate)
  }
}

export const main = new Main()
