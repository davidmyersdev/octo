import { ab2str, encode, generateInitializationVector, str2ab } from '@/common/crypto/utils';

export const decrypt = async (cipherText, key, iv) => {
  const buffer = str2ab(window.atob(cipherText));
  const decrypted = await window.crypto.subtle.decrypt({
    name: 'AES-GCM',
    iv: str2ab(window.atob(iv)),
  }, key, buffer);

  return ab2str(decrypted);
};

export const encrypt = async (plainText, key) => {
  const encoded = encode(plainText);
  const iv = generateInitializationVector();
  const encrypted = await window.crypto.subtle.encrypt({
    name: 'AES-GCM',
    iv: iv,
  }, key, encoded);

  return {
    cipher: window.btoa(ab2str(encrypted)),
    iv: window.btoa(ab2str(iv)),
  };
};

export const exportKey = async (key) => {
  const exported = await window.crypto.subtle.exportKey('raw', key);
  const buffer = new Uint8Array(exported);

  return window.btoa(ab2str(buffer));
};

export const generateKey = async () => {
  return window.crypto.subtle.generateKey({
    name: 'AES-GCM',
    length: 256,
  }, true, ['encrypt', 'decrypt']);
};

export const importKey = async (key) => {
  const buffer = str2ab(window.atob(key));

  return window.crypto.subtle.importKey('raw', buffer, 'AES-GCM', true, ['decrypt', 'encrypt']);
};

export default {
  decrypt,
  encrypt,
  exportKey,
  generateKey,
  importKey,
};
