// convert array buffer to string
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
export const ab2str = (buffer) => {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
};

export const encode = (text) => {
  const encoder = new TextEncoder();

  return encoder.encode(text);
};

export const generateInitializationVector = () => {
  return window.crypto.getRandomValues(new Uint8Array(12));
};

export const keyToBase64 = async (key, format) => {
  return window.crypto.subtle.exportKey(format, key)
    .then(exported => window.btoa(ab2str(exported)));
};

// convert string to array buffer
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
export const str2ab = (string) => {
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);

  for (let i = 0; i < string.length; i++) {
    bufferView[i] = string.charCodeAt(i);
  }

  return buffer;
};

export default {
  ab2str,
  encode,
  generateInitializationVector,
  keyToBase64,
  str2ab,
};
