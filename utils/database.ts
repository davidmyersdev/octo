import Dexie, { type Table } from 'dexie'

export interface Doc {
  id: string,
  parentId?: string, // the current doc
  createdAt: Date,
  daily: boolean,
  discardedAt?: Date,
  encrypted: boolean,
  firebaseId?: string,
  iv?: string,
  ownerId?: string,
  public: boolean,
  syncedAt?: Date,
  tags: string[],
  text: string,
  textKey?: string,
  touchedAt: Date,
  updatedAt: Date,
}

export const DatabaseName = 'octo'

export class OctoDatabase extends Dexie {
  docs!: Table<Doc>

  constructor() {
    super(DatabaseName)

    this.version(2).stores({
      docs: [
        // primary key
        '++id',
        // relationship identifiers
        'ownerId',
        'parentId',
        // other properties
        'createdAt',
        'daily',
        'discardedAt',
        'public',
        'syncedAt',
        'tags',
        'touchedAt',
        'updatedAt',
      ].join(','),
    })
  }
}

export const db = new OctoDatabase()
