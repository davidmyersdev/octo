import { nanoid } from 'nanoid'

import { decrypt, encrypt } from '#root/src/common/crypto/crypto'
import { parseHeaders, parseTags, parseTasks } from '#root/src/common/parsers'

export type PackedDoc = Awaited<ReturnType<typeof pack>>

export class Doc {
  id: string
  text: string
  daily: boolean
  encrypted: boolean
  createdAt: Date
  updatedAt: Date
  touchedAt: Date

  discardedAt: Date | null
  iv: string | null
  textKey: string | null

  headers: string[]
  tags: string[]
  tasks: string[]

  firebaseId: string | null
  ownerId: string | null
  syncedAt: Date | null
  public: boolean

  constructor(attributes: Partial<Doc> = {}) {
    this.id = attributes.id || nanoid()
    this.text = attributes.text || ''
    this.textKey = attributes.textKey || null
    this.daily = attributes.daily || false
    this.iv = attributes.iv || null
    this.encrypted = attributes.encrypted || false
    this.createdAt = attributes.createdAt || new Date()
    this.updatedAt = attributes.updatedAt || new Date()
    this.touchedAt = attributes.touchedAt || new Date()
    this.discardedAt = attributes.discardedAt || null

    this.headers = this.encrypted ? [] : parseHeaders(this.text)
    this.tags = this.encrypted ? [] : parseTags(this.text)
    this.tasks = this.encrypted ? [] : parseTasks(this.text)

    // api params
    this.firebaseId = attributes.firebaseId || null
    this.ownerId = attributes.ownerId || null
    this.syncedAt = attributes.syncedAt || null
    this.public = attributes.public || false
  }

  discard() {
    const now = new Date()

    this.updatedAt = now
    this.touchedAt = now
    this.discardedAt = now
  }

  duplicate() {
    return new Doc({ text: this.text })
  }

  merge(attributes: Partial<Doc> = {}) {
    // id is not writable
    Object.assign(this, attributes, { id: this.id })
  }

  restore() {
    this.updatedAt = new Date()
    this.touchedAt = new Date()
    this.discardedAt = null
  }

  restrict() {
    this.public = false
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }

  share() {
    this.public = true
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }

  touch() {
    this.touchedAt = new Date()
  }

  update({ text = '' }: Partial<Doc>) {
    this.text = text
    this.headers.splice(0, this.headers.length, ...parseHeaders(text))
    this.tags.splice(0, this.tags.length, ...parseTags(text))
    this.tasks.splice(0, this.tasks.length, ...parseTasks(text))
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }
}

export const pack = async (doc: Doc, { preferEncryption = false, publicKey }: { preferEncryption?: boolean, publicKey?: string } = {}) => {
  const packed = Object.assign({}, {
    ...doc,
    // These values are derived from the text, so we don't need to store them.
    headers: [],
    tags: [],
    tasks: [],
  })

  // Guard against encryption edge cases.
  if (preferEncryption && publicKey && !doc.encrypted && !doc.public) {
    const { cipher, cipherKey, iv } = await encrypt({ data: packed.text, publicKey })

    return Object.assign({}, packed, {
      encrypted: true,
      iv,
      text: cipher,
      textKey: cipherKey,
    })
  }

  return Object.assign({}, packed)
}

export const unpack = async (packed: PackedDoc, { privateKey }: { privateKey?: string } = {}) => {
  try {
    if (privateKey && packed.encrypted) {
      const text = await decrypt({ cipher: packed.text, cipherKey: packed.textKey, iv: packed.iv, privateKey })

      return new Doc(
        Object.assign({}, packed, {
          encrypted: false,
          text,
        }),
      )
    }
  } catch (error) {
    // suppress decryption errors and load encrypted document
    console.error(error)
  }

  return new Doc(packed)
}

export default Doc
