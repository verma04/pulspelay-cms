// @ts-ignore

import CryptoJS from "crypto-js";
module.exports = (context: String) => {
  try {
    return CryptoJS.TripleDES.encrypt(context, "secret key 123").toString();
  } catch (error) {
    console.warn(error);
  }
};
