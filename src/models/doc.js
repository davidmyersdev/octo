import { v4 as uuid } from 'uuid'

import { decrypt, encrypt } from '/src/common/crypto/crypto'
import { parseTags, parseTasks, parseHeaders } from '/src/common/parsers'

class Doc {
  constructor(attributes = {}) {
    this.id = attributes.id || uuid()
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
    this.updatedAt = new Date()
    this.touchedAt = new Date()
    this.discardedAt = new Date()
  }

  duplicate() {
    return new Doc({ text: this.text })
  }

  merge(attributes) {
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

  update({ text }) {
    this.text = text
    this.headers = parseHeaders(text)
    this.tags = parseTags(text)
    this.tasks = parseTasks(text)
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }
}

export const pack = async (doc, { preferEncryption = null, publicKey = null }) => {
  const packed = Object.assign({}, {
    ...doc,
    // These values are derived from the doc, so we don't need to store them.
    headers: [],
    tags: [],
    tasks: [],
  })

  // Guard against encryption edge cases.
  if (preferEncryption && publicKey && !doc.encrypted && !doc.public) {
    const { cipher, cipherKey, iv } = await encrypt({ data: packed.text, publicKey })

    return Object.assign({}, packed, {
      encrypted: true,
      iv: iv,
      text: cipher,
      textKey: cipherKey,
    })
  }

  return Object.assign({}, packed)
}

export const unpack = async (packed, { privateKey }) => {
  try {
    if (privateKey && packed.encrypted) {
      const text = await decrypt({ cipher: packed.text, cipherKey: packed.textKey, iv: packed.iv, privateKey })

      return new Doc(
        Object.assign({}, packed, {
          encrypted: false,
          text: text,
        })
      )
    }
  } catch (_error) {
    // suppress decryption errors and load encrypted document
  }

  return new Doc(packed)
}

export default Doc
