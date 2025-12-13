import CryptoJS from "crypto-js";

function AesDecrypt(encryptedString, aesKey, aesIv) {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const iv = CryptoJS.enc.Utf8.parse(aesIv);
  const decrypted = CryptoJS.AES.decrypt(
    base64DecodeUrl(encryptedString.trim()),
    key,
    {
      iv,
      padding: CryptoJS.pad.ZeroPadding,
    },
  );
  return CryptoJS.enc.Utf8.stringify(decrypted);
}

function base64DecodeUrl(str) {
  str = (str + "===").slice(0, str.length + (str.length % 4));
  return str.replace(/-/g, "+").replace(/_/g, "/");
}

const aesUtil = {
  AesDecrypt,
};

export default aesUtil;
