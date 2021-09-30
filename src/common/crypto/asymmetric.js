import { decode, encode, pack, unpack } from '/src/common/crypto/utils';

export const algorithm = {
  name: 'RSA-OAEP',
};

// legacy support for unwrapping data key
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
export const decrypt = async (cipher, privateKey) => {
  const decrypted = await window.crypto.subtle.decrypt(algorithm, privateKey, cipher);

  return decode(decrypted);
};

// export public/private keys to pem format
export const exportKeys = async (keys) => {
  const exported = {};

  if (keys.privateKey) {
    exported.privateKey = await exportPrivateKey(keys.privateKey);
  }

  if (keys.publicKey) {
    exported.publicKey = await exportPublicKey(keys.publicKey);
  }

  return exported;
};

export const exportPrivateKey = async (key) => {
  const base64 = pack(await window.crypto.subtle.exportKey('pkcs8', key));

  return `-----BEGIN PRIVATE KEY-----\n${base64}\n-----END PRIVATE KEY-----`;
};

export const exportPublicKey = async (key) => {
  const base64 = pack(await window.crypto.subtle.exportKey('spki', key));

  return `-----BEGIN PUBLIC KEY-----\n${base64}\n-----END PUBLIC KEY-----`;
};

export const generateKeys = async () => {
  return window.crypto.subtle.generateKey({
    hash: 'SHA-512',
    modulusLength: 4096,
    name: algorithm.name,
    publicExponent: new Uint8Array([1, 0, 1]),
  }, true, ['encrypt', 'decrypt']);
};

// import public/private pem keys
export const importKeys = async (exported) => {
  const keys = {};

  if (exported.privateKey) {
    keys.privateKey = await importPrivateKey(exported.privateKey);
  }

  if (exported.publicKey) {
    keys.publicKey = await importPublicKey(exported.publicKey);
  }

  return keys;
};

export const importPrivateKey = async (pemKey) => {
  const header = '-----BEGIN PRIVATE KEY-----';
  const footer = '-----END PRIVATE KEY-----';
  const base64 = pemKey.substring(header.length, pemKey.length - footer.length);
  const buffer = unpack(base64);

  return window.crypto.subtle.importKey('pkcs8', buffer, {
    hash: 'SHA-512',
    name: algorithm.name,
  }, true, ['decrypt', 'unwrapKey']);
};

export const importPublicKey = async (pemKey) => {
  const header = '-----BEGIN PUBLIC KEY-----';
  const footer = '-----END PUBLIC KEY-----';
  const base64 = pemKey.substring(header.length, pemKey.length - footer.length);
  const buffer = unpack(base64);

  return window.crypto.subtle.importKey('spki', buffer, {
    hash: 'SHA-512',
    name: algorithm.name,
  }, true, ['encrypt', 'wrapKey']);
};

export default {
  algorithm,
  decrypt,
  exportKeys,
  exportPrivateKey,
  exportPublicKey,
  generateKeys,
  importKeys,
  importPrivateKey,
  importPublicKey,
};
