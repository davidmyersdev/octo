import { ab2str, encode, keyToBase64, str2ab } from '@/common/crypto/utils';

export const decrypt = async (cipherText, privateKey) => {
  const buffer = str2ab(window.atob(cipherText));
  const key = await importPrivateKey(privateKey);
  const decrypted = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, key, buffer);

  return ab2str(decrypted);
};

export const encrypt = async (plainText, publicKey) => {
  const encoded = encode(plainText);
  const key = await importPublicKey(publicKey);
  const encrypted = await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, encoded);

  return window.btoa(ab2str(encrypted));
};

export const exportKeyPair = async (keyPair) => {
  const privateKey = await exportPrivateKey(keyPair.privateKey);
  const publicKey = await exportPublicKey(keyPair.publicKey);

  return {
    privateKey,
    publicKey,
  };
};

export const exportPrivateKey = async (key) => {
  const base64 = await keyToBase64(key, 'pkcs8');

  return `-----BEGIN PRIVATE KEY-----\n${base64}\n-----END PRIVATE KEY-----`;
};

export const exportPublicKey = async (key) => {
  const base64 = await keyToBase64(key, 'spki');

  return `-----BEGIN PUBLIC KEY-----\n${base64}\n-----END PUBLIC KEY-----`;
};

export const generateKeyPair = async () => {
  const keyPair = await window.crypto.subtle.generateKey({
    hash: 'SHA-512',
    modulusLength: 4096,
    name: 'RSA-OAEP',
    publicExponent: new Uint8Array([1, 0, 1]),
  }, true, ['encrypt', 'decrypt']);

  return exportKeyPair(keyPair);
};

export const importPrivateKey = async (pemKey) => {
  const header = '-----BEGIN PRIVATE KEY-----';
  const footer = '-----END PRIVATE KEY-----';
  const base64 = pemKey.substring(header.length, pemKey.length - footer.length);
  const buffer = str2ab(window.atob(base64));

  return window.crypto.subtle.importKey('pkcs8', buffer, {
    hash: 'SHA-512',
    modulusLength: 4096,
    name: 'RSA-OAEP',
    publicExponent: new Uint8Array([1, 0, 1]),
  }, true, ['decrypt']);
};

export const importPublicKey = async (pemKey) => {
  const header = '-----BEGIN PUBLIC KEY-----';
  const footer = '-----END PUBLIC KEY-----';
  const base64 = pemKey.substring(header.length, pemKey.length - footer.length);
  const buffer = str2ab(window.atob(base64));

  return window.crypto.subtle.importKey('spki', buffer, {
    hash: 'SHA-512',
    modulusLength: 4096,
    name: 'RSA-OAEP',
    publicExponent: new Uint8Array([1, 0, 1]),
  }, true, ['encrypt']);
};

export default {
  decrypt,
  encrypt,
  exportKeyPair,
  exportPrivateKey,
  exportPublicKey,
  generateKeyPair,
  importPrivateKey,
  importPublicKey,
};
