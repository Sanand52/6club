import axios from "axios";
import connection from "../config/connectDB.js";
import aesUtil from "../helpers/AESEncrypt.js";

const dc = process.env.JDB_DC;
const key = process.env.JDB_KEY;
const iv = process.env.JDB_IV;
const agentId = process.env.JDB_AGENT_ID;
const API_URL = process.env.JDB_API_URL;

const tagList = [
  {
    id: 1,
    name: "popular",
    displayName: "Popular",
  },
  {
    id: 2,
    name: "casino",
    displayName: "Casino",
  },
  {
    id: 3,
    name: "slots",
    displayName: "Slots",
  },
  {
    id: 4,
    name: "fishing",
    displayName: "Fishing",
  },
  {
    id: 5,
    name: "rummy",
    displayName: "Rummy",
  },
  {
    id: 6,
    name: "original",
    displayName: "Original",
  },
  {
    id: 7,
    name: "popular_quick",
    displayName: "Popular Quick",
  },
];

const gameCategoriesPage = (GameTagId) => async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.APP_BASE_URL}/jdb_game_list.json`,
    });

    const tagName = tagList.find((item) => item.id === GameTagId)?.name;
    const displayName = tagList.find(
      (item) => item.id === GameTagId,
    )?.displayName;

    const gameList = response?.data?.filter((item) =>
      item.tag.includes(tagName),
    );

    const currentPath = req._parsedOriginalUrl.pathname.split("/")[2];

    return res.render("jdb/index.ejs", {
      gameName: displayName,
      gameList: gameList.map((item) => ({
        g_type: item.g_type,
        m_type: item.m_type,
        name: item.name,
        image_src: item.image,
      })),
      headerDisplay:
        currentPath === "popular" || currentPath === "original" ? "hide" : "",
      tabAddressJili: currentPath,
      tabAddressJdb: currentPath,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const gameSlotsPage = (GameTagId) => async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.APP_BASE_URL}/jdb_game_list.json`,
    });

    const tagName = tagList.find((item) => item.id === GameTagId)?.name;
    // const displayName = tagList.find(item => item.id === GameTagId)?.displayName;

    const gameList = response?.data?.filter((item) =>
      item.tag.includes(tagName),
    );

    // const currentPath = req._parsedOriginalUrl.pathname.split("/")[2];

    return res.render("jdb/slots.ejs", {
      gameList: gameList.map((item) => ({
        g_type: item.g_type,
        m_type: item.m_type,
        name: item.name,
        image_src: item.image,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const gameQuickPopularList = async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.APP_BASE_URL}/jdb_game_list.json`,
    });

    const tagName = tagList.find((item) => item.id === 7)?.name;

    const gameList = response?.data?.filter((item) =>
      item.tag.includes(tagName),
    );

    return res.status(200).send({
      gameList: gameList.map((item) => ({
        g_type: item.g_type,
        m_type: item.m_type,
        name: item.name,
        image_src: item.image,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const generateGameLink = async (req, res) => {
  try {
    let token = req.cookies.auth;
    let gType = req.query.g_type;
    let mType = req.query.m_type;

    const [rows] = await connection.execute(
      "SELECT `token`, `status`, `phone` , `money` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    if (rows.length === 0) {
      return res.status(400).json({
        message: "Login is required to access this api",
        isAuthorized: false,
      });
    }

    if (!gType || !mType) {
      return res.status(400).json({
        message: "gType and mType is required!",
        isAuthorized: true,
      });
    }

    const response = await axios({
      method: "GET",
      url: "https://bytefusionapi.com/api/neo_jdb/generate_link",
      data: {
        parent: agentId,
        uid: rows?.[0]?.phone,
        balance: rows?.[0]?.money,
        gType: gType,
        mType: mType,
        windowMode: "2",
        key: key,
        iv: iv,
        dc: dc,
        url: API_URL,
      },
    });

    const status = response.data.status;

    if (status === "0000") {
      return res.redirect(response?.data?.path);
    }

    return res.status(400).json({
      message: "Something went wrong!",
      data: response?.data,
      isAuthorized: true,
    });
  } catch (error) {
    console.log(error);
    console.log(error?.response?.data);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const mainFunction = async (req, res) => {
  try {
    const x = req.body.x;

    if (!x) {
      return res.status(400).json({
        status: "9999",
        err_text: "x is required for jdb!",
      });
    }

    const response = aesUtil.AesDecrypt(x, key, iv);
    const data = JSON.parse(response);

    const user = await getUserDataByAuthPhoneNumber(data?.uid);

    console.log(data);

    switch (data?.action) {
      case 6:
        return getBalance({ data, user, res });
      case 8:
        return betNSettle({ data, user, res });
      case 4:
        return cancelBetNSettle({ data, user, res });
      case 9:
        return bet({ data, user, res });
      case 10:
        return settle({ data, user, res });
      case 11:
        return cancelBet({ data, user, res });
      case 12:
        return activityReward({ data, user, res });
      case 13:
        return withdraw({ data, user, res });
      case 14:
        return deposit({ data, user, res });
      case 15:
        return cancelWithdraw({ data, user, res });
      case 16:
        return freeSpinReward({ data, user, res });
      default:
        return res.status(200).json({
          status: "9999",
          err_text: "Invalid action!",
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      status: "9999",
      err_text: "Something went wrong! Internal server error!",
    });
  }
};

const getBalance = async ({ data, user, res }) => {
  return res.status(200).json({
    status: "0000",
    balance: user.money,
    err_text: "",
  });
};

const betNSettle = async ({ data, user, res }) => {
  const gType = data.gType;
  const bet = Number(data.bet);
  const win = Number(data.win);
  const denom = data.denom;

  const userMoney = Number(user.money);

  let passBet = null;

  if ([0, 7, 9, 12].includes(parseInt(gType))) {
    passBet = userMoney >= bet;
  } else {
    passBet = false;
  }

  if (passBet) {
    const finalAmount = Number(userMoney + bet + win).toFixed(2);
    await connection.query(
      "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
      [finalAmount, finalAmount, user.phone],
    );

    return res.status(200).json({
      status: "0000",
      balance: finalAmount,
      err_text: "",
    });
  } else {
    return res.status(200).json({
      status: "6006",
      balance: userMoney,
      err_text: "Insufficient balance!",
    });
  }
};

const cancelBetNSettle = async ({ data, user, res }) => {
  return res.status(200).json({
    status: "0000",
    balance: user.money,
    err_text: "",
  });
};

const bet = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  if (userMoney >= amount) {
    const finalAmount = Number(userMoney - amount).toFixed(2);
    await connection.query(
      "UPDATE users SET money = money - ?, total_money =  total_money - ? WHERE `phone` = ?",
      [amount, amount, user.phone],
    );

    const cUser = await getUserDataByAuthPhoneNumber(user.phone);

    return res.status(200).json({
      status: "0000",
      balance: cUser.money,
      err_text: "",
    });
  } else {
    return res.status(200).json({
      status: "6006",
      balance: userMoney,
      err_text: "Insufficient balance!",
    });
  }
};

const settle = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);
  await connection.query(
    "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?",
    [amount, amount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const cancelBet = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);
  await connection.query(
    "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?",
    [amount, amount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const activityReward = async ({ data, user, res }) => {
  // TODO: database to insert notification for user
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);

  await connection.query(
    "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?",
    [amount, amount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const withdraw = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  if (userMoney >= amount) {
    const finalAmount = Number(userMoney - amount).toFixed(2);
    await connection.query(
      "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
      [finalAmount, finalAmount, user.phone],
    );

    return res.status(200).json({
      status: "0000",
      err_text: "",
    });
  } else {
    return res.status(200).json({
      status: "6006",
      err_text: "Insufficient balance!",
    });
  }
};

const deposit = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);
  await connection.query(
    "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
    [finalAmount, finalAmount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const cancelWithdraw = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);
  await connection.query(
    "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
    [finalAmount, finalAmount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const freeSpinReward = async ({ data, user, res }) => {
  const amount = Number(data.amount);
  const userMoney = Number(user.money);

  const finalAmount = Number(userMoney + amount).toFixed(2);
  await connection.query(
    "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
    [finalAmount, finalAmount, user.phone],
  );

  return res.status(200).json({
    status: "0000",
    balance: finalAmount,
    err_text: "",
  });
};

const jdbController = {
  generateGameLink,
  mainFunction,
  gameCategoriesPage,
  gameQuickPopularList,
  gameSlotsPage,
};

const getUserDataByAuthPhoneNumber = async (phoneNumber) => {
  let [users] = await connection.query(
    "SELECT `phone`, `money`, `name_user` FROM users WHERE `phone` = ? ",
    [phoneNumber],
  );
  const user = users?.[0];

  if (user === undefined || user === null) {
    throw Error("Unable to get user data!");
  }

  return {
    phone: user.phone,
    money: Number(user.money),
    username: user.name_user,
  };
};

export default jdbController;
