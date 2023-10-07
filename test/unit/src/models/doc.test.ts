import { Doc, pack, unpack } from '#root/src/models/doc'
import privateKey from '#test/fixtures/encryption/test-key.private?raw'
import publicKey from '#test/fixtures/encryption/test-key.public?raw'
import { describe, expect, it } from '#test-utils'

describe('Doc', () => {
  describe('#createdAt', () => {
    it('defaults to now', () => {
      const doc = new Doc()

      expect(doc.createdAt).toBeInstanceOf(Date)
    })

    it('can be provided', () => {
      const date = new Date()
      const doc = new Doc({ createdAt: date })

      expect(doc.createdAt).toEqual(date)
    })
  })

  describe('#daily', () => {
    it('defaults to false', () => {
      const doc = new Doc()

      expect(doc.daily).toEqual(false)
    })

    it('can be provided', () => {
      const doc = new Doc({ daily: true })

      expect(doc.daily).toEqual(true)
    })
  })

  describe('#discard', () => {
    it('sets the discardedAt date', () => {
      const doc = new Doc()

      doc.discard()

      expect(doc.discardedAt).toBeInstanceOf(Date)
    })

    it('updates the updatedAt date to equal discardedAt', () => {
      const doc = new Doc()

      doc.discard()

      expect(doc.updatedAt).toEqual(doc.discardedAt)
    })

    it('updates the touchedAt date to equal discardedAt', () => {
      const doc = new Doc()

      doc.discard()

      expect(doc.touchedAt).toEqual(doc.discardedAt)
    })
  })

  describe('#discardedAt', () => {
    it('defaults to null', () => {
      const doc = new Doc()

      expect(doc.discardedAt).toEqual(null)
    })

    it('can be provided', () => {
      const date = new Date()
      const doc = new Doc({ discardedAt: date })

      expect(doc.discardedAt).toEqual(date)
    })
  })

  describe('#encrypted', () => {
    it('defaults to false', () => {
      const doc = new Doc()

      expect(doc.encrypted).toEqual(false)
    })

    it('can be provided', () => {
      const doc = new Doc({ encrypted: true })

      expect(doc.encrypted).toEqual(true)
    })
  })

  describe('#firebaseId', () => {
    it('defaults to null', () => {
      const doc = new Doc()

      expect(doc.firebaseId).toEqual(null)
    })

    it('can be provided', () => {
      const doc = new Doc({ firebaseId: 'foo' })

      expect(doc.firebaseId).toEqual('foo')
    })
  })

  describe('#headers', () => {
    it('defaults to an empty array', () => {
      const doc = new Doc()

      expect(doc.headers).toEqual([])
    })

    it('cannot be provided', () => {
      const doc = new Doc({ headers: ['foo'] })

      expect(doc.headers).toEqual([])
    })

    it('is parsed from the text', () => {
      const doc = new Doc({ text: '# foo' })

      expect(doc.headers).toEqual(['foo'])
    })

    it('is not parsed from the text when encrypted', () => {
      const doc = new Doc({ text: '# foo', encrypted: true })

      expect(doc.headers).toEqual([])
    })
  })

  describe('#id', () => {
    it('defaults to a unique string', () => {
      const doc1 = new Doc()
      const doc2 = new Doc()

      expect(doc1.id).not.toEqual(doc2.id)
    })

    it('can be provided', () => {
      const doc = new Doc({ id: 'foo' })

      expect(doc.id).toEqual('foo')
    })
  })

  describe('#ownerId', () => {
    it('defaults to null', () => {
      const doc = new Doc()

      expect(doc.ownerId).toEqual(null)
    })

    it('can be provided', () => {
      const doc = new Doc({ ownerId: 'foo' })

      expect(doc.ownerId).toEqual('foo')
    })
  })

  describe('#public', () => {
    it('defaults to false', () => {
      const doc = new Doc()

      expect(doc.public).toEqual(false)
    })

    it('can be provided', () => {
      const doc = new Doc({ public: true })

      expect(doc.public).toEqual(true)
    })
  })

  describe('#restore', () => {
    it('sets the discardedAt date to null', () => {
      const doc = new Doc()

      doc.restore()

      expect(doc.discardedAt).toEqual(null)
    })
  })

  describe('#syncedAt', () => {
    it('defaults to null', () => {
      const doc = new Doc()

      expect(doc.syncedAt).toEqual(null)
    })

    it('can be provided', () => {
      const date = new Date()
      const doc = new Doc({ syncedAt: date })

      expect(doc.syncedAt).toEqual(date)
    })
  })

  describe('#tags', () => {
    it('defaults to an empty array', () => {
      const doc = new Doc()

      expect(doc.tags).toEqual([])
    })

    it('cannot be provided', () => {
      const doc = new Doc({ tags: ['foo'] })

      expect(doc.tags).toEqual([])
    })

    it('is parsed from the text', () => {
      const doc = new Doc({ text: '#foo' })

      expect(doc.tags).toEqual(['foo'])
    })

    it('is not parsed from the text when encrypted', () => {
      const doc = new Doc({ text: '#foo', encrypted: true })

      expect(doc.tags).toEqual([])
    })
  })

  describe('#tasks', () => {
    it('defaults to an empty array', () => {
      const doc = new Doc()

      expect(doc.tasks).toEqual([])
    })

    it('cannot be provided', () => {
      const doc = new Doc({ tasks: ['foo'] })

      expect(doc.tasks).toEqual([])
    })

    it('is parsed from the text', () => {
      const doc = new Doc({ text: '- [ ] foo' })

      expect(doc.tasks).toEqual(['foo'])
    })

    it('is not parsed from the text when encrypted', () => {
      const doc = new Doc({ text: '- [ ] foo', encrypted: true })

      expect(doc.tasks).toEqual([])
    })
  })

  describe('#text', () => {
    it('defaults to an empty string', () => {
      const doc = new Doc()

      expect(doc.text).toEqual('')
    })

    it('can be provided', () => {
      const doc = new Doc({ text: 'foo' })

      expect(doc.text).toEqual('foo')
    })
  })

  describe('#touchedAt', () => {
    it('defaults to now', () => {
      const doc = new Doc()

      expect(doc.touchedAt).toBeInstanceOf(Date)
    })

    it('can be provided', () => {
      const date = new Date()
      const doc = new Doc({ touchedAt: date })

      expect(doc.touchedAt).toEqual(date)
    })
  })

  describe('#updatedAt', () => {
    it('defaults to now', () => {
      const doc = new Doc()

      expect(doc.updatedAt).toBeInstanceOf(Date)
    })

    it('can be provided', () => {
      const date = new Date()
      const doc = new Doc({ updatedAt: date })

      expect(doc.updatedAt).toEqual(date)
    })
  })
})

