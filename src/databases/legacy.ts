import Dexie, { type Table } from 'dexie'
import localforage from 'localforage'
import { type PackedDoc } from '/src/models/doc'
import { toIndexes } from './utils/toIndexes'

export type Workspace = {
  id: string,
  name: string,
  tags: string[],
}

export type Settings = typeof defaultSettings

const defaultSettings = {
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
}

class LegacyDocs extends Dexie {
  keyvaluepairs!: Table<PackedDoc>

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

    this.version(0.2).stores({
      keyvaluepairs: toIndexes(
        'id',
      ),
    })
  }
}

export const legacy = {
  docs: (new LegacyDocs()).keyvaluepairs,
  settings: (new LegacySettings()).keyvaluepairs,
  workspaces: (new LegacyWorkspaces()).keyvaluepairs,
}

export const getSettings = async ({ withDefaults = true } = {}) => {
  const instance = localforage.createInstance({ name: 'settings' })
  const settings = await instance.getItem<Settings>('main')

  if (withDefaults) {
    return Object.assign({}, defaultSettings, settings)
  }

  return settings
}
