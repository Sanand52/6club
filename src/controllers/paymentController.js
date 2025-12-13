import connection from "../config/connectDB.js";
import axios from "axios";
import moment from "moment";
import querystring from "querystring";
import crypto from "crypto";
import { generateClaimRewardID, getBonuses } from "../helpers/games.js";
import {
  REWARD_STATUS_TYPES_MAP,
  REWARD_TYPES_MAP,
} from "../constants/reward_types.js";
import AppError from "../errors/AppError.js";
import upay from "../helpers/upay.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import _ from "lodash";

let timeNow = Date.now();

export const PaymentStatusMap = {
  PENDING: 0,
  SUCCESS: 1,
  CANCELLED: 2,
};

const PaymentMethodsMap = {
  UPI_GATEWAY: "upi_gateway",
  UPI_MANUAL: "upi_manual",
  USDT_MANUAL: "usdt_manual",
  WOW_PAY: "wow_pay",
  RS_PAY: "rs_pay",
  USDT: "usdt",
  UPAY: "upay",
};

// UPI Manual Payment Integration --------------
const initiateManualUPIPayment = async (req, res) => {
  const query = req.query;

  const [bank_recharge_momo] = await connection.query(
    "SELECT * FROM bank_recharge WHERE type = 'momo'",
  );

  let bank_recharge_momo_data;

  if (bank_recharge_momo.length) {
    bank_recharge_momo_data = bank_recharge_momo[0];
  }

  const momo = {
    bank_name: bank_recharge_momo_data?.name_bank || "",
    username: bank_recharge_momo_data?.name_user || "",
    upi_id: bank_recharge_momo_data?.stk || "",
    usdt_wallet_address: bank_recharge_momo_data?.qr_code_image || "",
  };

  return res.render("wallet/manual_payment.ejs", {
    Amount: query?.am,
    UpiId: momo.upi_id,
  });
};

