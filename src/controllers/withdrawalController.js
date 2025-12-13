import moment from "moment";
import connection from "../config/connectDB.js";
import axios from "axios";

const WITHDRAWAL_METHODS_MAP = {
  USDT_ADDRESS: "USDT_ADDRESS",
  BANK_CARD: "BANK_CARD",
};

const WITHDRAWAL_STATUS_MAP = {
  PENDING: 0,
  APPROVED: 1,
  DENIED: 2,
};

const addBankCardPage = async (req, res) => {
  return res.render("wallet/addbank.ejs");
};

const selectBankPage = async (req, res) => {
  return res.render("wallet/selectBank.ejs");
};

const addUSDTAddressPage = async (req, res) => {
  return res.render("wallet/addAddress.ejs");
};

const addBankCard = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    let bankName = req.body.bankName;
    let recipientName = req.body.recipientName;
    let bankAccountNumber = req.body.bankAccountNumber;
    let phoneNumber = req.body.phoneNumber;
    let IFSC = req.body.IFSC;
    let upiId = req.body.upiId;

    if (
      !bankName ||
      !recipientName ||
      !bankAccountNumber ||
      !phoneNumber ||
      !IFSC ||
      !upiId
    ) {
      return res.status(400).json({
        message: "Please fill the required fields",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const account = await AccountDB.getUserBankCard({
      userPhoneNumber: user.phone,
    });

    if (account.isAvailable) {
      const account = await AccountDB.updateUserBankCard({
        userPhoneNumber: user.phone,
        bankName,
        recipientName,
        bankAccountNumber,
        phoneNumber,
        IFSC,
        upiId,
      });

      return res.status(200).json({
        account,
        message: "Successfully Updated Bank Card",
        status: true,
        timeStamp: timeNow,
      });
    } else {
      const account = await AccountDB.createUserBankCard({
        userPhoneNumber: user.phone,
        bankName,
        recipientName,
        bankAccountNumber,
        phoneNumber,
        IFSC,
        upiId,
      });

      return res.status(200).json({
        account,
        message: "Successfully Created Bank Card",
        status: true,
        timeStamp: timeNow,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const getBankCardInfo = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const account = await AccountDB.getUserBankCard({
      userPhoneNumber: user.phone,
    });

    return res.status(200).json({
      account,
      message: "Successfully fetched Bank Card",
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

const addUSDTAddress = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    let mainNetwork = req.body.mainNetwork;
    let usdtAddress = req.body.usdtAddress;
    let addressAlias = req.body.addressAlias;

    if (!mainNetwork || !usdtAddress || !addressAlias) {
      return res.status(400).json({
        message: "Please fill the required fields",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const account = await AccountDB.getUserUSDTAddress({
      userPhoneNumber: user.phone,
    });

    if (account.isAvailable) {
      const account = await AccountDB.updateUserUSDTAddress({
        userPhoneNumber: user.phone,
        mainNetwork,
        usdtAddress,
        addressAlias,
      });

      return res.status(200).json({
        account,
        message: "Successfully Updated USDT Address",
        status: true,
        timeStamp: timeNow,
      });
    } else {
      const account = await AccountDB.createUserUSDTAddress({
        userPhoneNumber: user.phone,
        mainNetwork,
        usdtAddress,
        addressAlias,
      });

      return res.status(200).json({
        account,
        message: "Successfully Created USDT Address",
        status: true,
        timeStamp: timeNow,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const getUSDTAddressInfo = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const account = await AccountDB.getUserUSDTAddress({
      userPhoneNumber: user.phone,
    });

    return res.status(200).json({
      account,
      message: "Successfully fetched USDT Address",
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

const createWithdrawalRequest = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    let withdrawalMethod = req.body.withdrawalMethod;
    let amount = req.body.amount || 0;
    let AllowedWithdrawAmount = req.body.AllowedWithdrawAmount || false;
    let totalBetAmountRemaining = req.body.totalBetAmountRemaining || 0;

    if (!withdrawalMethod) {
      return res.status(400).json({
        message: "Please select the Withdrawal Method of your choice!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (
      WITHDRAWAL_METHODS_MAP.BANK_CARD !== withdrawalMethod &&
      WITHDRAWAL_METHODS_MAP.USDT_ADDRESS !== withdrawalMethod
    ) {
      return res.status(400).json({
        message: "Please select a valid the Withdrawal Method!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const [rechargeRow] = await connection.query(
      "SELECT * FROM recharge WHERE phone = ? AND status = 1",
      [user.phone],
    );

    if (rechargeRow.length === 0) {
      return res.status(400).json({
        message: "You must deposit first to withdraw",
        status: false,
        timeStamp: timeNow,
      });
    }

    let account = { isAvailable: false };

    if (WITHDRAWAL_METHODS_MAP.BANK_CARD === withdrawalMethod) {
      account = await AccountDB.getUserBankCard({
        userPhoneNumber: user.phone,
      });
    } else {
      account = await AccountDB.getUserUSDTAddress({
        userPhoneNumber: user.phone,
      });
    }

    if (!account.isAvailable) {
      return res.status(400).json({
        message: "Please add your withdrawal method first!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const minimumMoneyAllowed =
      withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD
        ? parseInt(process.env.MINIMUM_WITHDRAWAL_MONEY_INR)
        : parseInt(process.env.MINIMUM_WITHDRAWAL_MONEY_USDT);

    let actualAmount =
      withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD
        ? parseInt(amount)
        : parseInt(amount) * parseInt(process.env.USDT_INR_EXCHANGE_RATE);

    if (amount < minimumMoneyAllowed) {
      return res.status(400).json({
        message: `You can withdraw minimum balance of ${withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD ? "₹" : "$"} ${minimumMoneyAllowed}`,
        status: false,
        timeStamp: timeNow,
      });
    }

    if (Number(user.money) < Number(actualAmount)) {
      return res.status(400).json({
        message: "The balance is not enough to fulfill the request",
        status: false,
        timeStamp: timeNow,
      });
    }

    // const totalBettingAmount = await gamesDB.getTotalBettingAmount({ userPhoneNumber: user.phone })
    // const totalDepositAmount = await depositDB.getTotalDeposit({ userPhoneNumber: user.phone })
    // const result = totalDepositAmount - totalBettingAmount > 0 ? totalDepositAmount - totalBettingAmount : 0

    if (!AllowedWithdrawAmount) {
      return res.status(400).json({
        message: "You must bet ₹ " + totalBetAmountRemaining + " to withdraw",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD) {
      const withd = await connection.query(
        "UPDATE users SET money = money - ?, total_money = total_money - ? WHERE `phone` = ? AND money >= ?",
        [amount, amount, user.phone, amount],
      );

      console.log(withd);

      withdrawDB.createBankCardWithdrawalRequest({
        userPhoneNumber: user.phone,
        bankName: account.bankName,
        recipientName: account.recipientName,
        bankAccountNumber: account.bankAccountNumber,
        IFSC: account.IFSC,
        upiId: account.upiId,
        amount: amount,
      });

      return res.status(200).json({
        message: "Withdrawal request registered Successfully!",
        status: true,
        timeStamp: timeNow,
      });
    }

    if (withdrawalMethod === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS) {
      const withd = await connection.query(
        "UPDATE users SET money = money - ?, total_money = total_money - ? WHERE `phone` = ? AND money >= ?",
        [actualAmount, actualAmount, user.phone, amount],
      );

      console.log(withd);

      withdrawDB.createUSDTWithdrawalRequest({
        userPhoneNumber: user.phone,
        mainNetwork: account.mainNetwork,
        usdtAddress: account.usdtAddress,
        addressAlias: account.addressAlias,
        amount: amount,
      });

      return res.status(200).json({
        message: "Withdrawal request registered Successfully!",
        status: true,
        timeStamp: timeNow,
      });
    }

    return res.status(400).json({
      message: "Please select a valid the Withdrawal Method!",
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

const listWithdrawalRequests = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const withdraw = await withdrawDB.getWithdrawalList({
      status: WITHDRAWAL_STATUS_MAP.PENDING,
    });

    return res.status(200).json({
      message: "Withdrawal request fetched!",
      withdrawList: withdraw.isAvailable ? withdraw.withdrawalList : [],
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

const listWithdrawalHistory = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(400).json({
        message: "Auth is required to fulfill the request!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const user = await getUserDataByAuthToken(auth);

    const withdraw = await withdrawDB.getWithdrawalList({
      status: undefined,
      userPhoneNumber: user.phone,
    });

    return res.status(200).json({
      message: "Withdrawal request fetched!",
      withdrawList: withdraw.isAvailable ? withdraw.withdrawalList : [],
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

const approveOrDenyWithdrawalRequest = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;
    let id = req.body.id;
    let status = req.body.status;
    let remarks = req.body.remarks;

    if (!auth) {
      return res.status(400).json({
        message: "Admin authentication is required!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!id || !status) {
      return res.status(400).json({
        message: "Please Provide the required fields!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const withdraw = await withdrawDB.getWithdrawalById(id);

    if (!withdraw.isAvailable) {
      return res.status(400).json({
        message: "Withdrawal request not found!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (status == WITHDRAWAL_STATUS_MAP.APPROVED) {
      await connection.execute(
        `UPDATE withdraw SET status = 1, remarks = ? WHERE id = ?`,
        [remarks, id],
      );

      return res.status(200).json({
        message: "Approved Withdrawal Request!",
        status: true,
        timeStamp: timeNow,
      });
    }

    if (status == WITHDRAWAL_STATUS_MAP.DENIED) {
      const amount = Number(withdraw.withdrawal.amount);
      let actualAmount =
        withdraw.withdrawal.type === WITHDRAWAL_METHODS_MAP.BANK_CARD
          ? Number(amount)
          : Number(amount) * Number(process.env.USDT_INR_EXCHANGE_RATE);
      console.log("amount", withdraw.withdrawal.phoneNumber);
      console.log("amount", withdraw.withdrawal);
      console.log("amount", process.env.USDT_INR_EXCHANGE_RATE);
      console.log("amount", amount);
      console.log("actualAmount", actualAmount);
      await connection.query(
        `UPDATE withdraw SET status = 2, remarks = ? WHERE id = ?`,
        [remarks, id],
      );

      await connection.query(
        "UPDATE users SET money = money + ? WHERE phone = ? ",
        [actualAmount, withdraw.withdrawal.phoneNumber],
      );

      return res.status(200).json({
        message: "Denied Withdrawal Request!",
        status: true,
        timeStamp: timeNow,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const approveAndInitiateAquapayWithdrawalRequest = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;
    let id = req.body.id;
    let password = req.body.password;

    if (!auth) {
      return res.status(400).json({
        message: "Admin authentication is required!",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!id) {
      return res.status(400).json({
        message: "Please Provide the required fields!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const withdraw = await withdrawDB.getWithdrawalById(id);

    if (!withdraw.isAvailable) {
      return res.status(400).json({
        message: "Withdrawal request not found!",
        status: false,
        timeStamp: timeNow,
      });
    }

    console.log("withdraw", {
      amount: withdraw.withdrawal.amount,
      accountName: withdraw.withdrawal.recipientName,
      accountNumber: withdraw.withdrawal.bankAccountNumber,
      ifscCode: withdraw.withdrawal.IFSC,
      username: process.env.AQUA_PAY_USERNAME,
      password: password,
      callbackUrl: `${process.env.APP_BASE_URL}/api/withdrawal/aqua_callback`,
    });

    const response = await axios({
      method: "post",
      url: "https://api.cpmall.co.in/api/external/initiate_payout",
      data: {
        amount: withdraw.withdrawal.amount,
        accountName: withdraw.withdrawal.recipientName,
        accountNumber: withdraw.withdrawal.bankAccountNumber,
        ifscCode: withdraw.withdrawal.IFSC,
        remark: "Payout is initiated from auto withdrawal system",
        username: process.env.AQUA_PAY_USERNAME,
        password: password,
        callbackUrl: `${process.env.APP_BASE_URL}/api/withdrawal/aqua_callback`,
      },
    });

    console.log("response", response.data);

    const remarks = `
      Payout is bing processed by our partnered banks. It will be credited to your account within 24 hours.
    `;

    await connection.execute(
      `UPDATE withdraw SET status = 1, remarks = ?, order_id = ? WHERE id = ?`,
      [remarks, response.data.data.orderId, id],
    );

    return res.status(200).json({
      message: "Approved Withdrawal Request!",
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error?.response?.data);
    return res.status(500).json({
      message: error?.response?.data?.message || "Something went wrong!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const verifyAquapayWithdrawalRequest = async (req, res) => {
  let timeNow = Date.now();
  try {
    let orderId = req.body.orderId;
    let state = req.body.state;
    let amount = req.body.amount;

    if (!orderId || !state || !amount) {
      return res.status(400).json({
        message: "Please Provide the required fields!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [rows] = await connection.query(
      "SELECT * FROM withdraw WHERE `order_id` = ?",
      [orderId],
    );

    if (rows.length === 0) {
      return res.status(400).json({
        message: "Withdrawal request not found!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const withdraw = rows[0];

    if (state === 1) {
      const remarks = `
        The payout has been successfully processed and credited to your account.
      `;

      await connection.execute(`UPDATE withdraw SET remarks = ? WHERE id = ?`, [
        remarks,
        withdraw.id,
      ]);

      return res.status(200).json({
        message: "Confirmed Withdrawal Request!",
        status: true,
        timeStamp: timeNow,
      });
    }

    if (state === 3) {
      const remarks = `
        The payout was declined by the bank. Please check the details and try again.
      `;

      await connection.query(
        `UPDATE withdraw SET status = 2, remarks = ? WHERE id = ?`,
        [remarks, withdraw.id],
      );

      await connection.query(
        "UPDATE users SET money = money + ? WHERE phone = ?",
        [withdraw.money, withdraw.phone],
      );

      return res.status(200).json({
        message: "Denied Withdrawal Request!",
        status: true,
        timeStamp: timeNow,
      });
    }
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
    "SELECT `phone`, `code`,`name_user`,`invite`,`money` FROM users WHERE `token` = ? ",
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
    money: user.money,
  };
};

const AccountDB = {
  async getUserBankCard({ userPhoneNumber }) {
    const type = WITHDRAWAL_METHODS_MAP.BANK_CARD;
    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isAvailable: false,
      };
    }

    return {
      isAvailable: true,
      id: account.id,
      userPhoneNumber: account.phone,
      bankName: account.name_bank,
      recipientName: account.name_user,
      bankAccountNumber: account.stk,
      phoneNumber: account.tinh,
      IFSC: account.chi_nhanh,
      upiId: account.sdt,
      type,
    };
  },
  async createUserBankCard({
    userPhoneNumber,
    bankName,
    recipientName,
    bankAccountNumber,
    phoneNumber,
    IFSC,
    upiId,
  }) {
    let time = new Date().getTime();
    const type = WITHDRAWAL_METHODS_MAP.BANK_CARD;

    await connection.query(
      `INSERT INTO user_bank SET phone = '${userPhoneNumber}', name_bank = '${bankName}', name_user = '${recipientName}', stk = '${bankAccountNumber}', tinh = '${phoneNumber}', chi_nhanh = '${IFSC}', sdt = '${upiId}', tp = '${type}', time = '${time}'`,
    );

    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isCreated: false,
      };
    }

    return {
      isCreated: true,
      userPhoneNumber: account.phone,
      bankName: account.name_bank,
      recipientName: account.name_user,
      bankAccountNumber: account.stk,
      phoneNumber: account.tinh,
      IFSC: account.chi_nhanh,
      upiId: account.sdt,
      type,
    };
  },
  async updateUserBankCard({
    userPhoneNumber,
    bankName,
    recipientName,
    bankAccountNumber,
    phoneNumber,
    IFSC,
    upiId,
  }) {
    let time = new Date().getTime();
    const type = WITHDRAWAL_METHODS_MAP.BANK_CARD;

    await connection.query(
      `UPDATE user_bank SET name_bank = '${bankName}', name_user = '${recipientName}', stk = '${bankAccountNumber}', tinh = '${phoneNumber}', chi_nhanh = '${IFSC}', sdt = '${upiId}', time = '${time}' WHERE phone = '${userPhoneNumber}' AND tp = '${type}'`,
    );

    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isCreated: false,
      };
    }

    return {
      isAvailable: true,
      userPhoneNumber: account.phone,
      bankName: account.name_bank,
      recipientName: account.name_user,
      bankAccountNumber: account.stk,
      phoneNumber: account.tinh,
      IFSC: account.chi_nhanh,
      upiId: account.sdt,
      type,
    };
  },
  async getUserUSDTAddress({ userPhoneNumber }) {
    const type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;
    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isAvailable: false,
      };
    }

    return {
      isAvailable: true,
      id: account.id,
      userPhoneNumber: account.phone,
      mainNetwork: account.name_bank,
      usdtAddress: account.stk,
      addressAlias: account.sdt,
      type,
    };
  },
  async createUserUSDTAddress({
    userPhoneNumber,
    mainNetwork,
    usdtAddress,
    addressAlias,
  }) {
    let time = new Date().getTime();
    const type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;

    await connection.query(
      `INSERT INTO user_bank SET phone = '${userPhoneNumber}', name_bank =' ${mainNetwork}', stk = '${usdtAddress}', sdt = '${addressAlias}', tp = '${type}', time = '${time}'`,
    );

    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isCreated: false,
      };
    }

    return {
      isCreated: true,
      userPhoneNumber: account.phone,
      mainNetwork: account.name_bank,
      usdtAddress: account.stk,
      addressAlias: account.sdt,
      type,
    };
  },
  async updateUserUSDTAddress({
    userPhoneNumber,
    mainNetwork,
    usdtAddress,
    addressAlias,
  }) {
    let time = new Date().getTime();
    const type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;

    await connection.query(
      `UPDATE user_bank SET name_bank = '${mainNetwork}', stk = '${usdtAddress}', sdt = '${addressAlias}', time = '${time}' WHERE phone = '${userPhoneNumber}' AND tp = '${type}'`,
    );

    let [accounts] = await connection.query(
      "SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?",
      [userPhoneNumber, type],
    );

    const account = accounts?.[0];

    if (account === undefined || account === null) {
      return {
        isAvailable: false,
      };
    }

    return {
      isAvailable: true,
      userPhoneNumber: account.phone,
      mainNetwork: account.name_bank,
      usdtAddress: account.stk,
      addressAlias: account.sdt,
      type,
    };
  },
};

const getTodayString = () => {
  return moment().format("YYYY-MM-DD h:mm:ss A");
};
const getOrderId = () => {
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

  return id_time + "" + id_order;
};

const withdrawDB = {
  async getWithdrawalById(id) {
    let [withdrawalList] = await connection.query(
      "SELECT * FROM withdraw WHERE `id` = ?",
      [id],
    );

    if (withdrawalList.length === 0) {
      return {
        isAvailable: false,
      };
    }

    return {
      isAvailable: true,
      withdrawal: withdrawalList.map((item) => {
        if (item.tp === WITHDRAWAL_METHODS_MAP.BANK_CARD) {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            bankName: item.name_bank,
            recipientName: item.name_user,
            bankAccountNumber: item.stk,
            IFSC: item.ifsc,
            upiId: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        } else if (item.tp === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS) {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            mainNetwork: item.name_bank,
            usdtAddress: item.stk,
            addressAlias: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        } else {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            bankName: item.name_bank,
            recipientName: item.name_user,
            bankAccountNumber: item.stk,
            IFSC: item.ifsc,
            upiId: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        }
      })?.[0],
    };
  },
  async getWithdrawalList({ userPhoneNumber, status }) {
    let [withdrawalList] =
      status === undefined
        ? await connection.query("SELECT * FROM withdraw WHERE `phone` = ?", [
            userPhoneNumber,
          ])
        : userPhoneNumber
          ? await connection.query(
              "SELECT * FROM withdraw WHERE `phone` = ? AND `status` = ?",
              [userPhoneNumber, status],
            )
          : await connection.query(
              "SELECT * FROM withdraw WHERE `status` = ?",
              [status],
            );

    if (withdrawalList.length === 0) {
      return {
        isAvailable: false,
      };
    }

    return {
      isAvailable: true,
      withdrawalList: withdrawalList.map((item) => {
        if (item.tp === WITHDRAWAL_METHODS_MAP.BANK_CARD) {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            bankName: item.name_bank,
            recipientName: item.name_user,
            bankAccountNumber: item.stk,
            IFSC: item.ifsc,
            upiId: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        } else if (item.tp === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS) {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            mainNetwork: item.name_bank,
            usdtAddress: item.stk,
            addressAlias: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        } else {
          return {
            id: item.id,
            orderId: item.id_order,
            phoneNumber: item.phone,
            status: item.status,
            bankName: item.name_bank,
            recipientName: item.name_user,
            bankAccountNumber: item.stk,
            IFSC: item.ifsc,
            upiId: item.sdt,
            type: item.tp,
            time: item.time,
            today: item.today,
            amount: item.money,
            remarks: item.remarks,
          };
        }
      }),
    };
  },
  async createUSDTWithdrawalRequest({
    userPhoneNumber,
    mainNetwork,
    usdtAddress,
    addressAlias,
    amount,
  }) {
    let time = new Date().getTime();
    const type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;

    await connection.query(
      `INSERT INTO withdraw SET id_order = '${getOrderId()}', phone = '${userPhoneNumber}', name_bank = '${mainNetwork}', stk = '${usdtAddress}', sdt = '${addressAlias}', tp = '${type}', time = '${time}', today = '${getTodayString()}', money = '${amount}'`,
    );
  },
  async createBankCardWithdrawalRequest({
    userPhoneNumber,
    bankName,
    recipientName,
    bankAccountNumber,
    IFSC,
    upiId,
    amount,
  }) {
    let time = new Date().getTime(); //phoneNumber
    const type = WITHDRAWAL_METHODS_MAP.BANK_CARD;

    await connection.query(
      `INSERT INTO withdraw SET id_order = '${getOrderId()}', phone = '${userPhoneNumber}', name_bank = '${bankName}', name_user = '${recipientName}', stk = '${bankAccountNumber}', ifsc = '${IFSC}', sdt = '${upiId}', tp = '${type}', time = '${time}', today = '${getTodayString()}', money = '${amount}'`,
    );
  },
  async changeWithdrawalStatus({ status, id }) {
    await connection.query(
      `UPDATE users SET status = '${status}' WHERE id = ${id}`,
    );
  },
};

const gamesDB = {
  async getTotalBettingAmount({ userPhoneNumber }) {
    const [gameWingo] = await connection.query(
      "SELECT SUM(money) as totalBettingAmount FROM minutes_1 WHERE phone = ?",
      [userPhoneNumber],
    );
    const gameWingoBettingAmount = gameWingo[0].totalBettingAmount;

    const [gameK3] = await connection.query(
      "SELECT SUM(money) as totalBettingAmount FROM result_k3 WHERE phone = ?",
      [userPhoneNumber],
    );
    const gameK3BettingAmount = gameK3[0].totalBettingAmount;

    const [game5D] = await connection.query(
      "SELECT SUM(money) as totalBettingAmount FROM result_5d WHERE phone = ?",
      [userPhoneNumber],
    );
    const game5DBettingAmount = game5D[0].totalBettingAmount;

    return gameWingoBettingAmount + gameK3BettingAmount + game5DBettingAmount;
  },
};

const depositDB = {
  async getTotalDeposit({ userPhoneNumber }) {
    const [deposit] = await connection.query(
      "SELECT SUM(money) as totalDepositAmount FROM recharge WHERE phone = ? AND status = 1",
      [userPhoneNumber],
    );
    const totalDepositAmount = deposit[0].totalDepositAmount;

    return totalDepositAmount;
  },
};

const withdrawalController = {
  addBankCard,
  getBankCardInfo,
  addUSDTAddress,
  getUSDTAddressInfo,
  createWithdrawalRequest,
  listWithdrawalRequests,
  listWithdrawalHistory,
  approveOrDenyWithdrawalRequest,
  addBankCardPage,
  addUSDTAddressPage,
  selectBankPage,
  approveAndInitiateAquapayWithdrawalRequest,
  verifyAquapayWithdrawalRequest,
};

export default withdrawalController;
