import { nanoid } from 'nanoid'

import { decrypt, encrypt } from '#root/src/common/crypto/crypto'
import { parseHeaders, parseReferences, parseTags, parseTasks } from '#root/src/common/parsers'

export type PackedDoc = Pick<Doc, { [Key in keyof Doc]: Doc[Key] extends Function ? never : Key }[keyof Doc]>

export class Doc {
  id: string
  text: string
  daily: boolean
  encrypted: boolean
  label: string | null
  createdAt: Date
  updatedAt: Date
  touchedAt: Date

  discardedAt: Date | null
  iv: string | null
  textKey: string | null

  headers: string[]
  references: string[]
  tags: string[]
  tasks: string[]

  html: string | null

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
    this.references = this.encrypted ? [] : parseReferences(this.text)
    this.tags = this.encrypted ? [] : parseTags(this.text)
    this.tasks = this.encrypted ? [] : parseTasks(this.text)

    this.html = attributes.html || null

    this.label = this.headers[0] || this.text.substring(0, 25)

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
    this.references.splice(0, this.references.length, ...parseReferences(text))
    this.tags.splice(0, this.tags.length, ...parseTags(text))
    this.tasks.splice(0, this.tasks.length, ...parseTasks(text))
    this.label = this.headers[0] || this.text.substring(0, 30)
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }
}

export const pack = async (doc: Doc, { preferEncryption = false, publicKey }: { preferEncryption?: boolean, publicKey?: string } = {}): Promise<PackedDoc> => {
  const packed = Object.assign({}, {
    ...doc,
    // These values are derived from the text, so we don't need to store them.
    headers: [],
    label: null,
    references: [],
    tags: [],
    tasks: [],
    // html: null,
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

export const unpack = async (packed: PackedDoc, { privateKey }: { privateKey?: string } = {}): Promise<Doc> => {
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
