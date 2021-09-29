import { decode, encode, generateIv, pack, unpack } from '/src/common/crypto/utils';

export const algorithm = {
  name: 'AES-GCM',
};

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
export const decrypt = async (cipher, key, iv) => {
  const encoded = await window.crypto.subtle.decrypt({
    name: algorithm.name,
    iv: iv,
  }, key, cipher);

  return decode(encoded);
};

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
export const encrypt = async (data, key) => {
  const encoded = encode(data);
  const iv = generateIv();
  const cipher = await window.crypto.subtle.encrypt({
    name: algorithm.name,
    iv: iv,
  }, key, encoded);

  return {
    cipher,
    iv,
  };
};

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
export const generateKey = async () => {
  return window.crypto.subtle.generateKey({
    name: algorithm.name,
    length: 256,
  }, true, ['encrypt', 'decrypt']);
};

// legacy support for unwrapping data key
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
export const importKey = async (keyBuffer) => {
  return window.crypto.subtle.importKey('raw', keyBuffer, algorithm.name, true, ['decrypt', 'encrypt']);
};

export default {
  algorithm,
  decrypt,
  encrypt,
  generateKey,
  importKey,
};