describe('pack', () => {
  it('should return a packed document with headers, tags, and tasks removed', async () => {
    const doc = new Doc({
      text: 'Hello world!',
      headers: ['Header 1', 'Header 2'],
      tags: ['Tag 1', 'Tag 2'],
      tasks: ['Task 1', 'Task 2'],
    })

    const packed = await pack(doc, {})

    expect(packed.headers).toEqual([])
    expect(packed.tags).toEqual([])
    expect(packed.tasks).toEqual([])
  })

  it('should return a packed document with encryption if preferEncryption and publicKey are provided', async () => {
    const doc = new Doc({
      text: 'Hello world!',
    })

    const packed = await pack(doc, { preferEncryption: true, publicKey: publicKey.trim() })

    expect(packed.encrypted).toBe(true)
    expect(packed.iv).not.toBeNull()
    expect(packed.textKey).not.toBeNull()
    expect(packed.text).not.toEqual(doc.text)
  })

  it('should return a packed document without encryption if preferEncryption is false', async () => {
    const doc = new Doc({
      text: 'Hello world!',
    })

    const packed = await pack(doc, { preferEncryption: false })

    expect(packed.encrypted).toBe(false)
    expect(packed.iv).toBeNull()
    expect(packed.textKey).toBeNull()
    expect(packed.text).toEqual(doc.text)
  })
})

describe('unpack', () => {
  it('should return a document with headers, tags, and tasks parsed from the text', async () => {
    const doc = new Doc({
      text: '# Header 1\n# Header 2\n#foo\n#bar\n- [ ] Task 1\n- [ ] Task 2',
    })

    const packed = await pack(doc)
    const unpacked = await unpack(packed)

    expect(unpacked.headers).toEqual(['Header 1', 'Header 2'])
    expect(unpacked.tags).toEqual(['bar', 'foo'])
    expect(unpacked.tasks).toEqual(['Task 1', 'Task 2'])
  })

  it('should return a document with decrypted text if encrypted', async () => {
    const doc = new Doc({
      text: 'Hello world!',
    })

    const packed = await pack(doc, { preferEncryption: true, publicKey: publicKey.trim() })
    const unpacked = await unpack(packed, { privateKey: privateKey.trim() })

    expect(unpacked.text).toEqual(doc.text)
  })

  it('should return a document with encrypted text if not decrypted', async () => {
    const doc = new Doc({
      text: 'Hello world!',
    })

    const packed = await pack(doc, { preferEncryption: true, publicKey: publicKey.trim() })
    const unpacked = await unpack(packed)

    expect(unpacked.text).not.toEqual(doc.text)
    expect(unpacked.encrypted).toEqual(true)
  })
})
