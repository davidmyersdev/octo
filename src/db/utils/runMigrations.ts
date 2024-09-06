import type Dexie from 'dexie'

export type Migration = {
  run: (db: Dexie) => Promise<void>,
}

export const runMigrations = async (db: Dexie, migrations: Record<string, () => Promise<Migration>>) => {
  for (const module of Object.values(migrations)) {
    const { run } = await module()

    try {
      await run(db)
    } catch (error) {
      console.error(error)
    }
  }
}
