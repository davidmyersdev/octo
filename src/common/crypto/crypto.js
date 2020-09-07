import Asymmetric from '@/common/crypto/asymmetric';
import Symmetric from '@/common/crypto/symmetric';

export const decrypt = async (cipher, privateKey, encryptedKey, iv) => {
  const dataKeyString = await Asymmetric.decrypt(encryptedKey, privateKey);
  const dataKey = await Symmetric.importKey(dataKeyString);
  const data = await Symmetric.decrypt(cipher, dataKey, iv);

  return data;
};

export const encrypt = async (data, publicKey) => {
  const dataKey = await Symmetric.generateKey();
  const { cipher, iv } = await Symmetric.encrypt(data, dataKey);
  const dataKeyString = await Symmetric.exportKey(dataKey);
  const encryptedDataKey = await Asymmetric.encrypt(dataKeyString, publicKey);

  return {
    cipher: cipher,
    encryptedKey: encryptedDataKey,
    iv: iv,
  };
};

export default {
  decrypt,
  encrypt,
};
