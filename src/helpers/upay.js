import md5 from "md5";

const upay = {
  generateSignature: (params, key) => {
    // let stringA = "";

    // Object.entries(data).forEach(([key, value]) => {
    //   if (value !== null && value !== "") {
    //     stringA += `${key}=${value}&`;
    //   }
    // });

    // console.log(stringA);

    // let stringSignTemp = `${stringA}appSecret=${key}`;
    // console.log(stringSignTemp);

    const sortedKeys = Object.keys(params).sort();

    let stringA = "";
    sortedKeys.forEach((k) => {
      if (params[k] !== null && params[k] !== "") {
        stringA += `${k}=${params[k]}&`;
      }
    });

    stringA = stringA.slice(0, -1);

    stringA += `&appSecret=${key}`;

    const signature = md5(stringA).toUpperCase();
    console.log(signature);

    return signature;
  },
};

export default upay;
