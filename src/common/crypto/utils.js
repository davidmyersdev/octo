// https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
export const decode = (bytestream) => {
  const decoder = new TextDecoder();

  return decoder.decode(bytestream);
};

// https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
export const encode = (data) => {
  const encoder = new TextEncoder();

  return encoder.encode(data);
};

// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
export const generateIv = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams
  return window.crypto.getRandomValues(new Uint8Array(12));
};

// https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
export const pack = (buffer) => {
  return window.btoa(
    String.fromCharCode.apply(null, new Uint8Array(buffer))
  );
};

// https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
export const unpack = (packed) => {
  const string = window.atob(packed);
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);

  for (let i = 0; i < string.length; i++) {
    bufferView[i] = string.charCodeAt(i);
  }

  return buffer;
};

export default {
  encode,
  generateIv,
  pack,
  unpack,
};
