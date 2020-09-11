import asym from '@/common/crypto/asymmetric';
import sym from '@/common/crypto/symmetric';
import { pack, unpack } from '@/common/crypto/utils';

// decrypt the data key with our private key
const unwrapKey = async (wrappedKey, privateKey) => {
  return window.crypto.subtle.unwrapKey('raw', wrappedKey, privateKey, asym.algorithm, sym.algorithm, true, ['encrypt', 'decrypt']);
};

// encrypt the data key with our public key
const wrapKey = async (key, publicKey) => {
  return window.crypto.subtle.wrapKey('raw', key, publicKey, asym.algorithm);
};

/**
 * @param options decryption args
 * @param options.cipher data to be decrypted
 * @param options.cipherKey encrypted key used to decrypt data
 * @param options.iv random factor used when encrypting/decrypting data
 * @param options.privateKey key used to decrypt data key
 */
export const decrypt = async (options) => {
  // unpack data
  const cipher = unpack(options.cipher);
  const cipherKey = unpack(options.cipherKey);
  const iv = unpack(options.iv);

  // import privateKey
  const { privateKey } = await asym.importKeys({ privateKey: options.privateKey });

  // unwrap data key
  try {
    var dataKey = await unwrapKey(cipherKey, privateKey);
  } catch (_error) {
    // fallback to legacy implementation
    var dataKey = await asym.decrypt(cipherKey, privateKey).then(dec => sym.importKey(unpack(dec)));
  }

  // decrypt the data
  return sym.decrypt(cipher, dataKey, iv);
};

/**
 * @param options encryption args
 * @param options.data data to be encrypted
 * @param options.publicKey key used to encrypt the generated data key
 */
export const encrypt = async (options) => {
  // generate data key
  const dataKey = await sym.generateKey();

  // encrypt data
  const { cipher, iv } = await sym.encrypt(options.data, dataKey);

  // import publicKey
  const { publicKey } = await asym.importKeys({ publicKey: options.publicKey });

  // wrap data key
  const cipherKey = await wrapKey(dataKey, publicKey);

  // return packed, encrypted data
  return {
    cipher: pack(cipher),
    cipherKey: pack(cipherKey),
    iv: pack(iv),
  };
};

export default {
  decrypt,
  encrypt,
};