const addManualUPIPaymentRequest = async (req, res) => {
  try {
    const data = req.body;
    let auth = req.cookies.auth;
    let money = parseInt(data.money);
    let utr = parseInt(data.utr);
    const minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_INR);

    if (!money || !(money >= minimumMoneyAllowed)) {
      return res.status(400).json({
        message: `Money is Required and it should be ₹${minimumMoneyAllowed} or above!`,
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!utr && utr?.length != 12) {
      return res.status(400).json({
        message: `UPI Ref No. or UTR is Required And it should be 12 digit long`,
        status: false,
        timeStamp: timeNow,
      });
    }

    const [isUsedUtr] = await connection.query(
      "SELECT * FROM recharge WHERE utr = ? ",
      [utr],
    );
    if (isUsedUtr.length) {
      return res.status(400).json({
        message: `UPI Ref No. or UTR is already used`,
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const pendingRechargeList = await rechargeTable.getRecordByPhoneAndStatus({
      phone: user.phone,
      status: PaymentStatusMap.PENDING,
      type: PaymentMethodsMap.UPI_GATEWAY,
    });

    if (pendingRechargeList.length !== 0) {
      const deleteRechargeQueries = pendingRechargeList.map((recharge) => {
        return rechargeTable.cancelById(recharge.id);
      });

      await Promise.all(deleteRechargeQueries);
    }

    const orderId = getRechargeOrderId();

    const newRecharge = {
      orderId: orderId,
      transactionId: "NULL",
      utr: utr,
      phone: user.phone,
      money: money,
      type: PaymentMethodsMap.UPI_MANUAL,
      status: 0,
      today: rechargeTable.getCurrentTimeForTodayField(),
      url: "NULL",
      time: rechargeTable.getCurrentTimeForTimeField(),
    };

    const recharge = await rechargeTable.create(newRecharge);

    return res.status(200).json({
      message:
        "Payment Requested successfully Your Balance will update shortly!",
      recharge: recharge,
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};
// --------------------------------------------

// USDT Manual Payment Integration ------------
const initiateManualUSDTPayment = async (req, res) => {
  const query = req.query;

  const [bank_recharge_momo] = await connection.query(
    "SELECT * FROM bank_recharge WHERE type = 'momo'",
  );

  let bank_recharge_momo_data;
  if (bank_recharge_momo.length) {
    bank_recharge_momo_data = bank_recharge_momo[0];
  }

  const momo = {
    bank_name: bank_recharge_momo_data?.name_bank || "",
    username: bank_recharge_momo_data?.name_user || "",
    upi_id: bank_recharge_momo_data?.stk || "",
    usdt_wallet_address: bank_recharge_momo_data?.qr_code_image || "",
  };

  return res.render("wallet/usdt_manual_payment.ejs", {
    Amount: query?.am,
    UsdtWalletAddress: momo.usdt_wallet_address,
  });
};

const addManualUSDTPaymentRequest = async (req, res) => {
  try {
    const data = req.body;
    let auth = req.cookies.auth;
    let money_usdt = parseInt(data.money);
    let money = money_usdt * 92;
    let utr = parseInt(data.utr);
    const minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_USDT);

    if (!money || !(money >= minimumMoneyAllowed)) {
      return res.status(400).json({
        message: `Money is Required and it should be USDT ${minimumMoneyAllowed.toFixed(2)} or above!`,
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!utr) {
      return res.status(400).json({
        message: `Ref No. or UTR is Required`,
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const pendingRechargeList = await rechargeTable.getRecordByPhoneAndStatus({
      phone: user.phone,
      status: PaymentStatusMap.PENDING,
      type: PaymentMethodsMap.UPI_GATEWAY,
    });

    if (pendingRechargeList.length !== 0) {
      const deleteRechargeQueries = pendingRechargeList.map((recharge) => {
        return rechargeTable.cancelById(recharge.id);
      });

      await Promise.all(deleteRechargeQueries);
    }

    const orderId = getRechargeOrderId();

    const newRecharge = {
      orderId: orderId,
      transactionId: "NULL",
      utr: utr,
      phone: user.phone,
      money: money,
      type: PaymentMethodsMap.USDT_MANUAL,
      status: 0,
      today: rechargeTable.getCurrentTimeForTodayField(),
      url: "NULL",
      time: rechargeTable.getCurrentTimeForTimeField(),
    };

    const recharge = await rechargeTable.create(newRecharge);

    return res.status(200).json({
      message:
        "Payment Requested successfully Your Balance will update shortly!",
      recharge: recharge,
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};
// --------------------------------------------

// UPI Gateway Payment Integration ------------
const initiateUPIPayment = async (req, res) => {
  const type = PaymentMethodsMap.UPI_GATEWAY;
  let auth = req.cookies.auth;
  let money = parseInt(req.body.money);

  const minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_INR);

  if (!money || !(money >= minimumMoneyAllowed)) {
    return res.status(400).json({
      message: `Money is Required and it should be ₹${minimumMoneyAllowed} or above!`,
      status: false,
      timeStamp: timeNow,
    });
  }

  try {
    const user = await getUserDataByAuthToken(auth);

    const pendingRechargeList = await rechargeTable.getRecordByPhoneAndStatus({
      phone: user.phone,
      status: PaymentStatusMap.PENDING,
      type: PaymentMethodsMap.UPI_GATEWAY,
    });

    if (pendingRechargeList.length !== 0) {
      const deleteRechargeQueries = pendingRechargeList.map((recharge) => {
        return rechargeTable.cancelById(recharge.id);
      });

      await Promise.all(deleteRechargeQueries);
    }

    const orderId = getRechargeOrderId();

    const ekqrResponse = await axios.post(
      "https://api.ekqr.in/api/create_order",
      {
        key: process.env.UPI_GATEWAY_PAYMENT_KEY,
        client_txn_id: orderId,
        amount: String(money),
        p_info: process.env.PAYMENT_INFO,
        customer_name: user.username,
        customer_email: process.env.PAYMENT_EMAIL,
        customer_mobile: user.phone,
        redirect_url: `${process.env.APP_BASE_URL}/wallet/verify/upi`,
        udf1: process.env.APP_NAME,
      },
    );

    const ekqrData = ekqrResponse?.data;

    if (ekqrData === undefined || ekqrData.status === false) {
      throw Error("Payment Service: Gateway error from ekqr!");
    }

    const newRecharge = {
      orderId: orderId,
      transactionId: "NULL",
      utr: 0,
      phone: user.phone,
      money: money,
      type: type,
      status: 0,
      today: rechargeTable.getCurrentTimeForTodayField(),
      url: ekqrData.data.payment_url,
      time: rechargeTable.getCurrentTimeForTimeField(),
    };

    const recharge = await rechargeTable.create(newRecharge);

    console.log(ekqrData);

    return res.status(200).json({
      message: "Payment Initiated successfully",
      recharge: recharge,
      urls: {
        web_url: ekqrData.data?.payment_url,
        bhim_link: ekqrData.data?.upi_intent?.bhim_link || "",
        phonepe_link: ekqrData.data?.upi_intent?.phonepe_link || "",
        paytm_link: ekqrData.data?.upi_intent?.paytm_link || "",
        gpay_link: ekqrData.data?.upi_intent?.gpay_link || "",
      },
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};

const verifyUPIPayment = async (req, res) => {
  const type = PaymentMethodsMap.UPI_GATEWAY;
  let auth = req.cookies.auth;
  let orderId = req.query.client_txn_id;

  if (!auth || !orderId) {
    return res.status(400).json({
      message: `orderId is Required!`,
      status: false,
      timeStamp: timeNow,
    });
  }
  try {
    const user = await getUserDataByAuthToken(auth);

    const recharge = await rechargeTable.getRechargeByOrderId({ orderId });

    if (!recharge) {
      return res.status(400).json({
        message: `Unable to find recharge with this order id!`,
        status: false,
        timeStamp: timeNow,
      });
    }

    const ekqrResponse = await axios.post(
      "https://api.ekqr.in/api/check_order_status",
      {
        key: process.env.UPI_GATEWAY_PAYMENT_KEY,
        client_txn_id: orderId,
        txn_date: rechargeTable.getDMYDateOfTodayFiled(recharge.today),
      },
    );

    const ekqrData = ekqrResponse?.data;

    if (ekqrData === undefined || ekqrData.status === false) {
      throw Error("Gateway error from ekqr!");
    }

    if (ekqrData.data.status === "created") {
      return res.status(200).json({
        message: "Your payment request is just created",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (ekqrData.data.status === "scanning") {
      return res.status(200).json({
        message: "Waiting for confirmation",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (ekqrData.data.status === "success") {
      if (
        recharge.status === PaymentStatusMap.PENDING ||
        recharge.status === PaymentStatusMap.CANCELLED
      ) {
        await rechargeTable.setStatusToSuccessByIdAndOrderId({
          id: recharge.id,
          orderId: recharge.orderId,
        });

        await addUserAccountBalance({
          phone: user.phone,
          money: recharge.money,
          code: user.code,
          invite: user.invite,
          rechargeId: recharge.id,
        });
      }

      // return res.status(200).json({
      //     status: true,
      //     message: "Payment verified",
      //     timestamp: timeNow
      // })
      return res.redirect("/wallet/rechargerecord");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};
// --------------------------------------------

// WOW PAY Payment Integration --------------- Deprecated
const initiateWowPayPayment = async (req, res) => {
  const type = PaymentMethodsMap.WOW_PAY;
  let auth = req.cookies.auth;
  let money = parseInt(req.query.money);

  const minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_INR);

  if (!money || !(money >= minimumMoneyAllowed)) {
    return res.status(400).json({
      message: `Money is Required and it should be ₹${minimumMoneyAllowed} or above!`,
      status: false,
      timeStamp: timeNow,
    });
  }

  try {
    const user = await getUserDataByAuthToken(auth);

    const pendingRechargeList = await rechargeTable.getRecordByPhoneAndStatus({
      phone: user.phone,
      status: PaymentStatusMap.PENDING,
      type: PaymentMethodsMap.UPI_GATEWAY,
    });

    if (pendingRechargeList.length !== 0) {
      const deleteRechargeQueries = pendingRechargeList.map((recharge) => {
        return rechargeTable.cancelById(recharge.id);
      });

      await Promise.all(deleteRechargeQueries);
    }

    const orderId = getRechargeOrderId();
    const date = wowpay.getCurrentDate();

    const params = {
      version: "1.0",
      // mch_id: 222887002,
      mch_id: process.env.WOWPAY_MERCHANT_ID,
      mch_order_no: orderId,
      // pay_type: '151',
      pay_type: "151",
      trade_amount: money,
      order_date: date,
      goods_name: user.phone,
      // notify_url: `${process.env.APP_BASE_URL}/wallet/verify/wowpay`,
      notify_url: `https://247cashwin.cloud/wallet/verify/wowpay`,
      mch_return_msg: user.phone,
      // payment_key: 'TZLMQ1QWJCUSFLH02LAYRZBJ1WK7IHSG',
    };

    params.page_url = "https://247cashwin.cloud/wallet/verify/wowpay";

    params.sign = wowpay.generateSign(params, process.env.WOWPAY_MERCHANT_KEY);
    // params.sign = wowpay.generateSign(params, 'TZLMQ1QWJCUSFLH02LAYRZBJ1WK7IHSG');
    // params.sign = wowpay.generateSign(params, 'MZBG89MDIBEDWJOJQYEZVSNP8EEVMSPM');
    params.sign_type = "MD5";

    console.log(params);

    const response = await axios({
      method: "post",
      url: "https://pay6de1c7.wowpayglb.com/pay/web",
      data: querystring.stringify(params),
    });

    console.log(response.data);

    if (response.data.respCode === "SUCCESS" && response.data.payInfo) {
      return res.status(200).json({
        message: "Payment requested Successfully",
        payment_url: response.data.payInfo,
        status: true,
        timeStamp: timeNow,
      });
    }

    return res.status(400).json({
      message: "Payment request failed. Please try again Or Wrong Details.",
      status: false,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};

const verifyWowPayPayment = async (req, res) => {
  try {
    const type = PaymentMethodsMap.WOW_PAY;
    let data = req.body;

    if (!req.body) {
      data = req.query;
    }

    console.log(data);

    let merchant_key = process.env.WOWPAY_MERCHANT_KEY;

    const params = {
      mchId: process.env.WOWPAY_MERCHANT_ID,
      amount: data.amount || "",
      mchOrderNo: data.mchOrderNo || "",
      merRetMsg: data.merRetMsg || "",
      orderDate: data.orderDate || "",
      orderNo: data.orderNo || "",
      oriAmount: data.oriAmount || "",
      tradeResult: data.tradeResult || "",
      signType: data.signType || "",
      sign: data.sign || "",
    };

    let signStr = "";
    signStr += "amount=" + params.amount + "&";
    signStr += "mchId=" + params.mchId + "&";
    signStr += "mchOrderNo=" + params.mchOrderNo + "&";
    signStr += "merRetMsg=" + params.merRetMsg + "&";
    signStr += "orderDate=" + params.orderDate + "&";
    signStr += "orderNo=" + params.orderNo + "&";
    signStr += "oriAmount=" + params.oriAmount + "&";
    signStr += "tradeResult=" + params.tradeResult;

    let flag = wowpay.validateSignByKey(signStr, merchant_key, params.sign);

    if (!flag) {
      console.log({
        status: false,
        message: "Something went wrong!",
        flag,
        timestamp: timeNow,
      });
      return res.status(400).json({
        status: false,
        message: "Something went wrong!",
        flag,
        timestamp: timeNow,
      });
    }

    const newRechargeParams = {
      orderId: params.mchOrderNo,
      transactionId: "NULL",
      utr: 0,
      phone: params.merRetMsg,
      money: params.amount,
      type: type,
      status: PaymentStatusMap.SUCCESS,
      today: rechargeTable.getCurrentTimeForTodayField(),
      url: "NULL",
      time: rechargeTable.getCurrentTimeForTimeField(),
    };

    const recharge = await rechargeTable.getRechargeByOrderId({
      orderId: newRechargeParams.orderId,
    });

    if (!!recharge) {
      console.log({
        message: `Recharge already verified!`,
        status: true,
        timeStamp: timeNow,
      });
      return res.status(400).json({
        message: `Recharge already verified!`,
        status: true,
        timeStamp: timeNow,
      });
    }

    const newRecharge = await rechargeTable.create(newRechargeParams);

    await addUserAccountBalance({
      phone: user.phone,
      money: recharge.money,
      code: user.code,
      invite: user.invite,
      rechargeId: recharge.id,
    });

    return res.redirect("/wallet/rechargerecord");
  } catch (error) {
    console.log({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
    return res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};
// -------------------------------------------- Deprecated

const initiateUpayPayment = async (req, res) => {
  try {
    const type = PaymentMethodsMap.UPAY;
    const schema = Joi.object({
      am: Joi.number().required(),
    });

    const API_URL = process.env.UPAY_API_URL;
    const APP_ID = process.env.UPAY_APP_ID;
    const APP_SECRET = process.env.UPAY_APP_SECRET;

    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let auth = req.cookies.auth;

    const user = await getUserDataByAuthToken(auth);

    let phone = user.phone;

    const amount = Number(req.query.am);

    let data = {
      appId: APP_ID,
      merchantOrderNo: getRechargeOrderId(),
      chainType: "1",
      fiatAmount: String(amount),
      fiatCurrency: "USD",
      notifyUrl: `${process.env.APP_BASE_URL}/wallet/verify/upay`,
    };

    console.log(data);

    const signature = upay.generateSignature(data, APP_SECRET);

    const response = await axios({
      url: `${API_URL}/v1/api/open/order/apply`,
      method: "POST",
      data: {
        ...data,
        attach: phone,
        productName: "Gaming",
        redirectUrl: `${process.env.APP_BASE_URL}/wallet/rechargerecord`,
        signature,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    const main = response.data.data;

    const newRechargeParams = {
      orderId: main.merchantOrderNo,
      transactionId: main.orderNo,
      utr: 0,
      phone: phone,
      money: amount * Number(process.env.USDT_INR_EXCHANGE_RATE),
      type: type,
      status: PaymentStatusMap.PENDING,
      today: rechargeTable.getCurrentTimeForTodayField(),
      url: "",
      time: rechargeTable.getCurrentTimeForTimeField(),
    };

    await rechargeTable.create(newRechargeParams);

    return res.status(200).redirect(response.data.data.payUrl);
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

const verifyUpayPayment = async (req, res) => {
  try {
    const type = PaymentMethodsMap.UPAY;
    let data = req.body;
    console.log(data);

    const appId = data?.appId;
    const orderNo = data?.orderNo;
    const merchantOrderNo = data?.merchantOrderNo;
    const chainType = data?.chainType;
    const crypto = data?.crypto;
    const actualCrypto = data?.actualCrypto;
    const poundage = data?.poundage;
    const actualPoundage = data?.actualPoundage;
    const status = Number(data?.status);
    const createdAt = data?.createdAt;
    const completedAt = data?.completedAt;
    const attach = data?.attach;
    const signature = data?.signature;

    if (
      !appId ||
      !orderNo ||
      !merchantOrderNo ||
      !chainType ||
      !crypto ||
      !actualCrypto ||
      !poundage ||
      !actualPoundage ||
      !status ||
      !createdAt ||
      !completedAt ||
      !attach ||
      !signature
    ) {
      return res.status(400).send("Invalid Request!");
    }

    const recharge = await rechargeTable.getRechargeByOrderId({
      orderId: merchantOrderNo,
    });

    if (!recharge) {
      console.log({
        message: `Not able to find Requested Recharge for upay verification!`,
        timeStamp: timeNow,
      });

      return res.status(400).send("failed");
    }

    const user = await getUserDataByPhoneNumber(recharge.phone);

    if (!user) {
      console.log({
        message: `Unable to find this user for upay verification!`,
        timeStamp: timeNow,
      });
      return res.status(400).send("failed");
    }

    if (!recharge) {
      console.log({
        message: `Not able to find Requested Recharge for upay verification!`,
        timeStamp: timeNow,
      });
      return res.status(400).send("failed");
    }

    if (recharge.status === PaymentStatusMap.SUCCESS) {
      return res.status(200).send("success");
    }

    if (status === 0) {
      await rechargeTable.setRechargeStatusById({
        id: recharge.id,
        status: PaymentStatusMap.PENDING,
      });
      return res.status(200).send("processing");
    }

    if (status === 1) {
      await rechargeTable.setStatusToSuccessByIdAndOrderId({
        id: recharge.id,
        orderId: recharge.orderId,
      });

      await addUserAccountBalance({
        phone: user.phone,
        money: recharge.money,
        code: user.code,
        invite: user.invite,
        rechargeId: recharge.id,
      });

      return res.status(200).send("success");
    }

    if (status === 2) {
      await rechargeTable.setRechargeStatusById({
        id: recharge.id,
        status: PaymentStatusMap.CANCELLED,
      });

      return res.status(200).send("failed");
    }

    if (status === 3) {
      await rechargeTable.setRechargeStatusById({
        id: recharge.id,
        status: PaymentStatusMap.CANCELLED,
      });

      return res.status(200).send("failed");
    }

    return res.status(200).send("failed");
  } catch (error) {
    console.log(error);
    return res.status(500).send("failed");
  }
};

// RS PAY Payment integration ---------------
const RS_PAY_PAYMENT_STATE = {
  SUCCESS: 1,
  PROCESSING: 2,
  FAILED: 3,
  PARTIALLY_SUCCESS: 4,
};

const initiateRspayPayment = async (req, res) => {
  const type = PaymentMethodsMap.RS_PAY;
  let auth = req.cookies.auth;

  let amount = parseFloat(req.query.am);

  if (!amount) {
    return res.status(400).json({
      message: `Amount and Phone is Required!`,
      status: false,
      timeStamp: timeNow,
    });
  }

  try {
    const user = await getUserDataByAuthToken(auth);

    let phone = user.phone;

    let merchantId = process.env.RSPAY_MERCHANT_ID;
    let merchantKey = process.env.RSPAY_MERCHANT_KEY;

    const orderId = getRechargeOrderId();

    let params = {
      amount: amount.toFixed(2),
      ext: "test",
      merchantId: merchantId,
      merchantOrderId: orderId,
      notifyUrl: `${process.env.APP_BASE_URL}/wallet/verify/rspay`,
      redirectUrl: `${process.env.APP_BASE_URL}/wallet/rechargerecord`,
      paymentCurrency: "INR",
      type: 2,
      userName: phone,
    };
    params["sign"] = rspay.generateSign(params, merchantKey);

    const response = await axios({
      method: "POST",
      url: "https://api.rs-pay.cc/apii/in/createOrder",
      data: params,
      headers: {
        "content-type": "application/json",
      },
    });

    if (parseInt(response.data.status) === 200) {
      const data = response.data.data;

      const newRechargeParams = {
        orderId: data.merchantOrderId,
        transactionId: data.orderId,
        utr: 0,
        phone: phone,
        money: data.amount,
        type: type,
        status: PaymentStatusMap.PENDING,
        today: rechargeTable.getCurrentTimeForTodayField(),
        url: data.payUrl,
        time: rechargeTable.getCurrentTimeForTimeField(),
      };

      await rechargeTable.create(newRechargeParams);

      return res.redirect(data.payUrl);
    }

    console.log(response.data);
    return res
      .status(400)
      .send("Something went wrong! Please try again later.");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Something went wrong!",
      timestamp: timeNow,
    });
  }
};

const verifyRspayPayment = async (req, res) => {
  try {
    // const type = PaymentMethodsMap.RS_PAY;
    let data = req.body;

    const merchantId = data?.merchantId;
    const merchantOrderId = data?.merchantOrderId;
    const orderId = data?.orderId;
    const state = data?.state;
    const amount = data?.amount;
    const factAmount = data?.factAmount;
    const ext = data?.ext;
    const utr = data?.utr;
    const sign = data?.sign;

    if (
      !merchantId ||
      !merchantOrderId ||
      !orderId ||
      !state ||
      !amount ||
      !factAmount ||
      !ext ||
      !utr ||
      !sign
    ) {
      return res.status(400).send("Invalid Request!");
    }

    if (merchantId !== process.env.RSPAY_MERCHANT_ID) {
      return res.status(401).send("failed");
    }

    const recharge = await rechargeTable.getRechargeByOrderId({
      orderId: merchantOrderId,
    });

    if (!recharge) {
      console.log({
        message: `Not able to find Requested Recharge for rspay verification!`,
        timeStamp: timeNow,
      });
      return res.status(400).send("failed");
    }

    if (parseInt(state) === RS_PAY_PAYMENT_STATE.SUCCESS) {
      const user = await getUserDataByPhoneNumber(recharge.phone);

      await rechargeTable.setStatusToSuccessByIdAndOrderId({
        id: recharge.id,
        orderId: recharge.orderId,
        utr: utr,
      });

      await addUserAccountBalance({
        phone: user.phone,
        money: recharge.money,
        code: user.code,
        invite: user.invite,
        rechargeId: recharge.id,
      });

      return res.status(200).send("success");
    } else if (parseInt(state) === RS_PAY_PAYMENT_STATE.PROCESSING) {
      return res.status(200).send("processing");
    } else if (parseInt(state) === RS_PAY_PAYMENT_STATE.FAILED) {
      await rechargeTable.cancelById(recharge.id);
      return res.status(200).send("failed");
    } else if (parseInt(state) === RS_PAY_PAYMENT_STATE.PARTIALLY_SUCCESS) {
      await rechargeTable.cancelById(recharge.id);
      return res.status(200).send("partially success");
    }

    return res.status(200).send("failed");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      errorMessage: error.message,
      error: error,
      status: false,
      timeStamp: timeNow,
    });
  }
};
// --------------------------------------------

// Browse Recharge Record ---------------------
const browseRechargeRecord = async (req, res) => {
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(200).json({
        message: "Unauthorized",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [recharge] = await connection.query(
      `SELECT * FROM recharge WHERE status = 0 AND (type = '${PaymentMethodsMap.UPI_MANUAL}' OR type = '${PaymentMethodsMap.USDT_MANUAL}')`,
      [],
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      list: recharge,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};
// --------------------------------------------

// Set Recharge Status ------------------------
const setRechargeStatus = async (req, res) => {
  try {
    let auth = req.cookies.auth;
    let data = {
      id: parseInt(req.body.id),
      status: parseInt(req.body.status),
    };

    if (!auth) {
      return res.status(401).json({
        message: "Unauthorized",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!data.id || !data.status) {
      return res.status(400).json({
        message: "Invalid Request",
        status: false,
        timeStamp: timeNow,
      });
    }

    const recharge = await rechargeTable.getRechargeById({ id: data.id });

    if (recharge === null) {
      return res.status(400).json({
        message: "Recharge not found!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (
      recharge.status === PaymentStatusMap.SUCCESS &&
      data.status === PaymentStatusMap.SUCCESS
    ) {
      return res.status(400).json({
        message: "Recharge already verified!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (
      recharge.status === PaymentStatusMap.CANCELLED &&
      data.status === PaymentStatusMap.CANCELLED
    ) {
      return res.status(400).json({
        message: "Recharge already cancelled!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (
      [
        PaymentStatusMap.SUCCESS,
        PaymentStatusMap.CANCELLED,
        PaymentStatusMap.PENDING,
      ].includes(data.status) === false
    ) {
      console.log([
        PaymentStatusMap.SUCCESS,
        PaymentStatusMap.CANCELLED,
        PaymentStatusMap.PENDING,
      ]);
      console.log(data.status);
      return res.status(400).json({
        message: "Invalid Status!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (data.status === PaymentStatusMap.SUCCESS) {
      const user = await getUserDataByPhoneNumber(recharge.phone);

      await connection.query("UPDATE recharge SET status = 1 WHERE id = ?", [
        data.id,
      ]);

      await addUserAccountBalance({
        phone: user.phone,
        money: recharge.money,
        code: user.code,
        invite: user.invite,
        rechargeId: recharge.id,
      });

      return res.status(200).json({
        message: "Recharge verified successfully!",
        status: true,
        timeStamp: timeNow,
      });
    } else if (data.status === PaymentStatusMap.CANCELLED) {
      await rechargeTable.setRechargeStatusById({
        id: data.id,
        status: PaymentStatusMap.CANCELLED,
      });
      return res.status(200).json({
        message: "Recharge cancelled successfully!",
        status: true,
        timeStamp: timeNow,
      });
    }

    await rechargeTable.setRechargeStatusById({
      id: data.id,
      status: PaymentStatusMap.PENDING,
    });
    return res.status(200).json({
      message: "Recharge set to waiting successfully!",
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      errorMessage: error.message,
      error: error,
      status: false,
      timeStamp: timeNow,
    });
  }
};

const walletTransfer = async (req, res) => {
  try {
    const schema = Joi.object({
      dialCode: Joi.string().required(),
      phone: Joi.string().required(),
      amount: Joi.number().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let auth = req.cookies.auth;

    const [rows] = await connection.query(
      "SELECT phone, money, password FROM users WHERE token = ?",
      [auth],
    );

    if (_.isEmpty(rows)) {
      return res.status(200).json({
        message: "Unauthorized",
        status: false,
      });
    }

    const user = rows[0];

    const pwd = req.body.password;

    const validPassword = await bcrypt.compare(pwd, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: false,
        message: "Invalid password",
      });
    }

    const phone = req.body.phone;

    if (phone === user.phone) {
      return res.status(400).json({
        message: "You can't transfer money to yourself!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const amount = parseFloat(req.body.amount);

    if (amount <= 0) {
      return res.status(400).json({
        message: "Amount should be greater than 0!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (user.money < amount) {
      return res.status(400).json({
        message: "Insufficient Balance!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const receiver = await connection.query(
      "SELECT * FROM users WHERE phone = ?",
      [phone],
    );

    if (receiver.length === 0) {
      return res.status(400).json({
        message: "Receiver not found!",
        status: false,
        timeStamp: timeNow,
      });
    }

    await connection.query(
      "UPDATE users SET money = money + ? WHERE phone = ?",
      [amount, phone],
    );

    await connection.query(
      "UPDATE users SET money = money - ? WHERE phone = ?",
      [amount, user.phone],
    );

    await connection.query(
      "INSERT INTO `balance_transfer` (`sender_phone`, `receiver_phone`, `amount`, `datetime`) VALUES (?, ?, ?, ?)",
      [user.phone, phone, amount, moment().format("YYYY-MM-DD HH:mm:ss")],
    );

    return res.status(200).json({
      message: "Money transferred successfully!",
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

// helpers ---------------
const getUserDataByAuthToken = async (authToken) => {
  let [users] = await connection.query(
    "SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ",
    [authToken],
  );
  const user = users?.[0];

  if (user === undefined || user === null) {
    throw Error("Unable to get user data!");
  }

  return {
    phone: user.phone,
    code: user.code,
    username: user.name_user,
    invite: user.invite,
  };
};

const getUserDataByPhoneNumber = async (phoneNumber) => {
  let [users] = await connection.query(
    "SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `phone` = ? ",
    [phoneNumber],
  );
  const user = users?.[0];

  if (user === undefined || user === null) {
    throw Error("Unable to get user data!");
  }

  return {
    phone: user.phone,
    code: user.code,
    username: user.name_user,
    invite: user.invite,
  };
};

const getUserByInviteCode = async (invite) => {
  if (!invite) throw new AppError("invite code not provided", 400);
  const [inviter] = await connection.query(
    "SELECT phone FROM users WHERE `code` = ?",
    [invite],
  );
  return inviter?.[0] || null;
};

const addUserMoney = async (phone, money) => {
  if (!phone || !money) {
    throw new AppError(
      `add User Money phone ${phone} or money ${money} not provided`,
      400,
    );
  }
  // update user money
  await connection.query(
    "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?",
    [money, money, phone],
  );
};

const addUserAccountBalance = async ({ money, phone, invite, rechargeId }) => {
  const totalRecharge = await rechargeTable.totalRechargeCount(
    PaymentStatusMap.SUCCESS,
    phone,
  );

  const bonus = (money / 100) * 5;
  const user_money = money + bonus;

  const firstRechargeBonus =
    totalRecharge === 1 ? getBonuses(money).uplineBonus : 0;
  const dailyRechargeBonus = money >= 50000 ? bonus : 0;
  const totalInviterMoney = firstRechargeBonus + dailyRechargeBonus;

  await addUserMoney(phone, user_money);

  console.log(phone, money, rechargeId, totalRecharge);
  await rechargeTable.updateRemainingBet(
    phone,
    money,
    rechargeId,
    totalRecharge,
  );

  const rewardType =
    totalRecharge === 1
      ? REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS
      : REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS;
  await addUserRewards(phone, bonus, rewardType);

  //update the inviter bonus

  const inviter = await getUserByInviteCode(invite);

  if (inviter) {
    if (firstRechargeBonus !== 0) {
      await addUserRewards(
        inviter.phone,
        firstRechargeBonus,
        REWARD_TYPES_MAP.FIRST_RECHARGE_AGENT_BONUS,
      );
    }

    if (dailyRechargeBonus !== 0) {
      await addUserRewards(
        inviter.phone,
        dailyRechargeBonus,
        REWARD_TYPES_MAP.DAILY_RECHARGE_AGENT_BONUS,
      );
    }

    if (totalInviterMoney !== 0) {
      await addUserMoney(inviter.phone, totalInviterMoney);
    }
  }
};

const getRechargeOrderId = () => {
  const date = new Date();
  let id_time =
    date.getUTCFullYear() +
    "" +
    date.getUTCMonth() +
    1 +
    "" +
    date.getUTCDate();
  let id_order =
    Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) +
    10000000000000;

  return id_time + id_order;
};

const addUserRewards = async (phone, bonus, rewardType) => {
  if (!phone || !bonus || !rewardType)
    throw new AppError(
      `add User Rewards Invalid Parameters phone ${phone} or bonus ${bonus} or rewardType ${rewardType}`,
      400,
    );
  const reward_id = generateClaimRewardID();
  let timeNow = Date.now();

  await connection.query(
    "INSERT INTO claimed_rewards (reward_id,phone, amount, type, time, status) VALUES (?,?,?,?,?,?)",
    [
      reward_id,
      phone,
      bonus,
      rewardType,
      timeNow,
      REWARD_STATUS_TYPES_MAP.SUCCESS,
    ],
  );
};

const rechargeTable = {
  getRecordByPhoneAndStatus: async ({ phone, status, type }) => {
    if (
      ![
        PaymentStatusMap.SUCCESS,
        PaymentStatusMap.CANCELLED,
        PaymentStatusMap.PENDING,
      ].includes(status)
    ) {
      throw Error("Invalid Payment Status!");
    }

    let recharge;

    if (type) {
      [recharge] = await connection.query(
        "SELECT * FROM recharge WHERE phone = ? AND status = ? AND type = ?",
        [phone, status, type],
      );
    } else {
      [recharge] = await connection.query(
        "SELECT * FROM recharge WHERE phone = ? AND status = ?",
        [phone, status],
      );
    }

    return recharge.map((item) => ({
      id: item.id,
      orderId: item.id_order,
      transactionId: item.transaction_id,
      utr: item.utr,
      phone: item.phone,
      money: item.money,
      type: item.type,
      status: item.status,
      today: item.today,
      url: item.url,
      time: item.time,
    }));
  },
  getRechargeByOrderId: async ({ orderId }) => {
    const [recharge] = await connection.query(
      "SELECT * FROM recharge WHERE id_order = ?",
      [orderId],
    );

    if (recharge.length === 0) {
      return null;
    }

    return recharge.map((item) => ({
      id: item.id,
      orderId: item.id_order,
      transactionId: item.transaction_id,
      utr: item.utr,
      phone: item.phone,
      money: item.money,
      type: item.type,
      status: item.status,
      today: item.today,
      url: item.url,
      time: item.time,
    }))?.[0];
  },
  getRechargeById: async ({ id }) => {
    const [recharge] = await connection.query(
      "SELECT * FROM recharge WHERE id = ? LIMIT 1",
      [id],
    );

    if (recharge.length === 0) {
      return null;
    }

    return recharge.map((item) => ({
      id: item.id,
      orderId: item.id_order,
      transactionId: item.transaction_id,
      utr: item.utr,
      phone: item.phone,
      money: item.money,
      type: item.type,
      status: item.status,
      today: item.today,
      url: item.url,
      time: item.time,
    }))?.[0];
  },
  totalRechargeCount: async (status, phone) => {
    if (!status || !phone) throw new AppError("Invalid Status or Phone", 400);

    const [totalRechargeRow] = await connection.query(
      "SELECT COUNT(*) as count FROM recharge WHERE phone = ? AND status = ?",
      [phone, status],
    );
    const totalRecharge = totalRechargeRow[0].count || 0;
    return totalRecharge;
  },
  updateRemainingBet: async (phone, money, rechargeId, totalRecharge) => {
    const [previousRecharge] = await connection.query(
      `SELECT remaining_bet FROM recharge WHERE phone = ? AND status = 1 ORDER BY time_remaining_bet DESC LIMIT 2`,
      [phone],
    );

    const previousRemainingBet = previousRecharge?.[1]?.remaining_bet || 0;

    const totalRemainingBet =
      totalRecharge === 0 ? money : previousRemainingBet + money;

    await connection.query(
      "UPDATE recharge SET remaining_bet = ? WHERE id = ?",
      [totalRemainingBet, rechargeId],
    );
  },
  cancelById: async (id) => {
    if (typeof id !== "number") {
      throw Error("Invalid Recharge 'id' expected a number!");
    }

    await connection.query("UPDATE recharge SET status = 2 WHERE id = ?", [id]);
  },
  setRechargeStatusById: async ({ id, status }) => {
    if (typeof id !== "number") {
      throw Error("Invalid Recharge 'id' expected a number!");
    }

    if (
      ![
        PaymentStatusMap.SUCCESS,
        PaymentStatusMap.CANCELLED,
        PaymentStatusMap.PENDING,
      ].includes(status)
    ) {
      throw Error("Invalid Payment Status!");
    }

    await connection.query("UPDATE recharge SET status = ? WHERE id = ?", [
      status,
      id,
    ]);
  },
  setStatusToSuccessByIdAndOrderId: async ({ id, orderId, utr }) => {
    if (typeof id !== "number") {
      throw Error("Invalid Recharge 'id' expected a number!");
    }

    if (utr) {
      await connection.query(
        "UPDATE recharge SET status = 1, utr = ? WHERE id = ? AND id_order = ?",
        [utr, id, orderId],
      );
    } else {
      await connection.query(
        "UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ?",
        [id, orderId],
      );
    }
  },
  getCurrentTimeForTimeField: () => {
    return moment().valueOf();
  },
  getCurrentTimeForTodayField: () => {
    return moment().format("YYYY-DD-MM h:mm:ss A");
  },
  getDMYDateOfTodayFiled: (today) => {
    return moment(today, "YYYY-DD-MM h:mm:ss A").format("DD-MM-YYYY");
  },
  create: async (newRecharge) => {
    if (newRecharge.url === undefined || newRecharge.url === null) {
      newRecharge.url = "0";
    }

    await connection.query(
      `INSERT INTO recharge SET id_order = ?, transaction_id = ?, phone = ?, money = ?, type = ?, status = ?, today = ?, url = ?, time = ?, time_remaining_bet = ?, utr = ?`,
      [
        newRecharge.orderId,
        newRecharge.transactionId,
        newRecharge.phone,
        newRecharge.money,
        newRecharge.type,
        newRecharge.status,
        newRecharge.today,
        newRecharge.url,
        newRecharge.time,
        newRecharge.time,
        newRecharge?.utr,
      ],
    );

    const [recharge] = await connection.query(
      "SELECT * FROM recharge WHERE id_order = ?",
      [newRecharge.orderId],
    );

    if (recharge.length === 0) {
      throw Error("Unable to create recharge!");
    }

    return recharge[0];
  },
};

const rspay = {
  generateSign: (params, key) => {
    const sortedKeys = Object.keys(params).sort();

    let stringA = "";
    sortedKeys.forEach((k) => {
      if (params[k] !== null && params[k] !== "") {
        stringA += `${k}=${params[k]}&`;
      }
    });

    stringA = stringA.slice(0, -1);

    stringA += `&key=${key}`;

    return crypto.createHash("sha256").update(stringA).digest("hex");
  },
};

const paymentController = {
  initiateUPIPayment,
  verifyUPIPayment,
  initiateWowPayPayment,
  verifyWowPayPayment,
  initiateManualUPIPayment,
  addManualUPIPaymentRequest,
  addManualUSDTPaymentRequest,
  initiateManualUSDTPayment,
  initiateRspayPayment,
  verifyRspayPayment,
  browseRechargeRecord,
  setRechargeStatus,
  initiateUpayPayment,
  verifyUpayPayment,
  walletTransfer,
};

export default paymentController;
