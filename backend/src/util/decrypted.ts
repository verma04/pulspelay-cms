// @ts-ignore

import CryptoJS from "crypto-js";
module.exports = (context: String) => {
  try {
    var bytes = CryptoJS.TripleDES.decrypt(context, "secret key 123");
    var originalAmxId = bytes.toString(CryptoJS.enc.Utf8);

    return originalAmxId;
  } catch (error) {
    console.warn(error);
  }
};
