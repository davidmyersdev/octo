import { db } from '/src/db'
import docs from '/test/fixtures/encryption/docs.json' with { type: 'json' }

await Promise.all(
  docs.map(async (doc: any) => {
    await db.docs.put(doc, doc.id)
  }),
)
