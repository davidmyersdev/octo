import { v4 as uuid } from 'uuid';

import { decrypt, encrypt } from '@/common/crypto/crypto';
import { parseTags } from '@/common/parsers';

class Doc {
  constructor(attributes = {}) {
    this.id = attributes.id || uuid();
    this.text = attributes.text || '';
    this.textKey = attributes.textKey || null;
    this.iv = attributes.iv || null;
    this.encrypted = attributes.encrypted || false;
    this.createdAt = attributes.createdAt || new Date();
    this.updatedAt = attributes.updatedAt || new Date();
    this.touchedAt = attributes.touchedAt || new Date();
    this.discardedAt = attributes.discardedAt || null;

    this.tags = this.encrypted ? [] : parseTags(this.text);
  }

  discard() {
    this.updatedAt = new Date();
    this.touchedAt = new Date();
    this.discardedAt = new Date();
  }

  restore() {
    this.updatedAt = new Date();
    this.touchedAt = new Date();
    this.discardedAt = null;
  }

  touch() {
    this.touchedAt = new Date();
  }

  update({ text }) {
    this.text = text;
    this.tags = parseTags(text);
    this.updatedAt = new Date();
    this.touchedAt = new Date();
  }
}

export const pack = async (doc, { secure = true, publicKey = null }) => {
  // prevent double encryption
  if (secure) {
    const { cipher, cipherKey, iv } = await encrypt({ data: doc.text, publicKey });

    return Object.assign({}, doc, {
      encrypted: true,
      iv: iv,
      tags: [], // tags will be restored upon decryption
      text: cipher,
      textKey: cipherKey,
    });
  }

  return Object.assign({}, doc);
};

export const unpack = async (packed, { privateKey }) => {
  try {
    if (packed.encrypted) {
      const text = await decrypt({ cipher: packed.text, cipherKey: packed.textKey, iv: packed.iv, privateKey });

      return new Doc(
        Object.assign({}, packed, {
          encrypted: false,
          text: text,
        })
      );
    }
  } catch (_error) {
    // suppress decryption errors and load encrypted document
  }

  return new Doc(packed);
};

export default Doc;
